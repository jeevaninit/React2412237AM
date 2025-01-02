import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [data,setData]=useState([]);


    useEffect(
        ()=>{
           fetch("https://jsonplaceholder.typicode.com/users")
           .then((response)=>response.json())
           .then((json)=>setData(json));
        },[]
    );

  return (
    <div className='container'>
        
        <h2>UseEffect</h2>
        <p>{data.map((user)=>(<li>{user.name}-{user.email}-{user.address.zipcode}</li>))}</p>
        
        
        </div>
  )
}

export default UseEffect