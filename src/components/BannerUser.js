import React from 'react';
import './BannerUser.css';

const BannerUser = () => {
  const rutaimg = 'https://carol.tandempatrimonionacional.eu/gatsbyqr/images/users/'+ localStorage.getItem('tandem_image_url')
  // const rutaimg = 'http://localhost/gatsby-qr/images/users/' + localStorage.getItem('tandem_image_url');
  // const remoteUrl = 'https://carol.tandempatrimonionacional.eu/gatsbyqr/images/users/' + localStorage.getItem('tandem_image_url');

  // console.log('Local URL:', rutaimg);
  // console.log('Remote URL:', remoteUrl);
  return (
    <>
    <div className='banneruser'>
        
        <p><img width={80} src={rutaimg}/> ¡Hola <strong>{localStorage.getItem('tandem_nombre')}</strong>!</p>
        
    </div>

    </>
  );
};

export default BannerUser