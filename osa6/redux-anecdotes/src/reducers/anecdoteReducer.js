import Notification from "../components/Notification"
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export const getId = () => (100000 * Math.random()).toFixed(0)

export const increment = (id) => {
  return{
      type: "INCREASE",
      payload : id
  }
}

export const add = (content) => {
  return{
      type: "ADD",
      payload:{
          content:content,
          id:getId(),
          votes:0
      }
  }
}

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}




const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  let index = state.findIndex(state => state.id ===action.payload)
  switch(action.type){
    case "INCREASE":
    
    let suodatettu = state.filter(state => state.id !==action.payload)
    let newState = {
      content: state[index].content,
      id: state[index].id,
      votes: state[index].votes+1
    }
    
    return [newState,...suodatettu]
    case "ADD":{
     
     console.log([action.payload,...state])
      return [action.payload,...state]
    }
  }

  

  return state
}

export default reducer