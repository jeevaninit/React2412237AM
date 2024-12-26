import React from 'react';
import myImage from './assets/logo-1.png';
import './header.css'

const Header = () => {

  const companyname='ITproSkillSet';



  return (
    <header>
     
      <img src={myImage} alt='' />
      <h1>{companyname}</h1>
      
    </header>
  )
}

export default Header