import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [user, setUser] = useState(null)
  const [currentBlog , setCurrentBlog] = useState("uusi")

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser")
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
     
      setUser(user)
    }
  },[])
 
 

  const handleLogin = async (event) => {
    console.log(event)
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })
      blogService.setToken(user.token)
      window.localStorage.setItem("loggedUser",JSON.stringify(user))
      setUser(user)
      setUsername('')
      setPassword('')
      console.log("toimii")
    } catch (exception) {
     console.log('wrong credentials')
      
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>      
  )

  const handleBlogChange = (event) => {
    console.log(event.target.value)
  setCurrentBlog(event.target.value)
}


const addBlog = (event) => {
  event.preventDefault()
  const noteObject = {
    title: 'Benefits of Scrumban',
    author: 'Kalle Ilves',
    url: 'www.google.com',
    likes: 7,
    user:"62be7a5d36bb529c2ee07340"
  }

  blogService
    .create(noteObject)
    
}




  return (
    <div>
     
      
      
      {user === null && loginForm()}
      
  
      
      { user !== null &&<p>{user.username} logged in <Nappi setUser= {setUser}></Nappi></p>}
      {user !== null &&<Form blogService= {blogService} currentBlog = {currentBlog}  addBlog = {addBlog}></Form>}
      {user !== null &&   blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
      
     
    </div>
  )
}


const Form = ({currentBlog, handleBlogChange,addBlog}) => {
 const testi = {
  title: ' of Scrumban',
  author: 'Kalle Ilves',
  url: 'www.yle.com',
  likes: 7
}
  return(
    <>
    <h1>create new blog</h1>
    <form onSubmit={addBlog} >
      <p>title: <input
      value = {currentBlog}
      onChange = {handleBlogChange}
      /></p>
      <p>url: <input/></p>
      <p>author: <input/></p>
      <p>likes: <input/></p>
      <button type = "submit">lisää</button>
    </form>
    
    </>
    )
  }
  
const Nappi = ({setUser}) => {
    return(
    <>
    
    <button onClick={()=>{
      console.log("xD")
      window.localStorage.removeItem("loggedUser")
      setUser(null)
      }}>log out</button>
 
  
  </>)
  
}

export default App
