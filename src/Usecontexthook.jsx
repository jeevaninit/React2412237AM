import React, { createContext } from 'react'
import Services from './Services';
import { Childcomponent_01 } from './Childcomponent_01';
import Childcomponent_02 from './Childcomponent_02';

const MyContext=createContext();
const Mycontext2=createContext();


const Usecontexthook = () => {
  const coursedetails={
    course:'React with Redux',
    duration:'1 Month',
    fee:'10000'
  }

  return (
    <div>
      <h1>Usecontexthook</h1>
      <MyContext.Provider value={coursedetails}>
        <Services />
      </MyContext.Provider>

      <Mycontext2.Provider value={coursedetails}>
        <Childcomponent_01 />
        <Childcomponent_02 />
    
      </Mycontext2.Provider>
      </div>
  )
}

export default Usecontexthook;
export {MyContext,Mycontext2}