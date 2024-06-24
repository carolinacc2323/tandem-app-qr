import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

function ModalSoporte({ modal, toggleModal }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Soporte</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input
                id="nombre"
                name="nombre"
                placeholder="Escribe tu nombre"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="email"
                name="email"
                placeholder="Escribe tu correo"
                type="email" />
            </FormGroup>
          </Form>
          <Form>
            <FormGroup>
              <Label for="asunto">Asunto*</Label>
              <Input
                id="asunto"
                name="text"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Mensaje</Label>
              <Input
                id="exampleText"
                name="text"
                type="textarea"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>Enviar mensaje</Button>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalSoporte;
