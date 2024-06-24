import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import { SiSpringsecurity } from "react-icons/si";


function CambiarContra(props) {
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
      <Button color="primary" className='cambiarcontraseña'  onClick={toggle} >
        <SiSpringsecurity className='contracd'/>
        <p className='pcd'>Cambiar contraseña</p>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} >
      <ModalHeader toggle={toggle} close={closeBtn}className='justify-content-end'>
          <h3 className='m-1'>Cambiar contraseña</h3>
        </ModalHeader>
        <ModalBody>
        <Form>
          <FormGroup>
            <Input
              id="contraseña"
              name="contraseña"
              placeholder="Escribe tu nueva contraseña"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="confirmarcontraseña"
              name="confirmarcontraseña"
              placeholder="Repite tu nueva contraseña"
              type="text"/>
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
            Cambiar contraseña
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

CambiarContra.propTypes = {
  className: PropTypes.string,
};

export default CambiarContra;