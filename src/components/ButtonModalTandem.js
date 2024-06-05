import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import CarruselButtonTandem from './CarruselButtonTandem';

function ButtonModalTandem(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="warning" onClick={toggle} size='lg'>
        Usos de la aplicación
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <CarruselButtonTandem/>
        </ModalBody>
        
      </Modal>
    </div>
  );
}

export default ButtonModalTandem;