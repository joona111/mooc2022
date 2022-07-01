import axios from 'axios'
//const db = 'http://localhost:3001/persons'
const db = 'http://localhost:3001/api/persons'

const getNames = () => {
  return axios.get(db)
}

const create = newObject => {
  return axios.post(db, newObject)
}



const update = (id, person) => {
    
    return axios.put(`${db}/${id}`, person)
  }



const remove = (id,name) => {
   
    const condition = window.confirm("Do you want to remove "+name)
    if(condition===true)return axios.delete(`${db}/${id}`)
}

export default { 
  getNames: getNames, 
  create: create, 
  remove: remove,
  update:update
}