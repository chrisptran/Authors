import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//1. access to api when loading: useEffect
//2. api : axios
//3. variable change: useState

const DashboardPage = () => {

  const [authorList, setAuthorList] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors`)
    .then(res => setAuthorList(res.data))
    .catch(err => console.log(err))
  },[])

  const handleDelete = (deleteId) => {
    axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
    .then(res => {
      const updatedList = authorList.filter((eachAuthor) => eachAuthor._id !== deleteId)
      setAuthorList(updatedList)
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <p><Link to={`/authors/add`}>Create New Author</Link></p>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          {
            authorList.map((eachAuthor, idx) => {
              return(
                <tr key={idx}>
                  <td><Link to={`/authors/${eachAuthor._id}`}> {eachAuthor.name}</Link></td>
                  <td>
                    <Link to={`/authors/${eachAuthor._id}/edit`}>Edit</Link> |
                    <button className='btn btn-danger' onClick={() => handleDelete(eachAuthor._id)}>Delete</button>
                    </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default DashboardPage