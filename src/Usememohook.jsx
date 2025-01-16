import React, { useMemo } from 'react'

const Usememohook = () => {
    const num1=10;
    const num2=20;

   /*  const sum=num1+num2; */

    const sum=useMemo(
        ()=>{
            return num1+num2;
        },[num1,num2]
    )

  return (
    <div>Usememohook


    <p>{sum}</p>

    </div>
  )
}

export default Usememohook