import React from 'react'


function Status({status}){
    switch(status){
        case "Loading":
            return <p>Loading...</p>
        case "success":
            return <p>Data loaded Successfully...</p>
        case "error":
            return <p>Something went wrong..</p>
        default:
            return <p>Unknown Status...</p>
    }
}

const Switchcondition = () => {
  return (
    <div>
        <Status status="Loading"/>
    </div>
  )
}

export default Switchcondition