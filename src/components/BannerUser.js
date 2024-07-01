import React from 'react';
import './BannerUser.css';
import { FaUser } from "react-icons/fa";

const BannerUser = () => {
  return (
    <>
    <div className='banneruser'>
        
        <p><FaUser style={{
          fontSize: '50px',
        }}/>¡Hola <strong>{localStorage.getItem('tandem_nombre')}</strong>!</p>
    </div>

      {/* <p>{localStorage.getItem('tandem_email')}</p>
      <p>{localStorage.getItem('tandem_id')}</p>
      <p>{localStorage.getItem('tandem_token')}</p> */}
      
    </>
  );
};

export default BannerUser