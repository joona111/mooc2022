import { useSelector, useDispatch } from 'react-redux'
import { increment,add } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { store } from './store'

const App = () => {
  /* const anecdotes = useSelector(state => state)
  const dispatch = useDispatch() */

  // const vote = (id) => {
    
  //   dispatch(increment(id))
   
    
  // }
  // const addAnecdote = (event) => {
  //   event.preventDefault()
  //   const content = event.target.anecdote.value
  //   event.target.anecdote.value = ''
  //   dispatch(add(content))
  // }
//  let sorted = anecdotes.sort(function(a,b){
//   return b.votes-a.votes
// })

  return (
    <div>
      {/* <h2>Anecdotes</h2>
      {sorted.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )} */}
      <AnecdoteList></AnecdoteList>
      <AnecdoteForm></AnecdoteForm>

    </div>
  )
}

export default App