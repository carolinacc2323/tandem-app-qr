import React, { useState } from 'react';
import Layout from "../components/layout";
import "./AreaPersonal.css"

import CambiarContra from '../components/CambiarContra';
import CambiarDatos from '../components/CambiarDatos';
import ModalSoporte from '../components/ModalSoporte';
import { Button } from 'reactstrap';

import { MdSupportAgent } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { BiSolidUserDetail } from "react-icons/bi";

const AreaPersonal = () => {

  const [modal, setModal] = useState(false);
  
  const toggleModal = () => setModal(!modal);
  const role = localStorage.getItem('tandem_role'); 
  return (
    <>
    
    {role === 'admin' ? 
    <Layout> 
          <h1 className='creacionqr'>ÁREA PERSONAL</h1>
    
        <div className='titulop' style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        </div>
        <div className='containerun text-center'>

          <div className='cardadminu text-center' >
            <Button  color="primary" href="/ListadoUsuarios" onClick={toggleModal} className='adminbutton'>
            <FaUsersGear fontSize={50}/>
              <p className='pcdu'>Administrar usuarios</p>
            </Button>

        </div>  
        <div className='cardcambiardatosu'>
          <div >
            <CambiarDatos idUser={localStorage.getItem('tandem_id')}className='modaldatosu'
            />
            
          </div>
        </div>
        <div className='cambiarcontrau text-center'>
          <div className='modalcontrau'>
            <CambiarContra/>
          </div>
        </div>
        <div className='text-center cardsoporteu' >
          <div className='modalsoporteu'>
            <Button  color="primary" href="#" onClick={toggleModal} className='adminbutton'>
            <MdSupportAgent fontSize={50}/>
              <p className='pcdu'>Soporte técnico</p>
            </Button>
          </div>
          <div></div>
        </div>

      </div>
    </Layout>

    : 
    <Layout>
<div className='titulop' style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1>ÁREA PERSONAL</h1>
        </div>
        <div className='containeru text-center'>
        <div className='cardcambiardatos'>
          <div className='modaldatos'>
            <CambiarDatos idUser={localStorage.getItem('tandem_id')}/>
          </div>
        </div>
        <div className='cambiarcontra text-center'>
          <div className='modalcontra'>
            <CambiarContra/>
          </div>
        </div>
        <div className='text-center cardsoporte' >
          <div className='modalsoporte'>
            <Button  color="primary" href="#" onClick={toggleModal} className='soporte'>
            <MdSupportAgent className='soportecd'/>
              <p className='pcd'>Soporte técnico</p>
            </Button>
          </div>
        </div>
      </div>
    </Layout>}
    <ModalSoporte modal={modal} toggleModal={toggleModal} />
    </>
  )
}

export default AreaPersonal