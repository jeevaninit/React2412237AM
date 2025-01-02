import React, { useRef } from 'react'

const UseRef = () => {

    const myRefid=useRef(null);
    const bgRefid=useRef();

    const updagtebgcolor=()=>{
        bgRefid.current.classList.toggle('bgColor');
    }
  return (
    <div className='container' ref={bgRefid}>

        <h1 ref={myRefid}>Heading Content Here...</h1>

    <div>
        <button onClick={
            ()=>{
                myRefid.current.innerHTML="Change Default Heading Content...";
            }
        }>Click Here</button>

        <button onClick={updagtebgcolor}>ChangeBgColor</button>
        </div>
    </div>
  )
}

export default UseRef