const { indexOf } = require("lodash")
const lodash = require("lodash")


const dummy = (blogs) => {
   return 1
  }
  


 


  const totalLikes = (blogs) => {
    

    
   
    const result = blogs.reduce((sum,{likes})=>sum+(Number(likes)),0)
   
    
     return result
    }
   
  const favouriteBlog = (blogs) => {

      const result = blogs.reduce((favourite ,{likes}) =>  Math.max(favourite,likes),0)
        
       const resultBlog = blogs.find(blogi => blogi.likes === result)
    
       return resultBlog

  } 

  const mostBlogs = (blogs) => {

    const bloggers = blogs.map((blog) => {
      
      return  blog.author
             
    })
    const temp = lodash.countBy(bloggers)
    
    const max = Object.values(temp)
    
    function getName(object, likes) {
    return Object.keys(object).find(x => object[x] === likes);
    }
    
    
    const numberofblogs = Math.max(...max)
    const author = getName(temp,3)
    
    return ([author,numberofblogs])
  }

  const mostLikes = (blogs) => {
   
    let pairs = blogs.map(blog =>{
      return {"author":blog.author,
              "likes":blog.likes}
    })
    let names = blogs.map(blog => {
      return blog.author
    })
    
      const set = new Set(names)
      names = [...set]
      
      let scores = [0,0,0]
      for(let x = 0;x<names.length;x++){
          for(let y = 0; y<pairs.length;y++){
            
            if(names[x]===pairs[y].author){
              scores[x]= scores[x]+ pairs[y].likes 
              
            }
          }
      }
      
      let indeksi = indexOf(scores,Math.max(...scores))
     
      
      return [names[indeksi],scores[indeksi]]
    }
  

  module.exports = {
    dummy,
    totalLikes,
    favouriteBlog,
    mostBlogs,
    mostLikes
  }
