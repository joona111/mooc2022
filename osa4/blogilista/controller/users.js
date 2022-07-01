const bcrypt = require('bcrypt')
const { request } = require('../app')

const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get("/api/users", async ( request, response) => {
    const users = await User.find({}).populate("blogs",{title : 1, author : 1})
    console.log(users)
    response.json(users)
})
const example = { 
    "userName": "Mar Popfsfpendifeck", 
   "name": "marys",
   "password":"asdf"
   
    
  }
usersRouter.post('/api/users', async (request, response) => {
    const { userName, name, password } = request.body
    
    console.log(userName,name,password)
  
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
  
    const user =  User({
      userName,
      name,
      passwordHash
    })
    console.log(user,typeof passwordHash)
    const savedUser = await user.save()
  
    response.status(201).json(savedUser)
  })
module.exports = usersRouter

