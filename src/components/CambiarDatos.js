import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import { BiSolidUserDetail } from "react-icons/bi";

const CambiarDatos = ({idUser}) => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

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
      formData.append('id',  idUser); // Cambia este valor según sea necesario
      // lo suyo seria capturar el id de localstorage user id
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
        <p className='pcd'>Cambiar foto de perfil</p>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={idUser}>
        <ModalHeader toggle={toggle} close={<button className="close" onClick={toggle} type="button">&times;</button>} className='justify-content-end'>
          <h3 className='m-1'>Cambia tu foto de perfil</h3>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
            <Input type="file" accept="image/*" onChange={handleImageChange} />
            {message && <p>{message}</p>}
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

export default CambiarDatos