const { application } = require('express')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const Blogi = require('../models/blogi')

const initialBlogs = [
    {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
      },
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
      }
]

beforeEach(async () => {
  await Blogi.deleteMany({})
  let blogiObject = new Blogi(initialBlogs[0])
  await blogiObject.save()
  blogiObject = new Blogi(initialBlogs[1])
  await blogiObject.save()
  
})


test("can add stuff", async () => {
    
    await api.post("/api/blogs")
            .expect("Content-Type", /application\/json/) 
            .expect(200) 
            const response = await api.get("/")
            expect(response.body.length>initialBlogs.length)
            
  
})

test("right amount of blogs", async () => {
     const response = await api.get("/")
 
    await api
        .get("/")
        .expect("Content-Type", /application\/json/)
        .expect(response.body)===(initialBlogs.length)

})

test('notes are returned as json', async () => {
 
  
    await api
    .get('/')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

const newBlog = {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "yle.fi",
    
    __v: 0
  }

test("default like is 0", async () => {
    
    await api
              .post("/api/blogs")
              .send(newBlog)
              const response = await api.get("/")
              
              expect(response.body[2].likes ===0 )  
})
  

/* test("check for empty url or title", async() => {
    const blog = {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "yle.fi",
        
        __v: 0
      }
   
     await api
                  .post("/api/blogs")
                    .send(blog)
                    const response = await api.get("/")
                   
                    expect((response.status)).toBe(404)
}) */


test("check deletion", async() => {
    let response = await api.get("/")
    console.log(response.body.length)
    
    await api.delete(`/api/blogs/5a422a851b54a676234d17f7`)
    .expect(200)
    

    const blogs = await Blogi.find({})
    const endLength = blogs.map(blog => blog.toJSON())
    expect(endLength).toHaveLength((response.body.length)-1)
    console.log(response.body.length,endLength)
    
    
})
afterAll(() => {
  mongoose.connection.close()
})