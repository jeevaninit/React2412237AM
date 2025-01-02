import React, { useState } from 'react'

const UpdateStatevalue = () => {
    const [count,setCount]=useState(0);

    const increase=()=>{
        setCount(count+1);
    }

    const decrease=()=>{
        setCount(count-1);
    }

  return (
    <div className='container'>
        <h2>{count}</h2>
        <div>       
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        </div>

    </div>
  )
}

export default UpdateStatevalue