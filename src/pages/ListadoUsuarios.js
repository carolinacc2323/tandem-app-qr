import React, { useState, useEffect } from 'react';
import ListadosUsers from '../components/ListadosUsers';
import styled, { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import RegisterModal from '../components/RegisterModal';
import { Button } from 'reactstrap';
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  min-height: 100vh;
  transition: all 0.3s ease;
`;

const darkTheme = {
  backgroundColor: '#000',
  color: '#fff',
};

const lightTheme = {
  backgroundColor: '#fff',
  color: '#000',
};

function ListadoUsuarios({ darkMode }) {
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRole(localStorage.getItem('tandem_role'));
      setUserId(localStorage.getItem('tandem_id')); // Obtener el ID del usuario
    }
  }, []);

  const [isGridView, setIsGridView] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hoverStyle = {
    backgroundColor: isHovered ? '#85ABE5' : '#bad5fc',
    color: isHovered ? 'white' : 'black',
    padding: '8px',
    border: isHovered ? '2px solid #85ABE5' : '1px solid black',
    cursor: 'pointer',
    boxShadow: isHovered ? 'none' : '0px 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <>
      {role === 'admin' ? (
        <Layout>
          <div className='titulo mt-3'>
            <h1>Lista de Usuarios</h1>
            <Button 
              style={hoverStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={toggleView}
            >
              {isGridView ? (
                <p><FaList /> Ver en columna</p>
              ) : (
                <p><IoGridSharp /> Ver en filas</p>
              )}
            </Button>
          </div>
          <div>
            <ListadosUsers url='https://carol.tandempatrimonionacional.eu/gatsbyqr/v1/list-users.php' isGridView={isGridView} darkMode={false} />
          </div>
        </Layout>
      ) : (
        <Layout>
          <div className='titulo mt-3'>
            <h1>Acceso Denegado</h1>
            <p>No tienes permiso para acceder a esta página.</p>
          </div>
        </Layout>
      )}
    </>
  );
}

export default ListadoUsuarios