import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { MdOutlineDeleteForever } from "react-icons/md";

const DeleteQr = ({ className, nombreRef, onDelete }) => {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [nombre_ref, setNombreRef] = useState('');
  const toggle = () => setModal(!modal);

  const handleDeleteQr = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`https://carol.tandempatrimonionacional.eu/gatsbyqr/v1/delete-qr.php?nombre_ref=${nombreRef}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        setMessage(data.message);
        onDelete(nombreRef); // Actualizar la lista de QR en el componente padre
        toggle(); // Cerrar el modal
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Error al eliminar código QR');
    } finally {
      setLoading(false);
    }
  };
  console.log(nombreRef);

  return (
    <>
      <a onClick={toggle}><MdOutlineDeleteForever fontSize={40} className="social-link"/></a>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} >
          <h3 className='m-1'>Delete QR</h3>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleDeleteQr}>
            <FormGroup>
                <Label for="nombre_ref"><h6>Nombre del QR:</h6></Label>
                <p>{nombreRef}</p>
                <Input
                    type="text"
                    id="nombre_ref"
                    placeholder="Nombre de referencia del QR"
                    value={nombreRef}
                    onChange={(e) => setNombreRef(e.target.value)}
                />
            </FormGroup>
            <ModalFooter>
                <Button color="primary" type="submit" disabled={loading}>
                    {loading ? 'Eliminando...' : 'Eliminar QR'}
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancelar
                </Button>
            </ModalFooter>
          </Form>
          {message && <p>{message}</p>}
        </ModalBody>
      </Modal>
    </>
  );
};

export default DeleteQr