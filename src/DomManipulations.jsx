import React, { useState } from 'react'

const DomManipulations = () => {

    const [isActive,setIsActive]=useState(true);

    const toggleStyle=()=>{
        setIsActive(!isActive)
    }

  return (
    <div className='container'>
       
        <div className={isActive?'activestyle':'inactivestyle'}>
            Hello am Toggling Content style
        </div>
        <button onClick={toggleStyle}>Toggle Content</button>
    </div>
  )
}

export default DomManipulations