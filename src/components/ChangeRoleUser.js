import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { PiUserSwitchDuotone } from "react-icons/pi";

// modal padre
const ChangeRoleUser = ({className, initialEmail}) => {
const [email, setEmail] = useState(initialEmail);
const [role, setRole] = useState('');
const [message, setMessage] = useState('');
const [modal, setModal] = useState(false);
const [loading, setLoading] = useState(false)
const toggle = () => setModal(!modal);

const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost/gatsby-qr/v1/change-role.php', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, role }),
    });

    const data = await response.json();
    setMessage(data.message);
};

return (
    <div style={{display:'grid', gridTemplateColumn:'1fr 1fr 1fr'}}>
        <a onClick={toggle}><PiUserSwitchDuotone fontSize={40} /></a>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle} close={<button className="close" onClick={toggle} type="button">&times;</button>} className='justify-content-end'>
                <h3 className='m-1'>Cambiar el rol</h3>
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="email" sm={7}>Escribe el correo electrónico</Label>
                        <Input 
                            type="text" 
                            placeholder="Escribe el email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Rol</legend>
                        <FormGroup check>
                            <Label check>
                                <Input 
                                    type="radio" 
                                    name="role" 
                                    value="admin" 
                                    checked={role === 'admin'} 
                                    onChange={(e) => setRole(e.target.value)} 
                                />
                                Admin
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input 
                                    type="radio" 
                                    name="role" 
                                    value="employee" 
                                    checked={role === 'employee'} 
                                    onChange={(e) => setRole(e.target.value)} 
                                />
                                Employee
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input 
                                    type="radio" 
                                    name="role" 
                                    value="guest" 
                                    checked={role === 'guest'} 
                                    onChange={(e) => setRole(e.target.value)} 
                                />
                                Guest
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <ModalFooter>
                        <Button color="primary" type="submit" disabled={loading}>
                            {loading ? 'Subiendo...' : 'Actualizar rol'}
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

export default ChangeRoleUser
