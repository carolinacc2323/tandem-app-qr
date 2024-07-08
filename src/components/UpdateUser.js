import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { TbUserEdit } from "react-icons/tb";

const UpdateUser = ({ className }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [delegacion, setDelegacion] = useState('');
    const [message, setMessage] = useState('');
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggle = () => setModal(!modal);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const response = await fetch('http://localhost/gatsby-qr/v1/update-user.php', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, email, delegacion }),
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            setMessage('Error al actualizar los datos.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <a onClick={toggle}><TbUserEdit fontSize={40} /></a>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle} close={<button className="close" onClick={toggle} type="button">&times;</button>} className='justify-content-end'>
                    <h3 className='m-1'>Cambiar datos</h3>
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="nombre">Escribe el nombre</Label>
                            <Input
                                type="text"
                                placeholder="Escribe el nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Escribe el correo electrónico</Label>
                            <Input
                                type="text"
                                placeholder="Escribe el email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="delegacion">Elige la delegación</Label>
                            <Input
                                id="delegacion"
                                name="delegacion"
                                type="select"
                                value={delegacion}
                                onChange={(e) => setDelegacion(e.target.value)}
                                required
                            >
                                <option>Aranjuez</option>
                                <option>El Escorial</option>
                                <option>La Granja San Ildefonso</option>
                                <option>Mallorca</option>
                                <option>Moncloa</option>
                            </Input>
                        </FormGroup>
                        <ModalFooter>
                            <Button color="primary" type="submit" disabled={loading}>
                                {loading ? 'Subiendo...' : 'Actualizar datos'}
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

export default UpdateUser
