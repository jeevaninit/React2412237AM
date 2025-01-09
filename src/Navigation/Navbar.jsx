import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {


    const navigate=useNavigate();

    const menuItems=[
        {label:'HOME',path:'/home',iconpath:<HomeIcon />},
        {label:'ABOUT',path:'/about',iconpath:<PersonIcon />},
        {label:'SERVICE',path:'/service',iconpath:<MiscellaneousServicesIcon />},
        {label:'BLOG',path:'/blog',iconpath:<ViewQuiltIcon />},
        {label:'CONTACT',path:'/contact',iconpath:<ContactPhoneIcon />},
    ]

    const handlenavigation=(path)=>{
        navigate(path);
    }

  return (
    <div>
        <nav>
            {menuItems.map((item,index)=>(
                <div onClick={handlenavigation(item.path)}>
                {item.iconpath} 
                {item.label}
            </div>))}
    
        </nav>
    </div>
  )
}

export default Navbar