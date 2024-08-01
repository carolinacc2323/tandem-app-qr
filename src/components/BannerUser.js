import React, { useState, useEffect } from 'react';
import './BannerUser.css';

const BannerUser = ({ darkMode }) => {
  // Estado para almacenar la URL de la imagen y el nombre del usuario
  const [userImageUrl, setUserImageUrl] = useState(localStorage.getItem('tandem_image_url'));
  const [userName, setUserName] = useState(localStorage.getItem('tandem_nombre'));

  // Efecto para actualizar el estado cuando cambian los valores en localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setUserImageUrl(localStorage.getItem('tandem_image_url'));
      setUserName(localStorage.getItem('tandem_nombre'));
    };

    // Agregar evento para escuchar cambios en localStorage
    window.addEventListener('storage', handleStorageChange);

    // Limpiar el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const rutaimg = `https://carol.tandempatrimonionacional.eu/gatsbyqr/images/users/${userImageUrl}`;

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
