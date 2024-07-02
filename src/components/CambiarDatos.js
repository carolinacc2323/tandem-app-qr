import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import { BiSolidUserDetail } from "react-icons/bi";

const CambiarDatos = ({ className }) => {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const toggle = () => setModal(!modal);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setMessage('Por favor, selecciona una imagen.');
      return;
    }
    const formData = new FormData();
    formData.append('image', image);
    const idUser = localStorage.getItem('userId'); // Captura el ID del usuario desde localStorage
    formData.append('id', idUser);

    setLoading(true);
    setMessage('');
    try {
      const response = await fetch('http://localhost/gatsby-qr/v1/upload-image-user.php', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message || 'Imagen subida exitosamente.');
      } else {
        setMessage(data.message || 'Error al subir la imagen.');
      }
    } catch (error) {
      setMessage('Error al conectar con el servidor.');
      console.error('Error subiendo la imagen:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button color="primary" className='cambiardatos' onClick={toggle}>
        <BiSolidUserDetail className='contracd' />
        <p className='pcd'>Cambiar datos</p>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={<button className="close" onClick={toggle} type="button">&times;</button>} className='justify-content-end'>
          <h3 className='m-1'>Cambiar datos</h3>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
            <Label for="email" sm={7}>Escribe tu nuevo correo electrónico</Label>
              <Input
                id="nombre"
                name="nombre"
                placeholder="Escribe tu email"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Cambiar foto de perfil</Label>
              <Input
                id="exampleFile"
                name="file"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <FormText>Importa tu foto de perfil desde tu dispositivo</FormText>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" />
              {' '}
              <Label check className='mb-4'>Confirmo los cambios</Label>
            </FormGroup>
            <ModalFooter>
              <Button color="primary" type="submit" disabled={loading}>
                {loading ? 'Subiendo...' : 'Aplicar cambios'}
              </Button>{' '}
              <Button color="secondary" onClick={toggle}>
                Cancelar
              </Button>
            </ModalFooter>
          </Form>
          {message && <p>{message}</p>}
        </ModalBody>
      </Modal>
    </div>
  );
};

CambiarDatos.propTypes = {
  className: PropTypes.string,
};

export default CambiarDatos
