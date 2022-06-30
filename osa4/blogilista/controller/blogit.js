
const express = require("express")
const blogitRouter = express.Router()
const Blogi = require('../models/blogi')


blogitRouter.get('/', (request, response) => {
   
  Blogi.find({}).then(blogs => {
    
    response.json(blogs)
      })
  })
  
  blogitRouter.post('/api/blogs', (request, response) => {
    
    const body = request.body
    
    const blogi =  Blogi({
    title : body.title,
    author:body.author,
    url:body.url,
    likes:body.likes
    
  })
  
    blogi.save().then(result => {
     
      response.json(blogi)
      })
  })

  
module.exports = blogitRouter