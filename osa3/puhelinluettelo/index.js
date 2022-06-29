
const { request, response } = require('express')
const express = require('express')
const app = express()
app.use(express.json())
var morgan = require('morgan')

//app.use(morgan("tiny"))

app.use(morgan(' :method :url :status :res[content-length] - :response-time ms :content'))
morgan.token('content', function getId (req) {
    return JSON.stringify(req.body)
  })
let  persons = [
    { 
      name: "Arto Hellas", 
      number: "040-123456",
      id: 1
    },
    { 
      name: "Ada Lovelace", 
      number: "39-44-5323523",
      id: 2
    },
    { 
      name: "Dan Abramov", 
      number: "12-43-234345",
      id: 3
    },
    { 
      name: "Mary Poppendieck", 
      number: "39-23-6423122",
      id: 4
    }
  ]


app.get("/",(request,response) => {
    response.send(` <p> Phonebook has info for ${persons.length} people</p> <p>${Date()}</p>`)
   
}) 

app.get("/api/persons",(request,response) => {
    response.json(persons)
})

app.get("/api/persons/:id",(request,response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id ===id)
    console.log(person)
    if(person)
    {
    response.json(person)
}
    else{
        response.status(404).end()
    }
})
app.post("/api/persons",(request,response) => {
       
    const person = (request.body)
    if(persons.filter(x => (x.name ===person.name)).length>0 ){
    console.log(persons.filter(x => (x.name ===person.name||x.number ===person.number)))
        return response.status(400).json({ 
        error: 'name already exists' 
      })}
      if(persons.filter(x => (x.number ===person.number)).length>0 ){
      
            return response.status(400).json({ 
            error: ' number already exists' 
          })}
      if(person.name.length===0 ){
        return response.status(400).json({ 
            error: 'name  is missing' 
          })
      }
      if(person.number.length===0){
        return response.status(400).json({ 
            error: 'number or number is missing' 
          })
      }
    person.id = Math.round(Math.random()*1000)
    persons = persons.concat(person)
    response.json(person)

})
app.delete("/api/persons/:id",(request,response) => {
  
   const id = Number(request.params.id)
    
    persons = persons.filter(person => person.id !== id )
    
    response.header(202).end()
     
   
})

const PORT = 3001
app.listen(PORT, () => {
    console.log("running on port 3001")
})
