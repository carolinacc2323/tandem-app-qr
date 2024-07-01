import React from 'react';
import { RiShutDownLine } from "react-icons/ri";

const CerrarSesion = () => {
  const handleCerrarSesion = () => {
    window.location.href = '/';
    localStorage.removeItem('tndm_id');
    localStorage.removeItem('tndm_email');
    localStorage.removeItem('tndm_token');
  };

  return (
    <button onClick={handleCerrarSesion} style={{ background: 'none', border: 'none', color: 'white' }}>
      <RiShutDownLine size={24} />
    </button>
  );
};

export default CerrarSesion
