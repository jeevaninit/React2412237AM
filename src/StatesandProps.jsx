import React, { useState } from 'react'
import Props from './Props';
import Child2 from './Child2';
import Child3 from './Child3';

const StatesandProps = () => {

    const [data,setData]=useState(
        {
            username:'JeevanKonduru',
            email:'jeevan@gmail.com',
            contact:'9393898933'
        }
    ) 

    const {username,email,contact}=data;

  return (
    <div>
        <Props 
        name={username}
        email={email}
        contact={contact}           
        />

    
        <Child2 
        email={email}
        />

        <Child3 
        contact={contact}
        />


    </div>
  )
}

export default StatesandProps