import React, { useContext, useEffect, useState } from 'react';
import { ImageContext } from '../context/ImageContext';
import './BannerUser.css';

const BannerUser = ({ darkMode }) => {
  const { userImageUrl } = useContext(ImageContext);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserName(localStorage.getItem('tandem_nombre'));
    }
  }, []);

  const rutaimg = `https://carol.tandempatrimonionacional.eu/gatsbyqr/images/users/${userImageUrl}`;

  if (typeof window === 'undefined') {
    // Render something else during SSR
    return null;
  }

  return (
    <div className='banneruser' style={{ color: darkMode ? 'white' : 'black' }}>
      <p style={{ color: darkMode ? 'white' : 'black' }}>
        <img width={80} src={rutaimg} alt="User" />
        ¡Hola
        <strong> {userName} </strong>!
      </p>
    </div>
  );
};

export default BannerUser;
