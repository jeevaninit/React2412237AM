import React from 'react'
import { useContext } from 'react'
import { MyContext } from './ContextAPI'

const UseContextdata_02 = () => {

    const data=useContext(MyContext);

  return (
    <div>
        <h2>UseContextdata_02</h2>
      {data.length>0?(
        data.map((item)=>(
            <div key={item.id}>
                <p>Email: {item.email}</p>
            </div>
        ))
      ):(
        <p>Data Loading...</p>
      )}
        </div>
  )
}

export default UseContextdata_02