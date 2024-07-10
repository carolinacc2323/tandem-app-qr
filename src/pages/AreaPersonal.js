import React, { useState } from 'react';
import Layout from "../components/layout";
import "./AreaPersonal.css"

import CambiarContra from '../components/CambiarContra';
import CambiarDatos from '../components/CambiarDatos';
import ModalSoporte from '../components/ModalSoporte';
import { Button } from 'reactstrap';

import { MdSupportAgent } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";


const AreaPersonal = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <>
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
    </Layout>
    <ModalSoporte modal={modal} toggleModal={toggleModal} />
    </>
  )
}

export default AreaPersonal