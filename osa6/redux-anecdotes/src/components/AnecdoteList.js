import { useSelector,useDispatch } from "react-redux/es/exports"
import { increment } from "../reducers/anecdoteReducer"
import Notification from "./Notification"
const AnecdoteList = () => {
    const dispatch = useDispatch()
    const vote = (id) => {
    
        dispatch(increment(id))
       
        
      }

    const anecdotes = useSelector(state => state)
    
    let sorted = anecdotes.sort(function(a,b){
        return b.votes-a.votes
      })
    return (
        <>
         <h2>Anecdotes</h2>
        
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
      )}
        
        </>
    )
}
export default AnecdoteList
