import React from 'react'
import mybanner from './assets/logo-1.png';

const ShowandHideBanner = () => {

    const showbanner=()=>{
    const banner=document.getElementById('banner');
        banner.style.display='block';
        }

    const hidebanner=()=>{
        const banner=document.getElementById('banner');
        banner.style.display='none';
    }
  return (
    <div className='container'>
        <div id='banner'>
            <img src={mybanner} alt='' />
        </div>

        <div>
        <button onClick={showbanner}>Show Banner</button>
        <button onClick={hidebanner}>Hide Banner</button>
        </div>
    </div>
  )
}

export default ShowandHideBanner