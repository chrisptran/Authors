import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

//get the details to pre-populate
//1. get id from params: useParams()
//2. use the id to get info form api: axios
//3. display info on load: useEffect
// create form
//4. form input: onChange, useState
//5. form submit: onSubmit
//6. send formdata into api: axios
//7. logic after update: useNavigate

const EditPage = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [errorList, setErrorList] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
    
    .then(res => {
      const oneAuthor = res.data
      setName(oneAuthor.name)
    })
    .catch(err => console.log(err))
      },[id])

      const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {name})
        .then(res => {
          navigate(`/authors`)
        })
        .catch(err => {
          const errResponseData = err.response.data.errors
          const tempErrArr = []
          for(const eachKey in errResponseData) {
            tempErrArr.push(errResponseData[eachKey].message)
          }
          setErrorList(tempErrArr)
        })
      }

      const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
          navigate(`/authors`)
        })
        .catch(err => console.log(err))
      }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type='text' name='name' value={name}
          onChange={(e) => setName(e.target.value)} />
        </div>
        <button type='submit'>Update Author</button>
        <button onClick={handleDelete}>Delete</button>
        {
      errorList.map((eachErr, idx) => (

        <p style={{color: "red"}} key={idx}>{eachErr}</p>
        ) )
    }
      </form>
    </div>
  )
}

export default EditPage