import React, { useContext } from 'react'
import { Mycontext2 } from './Usecontexthook';
import { MyContext } from './Navigation/ContextAPI';

export const Childcomponent_01 = () => {
    /* const context=useContext(Mycontext2); */

    const data=useContext(MyContext)

  return (
    <>
{/*     <div>
        <h2>Childcomponent_01</h2>
        <p>Course: {context.course}</p>
        <p>Duration: {context.duration}</p>
        <p>Fee: {context.fee}</p>
        </div> */}

        <div>
          {data.map(
            (item)=>(
              <div key={item.id}>
                  <p>
                    <strong>Name:</strong> {item.name}
                  </p>
                </div>
              
            )
          )}
        </div>
      </>
  )
}
