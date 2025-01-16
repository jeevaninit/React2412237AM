import React, { useContext } from 'react'
import { Mycontext2 } from './Usecontexthook';

export const Childcomponent_01 = () => {
    const context=useContext(Mycontext2);
  return (
    <div>
        <h2>Childcomponent_01</h2>
        <p>Course: {context.course}</p>
        <p>Duration: {context.duration}</p>
        <p>Fee: {context.fee}</p>
        </div>
  )
}
