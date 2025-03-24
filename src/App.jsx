import React from 'react'
import Conditiontest from './Conditiontest'
import Switchcondition from './Switchcondition'
import Componentrender from './Componentrender'
import Navbar from './Navigation/Navbar'
import Container from './Navigation/Container'
import MyContainer from './Navigation/Container'
import ConditionalRendering2 from './conditionalRendering2'
import Displayarea from './Displayarea'
import Usecallbackhook from './Usecallbackhook'
import Usememohook from './Usememohook'
import Usecontexthook from './Usecontexthook'
import ContextAPI from './Navigation/ContextAPI'
import { connect } from 'react-redux'
import { DecAction, IncAction } from './action'
import Hoc from './Hoc'

const App = ({count,myname,address,city,IncAction,DecAction}) => {
  return (
    <div>

    <Hoc />

      <h1>{count}</h1>
      <h2>{myname}</h2>
      <p>{address} | {city}</p>
      <button onClick={()=>IncAction(10)}>Increment</button>
      <button onClick={()=>DecAction(5)}>Decrement</button>
      
      {/* <ContextAPI /> */}
      {/* <Usecontexthook /> */}
  
{/* <Usememohook />
  <Usecallbackhook /> */}

{/*   <Navbar /> 
  <Displayarea /> */}

    </div>
  )
}

const mapStateToProps=(state)=>({
  count:state.count,
  myname:state.myname,
  address:state.myaddress.address,
  city:state.myaddress.city
})

export default connect (mapStateToProps, {IncAction,DecAction}) (App);

