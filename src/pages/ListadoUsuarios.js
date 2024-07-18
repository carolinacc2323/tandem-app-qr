import React, { useState, useEffect } from "react";
import Layout from '../components/layout';

import ListadosUsers from '../components/ListadosUsers';
import RegisterModal from '../components/RegisterModal';
import {Button} from 'reactstrap';
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";

function ListadoUsuarios() {
  const [isGridView, setIsGridView] = useState(true);
  const toggleView = () => {
    setIsGridView(!isGridView);
  };

    return (
        <>
          <Layout>
            <h1 className='creacionqr mt-3'>Listado de Usuarios</h1>
            <div style={{
              display:'grid',
              gridTemplateColumns:'1fr .15fr',
              padding:'2em',
            }}>
              <RegisterModal buttonText="Registrar nuevo ususario" text='Click Aquí'/>
                  <Button 
                  color="info"
                  onClick={toggleView}
                  >
                    {isGridView ? 
                    <>
                    
                    <p><FaList /> Ver lista </p>
                    </>
                    :
                    <>
                    <p><IoGridSharp /> Ver cuadrícula</p>
                    </>
                    }
                  </Button>
            </div>
              
            <div>
              <ListadosUsers url='http://localhost/gatsby-qr/v1/list-users.php' isGridView={isGridView} />
            </div>
          </Layout>      
        </>
    );
}

export default ListadoUsuarios