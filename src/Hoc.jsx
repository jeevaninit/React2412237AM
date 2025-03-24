import React, { useState } from 'react'





const Hoc = () => {
  return (
    <div>
      <Hocred Comp={Counter}/>
      <Hocblue Comp={Counter}/>
    <h1>Welcome to HOC(Higher-Order Component) </h1>
        
    </div>
  )
}


function Hocred(props){
    return <h4 style={{background:'red',color:'white'}}>Red Counter <props.Comp /></h4>
}
function Hocblue(props){
    return <h4 style={{background:'blue',color:'white'}}>Blue Counter <props.Comp /> </h4>
}


function Counter(){

    const [count,setCount]=useState(0);

    return(
        <>
          <h3>{count}</h3>
          <button onClick={()=>setCount(count+1)}>Update Value</button>
        </>
    )

}

export default Hoc