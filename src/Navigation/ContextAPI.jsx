import React, { createContext, useEffect, useState } from 'react'
import UseContextdata from './UseContextdata';
import UseContextdata_02 from './UseContextdata_02';


export const MyContext=createContext();

const ContextAPI = () => {

    const [data,setData]=useState([]);


    useEffect(
        ()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=>response.json())
            .then((data)=>setData(data));
        },[]
    )

  return (
    <div>
        ContextAPI
        <MyContext.Provider value={data}>
            <UseContextdata />
            <UseContextdata_02 />
        </MyContext.Provider>
    </div>
  )
}

export default ContextAPI