import React, { useState } from 'react';
import Layout from "../components/layout";
import "./Login.css";
import RegisterModal from '../components/RegisterModal';
import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('URL_A_TU_SCRIPT_PHP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.message === 'Login exitoso') {
        setSuccess('Login exitoso');
        // Redirige o maneja el login exitoso
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (err) {
      console.error(err);
      setError('Ocurrió un error. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <Layout>
      <div className='row mb-5'>
        <div className='loginform col-12 col-md-11 mt-2 p-5 mr-2'>
          <div className='h1login'>
            <h1>Accede a tu área personal</h1>
          </div>
          <Form className='formu' onSubmit={handleLogin}>
            <FormGroup row>
              <Label for="email" sm={2}>Email</Label>
              <Col sm={10}>
                <Input
                  id="email"
                  name="email"
                  placeholder="Escribe tu email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
              <FormText>Este campo es obligatorio</FormText>
            </FormGroup>

            <FormGroup row>
              <Label for="examplePassword" sm={2}>Contraseña</Label>
              <Col sm={10}>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Escribe tu contraseña"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
              <FormText>Este campo es obligatorio</FormText>
            </FormGroup>

            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <Button className='btnlogin' color='warning' type="submit">
              <p>Acceder</p>
            </Button>
            <br />
            <div className='registro mt-5'>
              <h4>En caso de que no estés registrado</h4>
              <RegisterModal />
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
