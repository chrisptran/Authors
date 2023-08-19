import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

//1. form input: useState
//2. form submit
//3. post info to backend : axios
//4. logic after create: useNavigate

const CreatePage = () => {

  const [name, setName] = useState("")
  const navigate = useNavigate()

  const [errorList, setErrorList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8000/api/authors`, {name})
    .then(res => navigate(`/authors`))
    .catch(err => {
      const errResponseData = err.response.data.errors
      const tempErrArr = []
      for(const eachKey in errResponseData) {
        tempErrArr.push(errResponseData[eachKey].message)
      }
      setErrorList(tempErrArr)
    })
  }

  return (
    <div>
      <p><Link to={`/authors`}>Home</Link></p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type='text' name='name' value={name}
          onChange={(e) => setName(e.target.value)} />
        </div>
        <button type='submit'>Add Author</button>
        {
      errorList.map((eachErr, idx) => (

        <p style={{color: "red"}} key={idx}>{eachErr}</p>
        ) )
    }
      </form>
    </div>
  )
}

export default CreatePage