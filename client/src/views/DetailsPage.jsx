import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

//1. get id from params: useParams()
//2. use id to get info from api: axios
//3. display info on load: useEffect
//4. variable change: useState

const DetailsPage = () => {

  const {id} = useParams()

  const [oneAuthor, setOneAuthor] = useState("")

  useEffect(() => {
axios.get(`http://localhost:8000/api/authors/${id}`)
.then(res => setOneAuthor(res.data))
.catch(err => console.log(err))
  },[id])

  return (
    <div>
      <p><Link to={`/authors/`} >Home</Link></p>
      <h1>Name: {oneAuthor.name}</h1>
    </div>
  )
}

export default DetailsPage