import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';
import { BiSolidUserDetail } from "react-icons/bi";
import styled from 'styled-components';
import { ImageContext } from '../context/ImageContext';

const CambiarDatos = ({ idUser }) => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const { setUserImageUrl } = useContext(ImageContext);

  const toggle = () => setModal(!modal);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const imageUrl = file.name;
    localStorage.setItem('tandem_image_url', imageUrl);
    setUserImageUrl(imageUrl); // Actualizar el contexto
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setMessage('Por favor, selecciona una imagen.');
      return;
    }
    const formData = new FormData();
    formData.append('image', image);
    formData.append('id', idUser);

    setLoading(true);
    setMessage('');
    try {
      const response = await fetch('https://carol.tandempatrimonionacional.eu/gatsbyqr/v1/upload-image-user.php', {
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

  const Fotobutton = styled.button`
    background-color: #5e039780;
    width: 100%;
    display: grid;
    grid-template-columns: 50px 200px;
    border-radius: 5px;
    column-gap: 5px;
    justify-content: center;
    align-content: center;
    color: white;
    margin-top: 1em;
    align-items: center;
    &:hover {
      background-color: #5e0397;
    }
  `;

  return (
    <div>
      <Fotobutton onClick={toggle}>
        <BiSolidUserDetail fontSize={50} />
        <p>Cambiar foto de perfil</p>
      </Fotobutton>

      <Modal isOpen={modal} toggle={toggle} className={idUser}>
        <ModalHeader toggle={toggle}>
          <h3>Cambia tu foto de perfil</h3>
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
          <p>{message}</p>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CambiarDatos;
