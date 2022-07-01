
const { application } = require("express")

const blogitRouter = require("express").Router()
const Blogi = require('../models/blogi')
const User = require("../models/user")
const jwt = require('jsonwebtoken')

blogitRouter.delete('/api/blogs/:id', async (request, response) => {
  const blog = await Blogi.findByIdAndRemove(request.params.id)
  Blogi.findByIdAndRemove(request.params.id)
    response.json(blog)
    response.status(202).end()

  

  
  
})


blogitRouter.get('/',async  (request, response) => {
     
   const blogs = await Blogi.find({})
   
    response.json(blogs)
  
  })
  
const testidata = { 
  "title": "testi", 
 "author": "joona",
 "url":"google.fi",
 "likes":747,
 "userId" : "62be7a5d36bb529c2ee07340"
 
  
}
const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}
  blogitRouter.post('/api/blogs', async (request, response) => {
    
    const body =  request.body
    const user = await User.findById(body.userId)
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    
    const blogi =  new Blogi({
    title : body.title,
    author:body.author,
    
   
    likes:body.likes ? body.likes : 0
    ,user: user._id
    
    
  })

 
    
    const savedBlog = await blogi.save()
    user.blogs = user.blogs.concat(savedBlog.id)
    console.log(user)
    await user.save()
    response.json(savedBlog)
  })

  
module.exports = blogitRouter