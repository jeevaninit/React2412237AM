import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mycustomcomponent from './Mycustomcomponent.jsx'
import UpdateStatevalue from './UpdateStatevalue.jsx'
import DomManipulations from './DomManipulations.jsx'
import DomManipulations2 from './DomManipulations2.jsx'
import ShowandHideBanner from './ShowandHideBanner.jsx'
import UseRef from './UseRef.jsx'
import UseEffect from './UseEffect.jsx'
import Axios from './Axios.jsx'
import NetFlixApp from './NetFlixApp/NetFlixApp.jsx'
import Boostrap from './Bootstrap/Boostrap.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgMediaCard from './Material/Materialcard.jsx'
import MaterialGrid from './Material/MaterialGrid.jsx'
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './Navigation/Navbar.jsx'

import Usecallbackhook from './Usecallbackhook.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </StrictMode>,
)
