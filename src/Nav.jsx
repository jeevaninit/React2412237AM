import React from 'react'

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
    </nav>
  )
}

export default Nav