const express = require('express')
const mongoose = require('mongoose')
const config = require("./utils/config")
const cors = require("cors")


const app = express()

app.use(cors())
app.use(express.json())
//app.use(middleware.requestLogger)
const loginRouter = require('./controller/login')
app.use('/api/login', loginRouter)
const blogitRouter = require('./controller/blogit')
app.use("/",blogitRouter)
const usersRouter = require("./controller/users")
app.use("/",usersRouter)


//app.use(middleware.unknownEndpoint)
//app.use(middleware.errorHandler)
  const mongoUrl = config.MONGODB_URI
  mongoose.connect(mongoUrl)
  
 
  module.exports = app