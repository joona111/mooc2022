const express = require('express')
const mongoose = require('mongoose')
const config = require("./utils/config")
const cors = require("cors")

const middleware = require("./utils/middleware")

const app = express()

app.use(cors())
app.use(express.json())
//app.use(middleware.requestLogger)


const blogitRouter = require('./controller/blogit')
app.use("/",blogitRouter)


//app.use(middleware.unknownEndpoint)
//app.use(middleware.errorHandler)
  const mongoUrl = config.MONGODB_URI
  mongoose.connect(mongoUrl)
  
 
  module.exports = app