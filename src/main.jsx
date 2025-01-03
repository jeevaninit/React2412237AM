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

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/*   <App /> */}
{/* <UpdateStatevalue /> */}
{/* <DomManipulations /> */}
{/* <DomManipulations2 /> */}
{/* <ShowandHideBanner /> */}
{/* <UseRef /> */}
{/* <UseEffect /> */}
{/* <Axios /> */}
<NetFlixApp />
  </StrictMode>,
)
