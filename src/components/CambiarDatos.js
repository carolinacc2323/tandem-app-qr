import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import { BiSolidUserDetail } from "react-icons/bi";



function CambiarDatos(props) {
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
      <Button color="primary" className='cambiardatos'  onClick={toggle} >
        <BiSolidUserDetail className='contracd'/>
        <p className='pcd'>Cambiar datos</p>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} >
      <ModalHeader toggle={toggle} close={closeBtn}className='justify-content-end'>
          <h3 className='m-1'>Cambiar datos</h3>
        </ModalHeader>
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
      id="apellido"
      name="apellido"
      placeholder="Escribe tu apellido"
      type="text"/>
  </FormGroup>
 
  <FormGroup>
    <Label for="exampleFile">
      Cambiar foto de perfil
    </Label>
    <Input
      id="exampleFile"
      name="file"
      type="file"
    />
    <FormText>
      Importa tu foto de perfil desde tu dispositivo
    </FormText>
  </FormGroup>

  <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check className='mb-4'>
      Confirmo los cambios
    </Label>
  </FormGroup>

</Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Aplicar cambios
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

CambiarDatos.propTypes = {
  className: PropTypes.string,
};

export default CambiarDatos;