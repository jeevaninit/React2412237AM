import React from 'react'

const Props = (props) => {
    const {username,email,contact}=props;
  return (
    <div>
     <p style={{color:'red'}}>{email}</p>
     <p style={{color:'Green'}}>{contact}</p>
 
    </div>
  )
}

export default Props