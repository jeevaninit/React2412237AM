import React from 'react'
import { Mycontext2 } from './Usecontexthook';
import { useContext } from 'react';

const Childcomponent_02 = () => {
    const context=useContext(Mycontext2);
  return (
    <div>
        <h3>Childcomponent_02</h3>

<p>Course: {context.course}</p>
        <p>Duration: {context.duration}</p>
        <p>Fee: {context.fee}</p>

    </div>
  )
}

export default Childcomponent_02