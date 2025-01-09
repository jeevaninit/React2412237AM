import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Boostrap = () => {
  return (
    <div>
      <h1>Working with FontAwesomeIcons</h1>
      <button class="btn btn-primary"><FontAwesomeIcon icon={faFacebook} /> Facebook</button>
      <button class="btn btn-danger"><FontAwesomeIcon icon={faGoogle} /> Google</button>
      <button class="btn btn-success"><WhatsAppIcon /> WhatsApp</button>
    </div>
  )
}

export default Boostrap