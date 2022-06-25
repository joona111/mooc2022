import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')

  const [newNumber,setNewNumber] = useState('')

  const [filter,setFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name :newName,
      number:newNumber
    }
 
   
  
    const names = (persons.map(person => {
   
      return person.name
      
     }))
     
     if(names.includes(newName)===false){
      setPersons(persons.concat(nameObject))
     }
       else  if(names.includes(newName)===true){
        alert(`${newName} is already added to phonebook`)
  }
    
    setNewName("")
    //console.log("add name: ",event.target)
  }
  const handleNameChange = (event) => {
    
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    
    setNewNumber(event.target.value)
  }

const filtered = persons.filter(person => person.name.includes(filter))

  



return (
    <div>
     
      <h2>Phonebook</h2>
     <Filter filter = {filter} setFilter = {setFilter} />
    
    <Form 
     addName = {addName}
     handleNameChange = {handleNameChange}
     handleNumberChange = {handleNumberChange}
     newName = {newName}
     newNumber = {newNumber} />
     
     <Persons persons = {filtered}></Persons>
    </div>
  )

}

const Form = ({addName,handleNameChange,handleNumberChange,newName,newNumber}) => {
  return(
    <form onSubmit={addName}>
    <h2>add new</h2>
    <div>
      name: <input 
      value = {newName}
      onChange = {handleNameChange} 
      />
      <div>
        number: <input
        value = {newNumber}
        onChange = {handleNumberChange}
        />
      </div>
    </div>
    <div>
      <button  type="submit">add</button>
    </div>
  </form>
  )
}
const Filter = ({filter,setFilter}) => {
  
  return(
    <>
     <input
        
        onChange={e => setFilter(e.target.value)}
        
        value = {filter}
        
        />
    
    </>
  )

}
const Persons =({persons}) => {
  return(
    <>
    <h2>Numbers</h2>
    
      {persons.map(person =><p>{person.name} {person.number}</p> )}
      </>
      
  )
}

export default App