import React, { useCallback } from 'react'

const Usecallbackhook = () => {

/*     const myfunction=()=>{
        console.log("Hello am from Regular function here....")
    }
 */

    const value=11;

    const myfunction=useCallback(
        ()=>{
            console.log('Hello am from useCallback Hook...');
        },[]
    )

  return (
    <div>Usecallbackhook

      <button onClick={myfunction}>clickhere</button>
    </div>
  )
}

export default Usecallbackhook