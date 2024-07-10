import React from 'react';
import Layout from '../components/layout';
import { FaUserPlus } from "react-icons/fa";
import ListadosUsers from '../components/ListadosUsers';
// import RegisterModal from '../components/RegisterModal';

function ListadoUsuarios() {
    return (
        <>
          <Layout>
            <div className='container'>
            <h1 className='h1listado'>Listado de Usuarios</h1>
            <a><FaUserPlus fontSize={40} /></a>
            
            <ListadosUsers/>
            </div>
          </Layout>      
        </>
    );
}

export default ListadoUsuarios
