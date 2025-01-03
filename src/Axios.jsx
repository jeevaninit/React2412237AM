import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Axios = () => {

  const [data,setData]=useState([]);

  useEffect(
    ()=>{
      axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(Response=>setData(Response.data))
    },[]
  )

  return (
    <div>
      <h1>Get API Data using AXios</h1>
      <p>{data.map((comment)=>(
        <table border='1'>
          <tr>
            <td>{comment.name}</td>
            <td>{comment.body}</td>
          </tr>

        </table>
        ))}</p>
    </div>
  )
}

export default Axios