import React, {useState, useEffect} from 'react'
import axios from 'axios'

//1. access to api when loading: useEffect
//2. api : axios
//3. variable change: useState

const TestPage = () => {

  const [message, setMessage] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:8000/api/test`)
    .then(res => setMessage(res.data))
    .catch(err => console.log(err))
  },[])

  return (
    <div>Message from backend: {message.status}</div>
  )
}

export default TestPage