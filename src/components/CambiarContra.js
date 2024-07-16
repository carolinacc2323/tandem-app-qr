import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { SiSpringsecurity } from "react-icons/si";

const CambiarContra = ({ className }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  const handlePassword = (e) => setPassword(e.target.value);

  const handleCambiarContra = async () => {
    try {
      const response = await fetch('http://localhost/gatsby-qr/v1/change-password.php', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error registrando usuario', error);
      setMessage('Error en el registro');
    }
  };

  return (
    <div>
      <Button color="primary" className='cambiarcontraseña' onClick={toggle}>
        <SiSpringsecurity className='contracd' />
        <p className='pcd'>Cambiar contraseña</p>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn} className='justify-content-end'>
          <h3 className='m-1'>Cambiar contraseña</h3>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row className='formuchangepassword'>
              <Input
                id="email"
                name="email"
                placeholder="Escribe tu correo electrónico"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup row className='formuchangepassword'>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Escribe tu nueva contraseña"
                type="password"
                value={password}
                onChange={handlePassword}
              />
            </FormGroup>
            
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleCambiarContra}>Cambiar Contraseña</Button>
            <p>{message}</p>
          <Button color="secondary" onClick={toggle}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

CambiarContra.propTypes = {
  className: PropTypes.string,
};

export default CambiarContra;
