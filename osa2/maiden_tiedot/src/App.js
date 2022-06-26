import axios from 'axios'
import {useEffect, useState} from 'react'

const key = "6bc88abf6f69c7e1e72d95317516a3c3"
const App = () =>  {

 
const [countries,setCountries] = useState('')
const [temp,setTemp] = useState('')
const [filter,setFilter] = useState('')
  const getCountries = () =>{
    axios.get('https://restcountries.com/v3.1/all')
  .then((response) => {
    const countries = response.data
   
    setCountries(countries)
    
  })
 }
 
useEffect(() => {
  getCountries()
  
},[])






  return (
    <div className="App">
     
     <p>find countries</p>
     <Filter filter = {filter} setFilter = {setFilter} />
      
      <Names setFilter = {setFilter} countries = {countries} filter = {filter.toLowerCase()} ></Names>
  
    </div>
  );

  }
  const Names = ({countries,filter,setFilter}) => {
  
    let names = countries ? countries.map(x => x): console.log("xD") 


    let test = names ? names.filter((x) => {
      
      return x.name.common.toLowerCase().includes(filter)
    }):console.log("")
    
   

    let filtered = test ? 
   
      <>
        {test.map(name => name)}
      </>
    :<></>

    if(filtered.props.children == undefined)return
    if(filtered.props.children.length >10)return <p>Too many matches</p>
    if(filtered.props.children.length ==1) return <Country country = { filtered.props.children[0]} />
    
     return <>{ filtered.props.children.map(x=><p>{x.name.common} <button onClick={()=>setFilter(x.name.common)} >show</button></p>)}</>
  }

const Country = ({country}) => {
  return(
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area} </p>
      <h3>languages</h3>
      <list>
      
      {console.log(country.capitalInfo.latlng)}
        <ul >{Object.values(country.languages  ).map(x=><li  >{x}</li>)  }</ul>
      </list>
      <img src={country.flags.png}></img>
     
      
      
      </div>
  )
}
  const Filter = ({filter,setFilter}) => {
  
    return(
      <>
       <input
          
          onChange={e => setFilter(e.target.value)}
          
          value = {filter}
          
          />
      
      </>
    )
  
  }
export default App;
