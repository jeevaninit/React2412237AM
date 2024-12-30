 import React from 'react'

function Notification({hasMessages,conditiontest2}){
    return (
        <>
        <h1>Inbox</h1>
        {hasMessages && <h2>You have a New Message!...</h2>}
        {conditiontest2 && <p>Hi welcome to condition Test -2</p>}
        </>
    )
}

const Conditiontest = () => {
  return <Notification 
  
  hasMessages={true} 
  
  conditiontest2={true}
  />
}

export default Conditiontest; 

