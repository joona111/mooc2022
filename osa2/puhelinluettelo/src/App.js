import { useState ,useEffect} from 'react'

import nimet from './nimet'

const App = () => {
 

 
  
 
 
 
 
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState(null) 

  
  

  

  useEffect(() => {
    nimet.getNames().then(person => {
      setPersons(person.data)
      
      })
  },[])
 
  
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
      setMessage("added "+newName)
      nimet.create(nameObject)
      nimet.getNames().then(person => {
        setPersons(person.data)
        
        })
      //setPersons(persons.concat(nameObject))
     }
       else  if(names.includes(newName)===true){
        const confirmation = window.confirm(`${newName} already exists, do you want to update phone number?`)
        if(confirmation ===false)return
       nimet.getNames().then(response => {
        setMessage("modified number for "+ newName)
        
        nimet.update(response.data.find(e => e.name ===newName).id,nameObject)
      })
       
        
        //x.data.filter(x => x.name ===newName.name)
        
        
        
       
  }
  
 
    setNewName("")
    nimet.getNames().then(person => {
      setPersons(person.data)
      
      })
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
     <Filter filter = {filter} setFilter = {setFilter}  />
    <Notification  message={message} setMessage = {setMessage} />
    <Form 
     addName = {addName}
     handleNameChange = {handleNameChange}
     handleNumberChange = {handleNumberChange}
     newName = {newName}
     newNumber = {newNumber} />
     
     <Persons persons = {filtered} setMessage = {setMessage} setPersons = {setPersons} > </Persons>
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
const Notification = ({message,setMessage}) => {
 
  const style = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
 
  if(message===null)return null
  setTimeout(() =>{
    setMessage(null)
      },3000)
  return(
    <div style = {style}>
      {message}
    </div>
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



const Persons =({persons ,setMessage,setPersons }) => {
  return(
    <>
    <h2>Numbers</h2>
    
      {persons.map(person =><p>{person.name} {person.number}<button onClick={()=> {
        nimet.remove(person.id,person.name)
       
        
        

        setMessage(person.name+" deleted")
        
            nimet.getNames().then(person => {
              setPersons(person.data)
              
              })
        } }>delete</button></p> )}
      </>
      
  )
}

export default App