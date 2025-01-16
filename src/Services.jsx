import React, { useContext } from 'react'
import { MyContext, Mycontext2 } from './Usecontexthook'

const Services = () => {
  const value=useContext(MyContext);

  return (
    <div>
      <h3>Services</h3>
      <p>{value.course}</p>
   
      </div>
  )
}

export default Services