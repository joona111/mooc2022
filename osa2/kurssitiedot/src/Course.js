const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <b>total exercises {sum}</b>

const Part = ({ part }) => 
  <p>
    
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 

  <>
    
    {parts.map(x => <Part key = {x.id} part = {x}></Part>)}
    
       
  </>
const Course = (props) => {
  
  
    let course = props.course.name
    let parts = props.course.parts
   
    
    const total = parts.reduce((sum,part) =>{
      
      return sum + part.exercises
    },0)
   
    return (
      <>
      <Header course={course} />
      <Content parts={parts} />
      <Total sum={total} />
      </>
      
    )
 
}
export default Course