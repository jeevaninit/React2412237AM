import React, { useContext } from 'react'
import { MyContext } from './ContextAPI'

const UseContextdata = () => {
       const data=useContext(MyContext)

  return (
    <div>
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
    </div>
  )
}

export default UseContextdata