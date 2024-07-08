import React from 'react';
import Layout from '../components/layout';
import Listados from '../components/Listados';
import { FaUserPlus } from "react-icons/fa";
// import RegisterModal from '../components/RegisterModal';

function ListadoUsuarios() {
    return (
        <>
          <Layout>
            <div className='container'>
            <h1 className='h1listado'>Listado de Usuarios</h1>
            <a><FaUserPlus fontSize={40} /></a>
            
            <Listados/>
            </div>
          </Layout>      
        </>
    );
}

export default ListadoUsuarios
