import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Aboutpage from './Aboutpage'
import Services from './Services'
import Contactpage from './Contactpage'


const Displayarea = () => {
  return (
    <div>
        <article>
        <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/home' element={<Homepage />}/>                  
                 <Route path='/about' element={<Aboutpage />}/>

                <Route path='/service' element={<Services />}>

                </Route>

                <Route path='/blog' element={<External />}/>
                <Route path='/contact' element={<Contactpage />}/>
            </Routes> 
        </article>
    </div>
  )
}

function External(){
    window.open('https://youtube.com','_blank');
    return null;
}

export default Displayarea