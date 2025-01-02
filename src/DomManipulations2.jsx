import React, { useState } from 'react'

const DomManipulations2 = () => {
    const [toggleContent,setToggleContent]=useState(false);

    const togglecontent=()=>{
        setToggleContent(!toggleContent);
    }

  return (
    <div className='container'>
        {toggleContent &&(
            <p>
                Hi am from Toggle Content!.....
            </p>
        )}
        <button onClick={togglecontent}>Toggle Content</button>
    </div>
  )
}

export default DomManipulations2