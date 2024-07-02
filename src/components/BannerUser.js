import React from 'react';
import './BannerUser.css';

const BannerUser = () => {
  const rutaimg = 'http://localhost/gatsby-qr/images/users/'+ localStorage.getItem('tandem_img_user')

  return (
    <>
    <div className='banneruser'>
        
        <p><img width={80} src={rutaimg}/>¡Hola <strong>{localStorage.getItem('tandem_nombre')}</strong>!</p>
        
    </div>

      {/* <p>{localStorage.getItem('tandem_email')}</p>
      <p>{localStorage.getItem('tandem_id')}</p>
      <p>{localStorage.getItem('tandem_token')}</p> */}
      
    </>
  );
};

export default BannerUser