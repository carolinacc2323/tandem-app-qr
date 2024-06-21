import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';

function RegisterModal(props) {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [nombre, setNombre] = useState('');
  const [delegacion, setDelegacion] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    console.log(nombre, delegacion, email, password);
    try {
      const response = await fetch('http://localhost/gatsby-qr/v1/register-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: nombre,
          delegacion: delegacion,
          email: email,
          password: password
        })
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error en la solicitud: ${response.status} ${text}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error registrando usuario:', error);
    }
  };

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div>
      <Button color="success" onClick={toggle}>
        Click aquí
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Registro de nuevos usuarios
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup floating>
              <Input
                id="nombreregister"
                name="nombreregister"
                placeholder="Escribe tu nombre y apellidos"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <Label for="nombreregister">
                Escribe tu nombre y apellidos
              </Label>
            </FormGroup>
            {' '}
            <FormGroup floating>
              <Input
                id="emailregister"
                name="emailregister"
                placeholder="Escribe tu correo electrónico"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for="emailregister">
                Escribe tu correo electrónico
              </Label>
            </FormGroup>
            {' '}
            <FormGroup floating>
              <Input
                id="passwordregister"
                name="passwordregister"
                placeholder="Escribe tu contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Label for="passwordregister">
                Escribe tu contraseña
              </Label>
            </FormGroup>
            {' '}
            <FormGroup>
              <Label for="delegacionregister">
                Selecciona tu delegación
              </Label>
              <Input
                id="delegacionregister"
                name="delegacionregister"
                type="select"
                value={delegacion}
                onChange={(e) => setDelegacion(e.target.value)}
              >
                <option>
                  Aranjuez
                </option>
                <option>
                  El Escorial
                </option>
                <option>
                  La Granja San Ildefonso
                </option>
                <option>
                  Mallorca
                </option>
                <option>
                  Moncloa
                </option>
              </Input>
            </FormGroup>
            {' '}
            <Button color="primary" onClick={handleRegister}>
              Registrar
            </Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

RegisterModal.propTypes = {
  className: PropTypes.string,
};

export default RegisterModal;
