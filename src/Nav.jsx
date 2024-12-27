import React from 'react'
import List from './List'

const Nav = () => {
  const menulist=[
    'HOME',
    'ABOUT',
    'SERVICE',
    'CONTACT'
  ]
  return (
    <nav>
      {menulist.map((item,index)=>
      <li key={index}>{item}</li>
      )}
      
      {menulist.map((menuitems,keyindex)=>
        <List 
        
        key={keyindex}
        arritems={menuitems}
        />
        )}
    </nav>
  )
}

export default Nav