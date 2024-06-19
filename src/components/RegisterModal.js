import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup,  } from 'reactstrap';
import PropTypes from 'prop-types';

function RegisterModal(props) {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

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
        <>

  <Form>
    <FormGroup floating>
      <Input
        id="nombreregister"
        name="nombreregister"
        placeholder="Escribe tu nombre y apellidos"
        type="text"
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
      />
      <Label for="passwordregister">
        Escribe tu contraseña
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="passwordconfirm"
        name="passwordrconfirm"
        placeholder="Escribe tu contraseña"
        type="password"
      />
      <Label for="passwordconfirm">
        Repite tu contraseña
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
    <Button>
      Submit
    </Button>
  </Form>
</>
        </ModalBody>
        <ModalFooter>

          <Button color="secondary" onClick={toggle}>
            Cancel
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