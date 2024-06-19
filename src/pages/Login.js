import React, { useState } from 'react';
import Layout from "../components/layout";
import "./Login.css"

import RegisterModal from '../components/RegisterModal';
import { Button,Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import PropTypes from 'prop-types';

const Login = () => {
  return (
    <>
    <Layout>
      <div className='row mb-5'>
      <div className='loginform col-12 col-md-11 mt-2 p-5 mr-2'>
        <div className='h1login '>
          <h1 >Accede a tu área personal</h1>
        </div>
        <Form className='formu'>
        <FormGroup row>
          <Label
            for="usuario"
            sm={2}
          >
            Usuario
          </Label>
          <Col sm={10}>
            <Input
              id="usuario"
              name="usuario"
              placeholder="Escribe tu usuario"
              type="text"
            />
          </Col>
          <FormText>
            Este campo es obligatorio
          </FormText>
        </FormGroup>
        
        <FormGroup row>
          <Label
            for="examplePassword"
            sm={2}
          >
            Contraseña
          </Label>
          <Col sm={10}>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Escribe tu contraseña"
              type="password"
            />
          </Col>
          <FormText>
            Este campo es obligatorio
          </FormText>
        </FormGroup>
        <Button className='btnlogin' color='warning' href='/AppQr'>
        <p>Acceder</p>
      </Button>
      <br></br>
      <div className='registro mt-5'>
        <h4>En caso de que no estés registrado</h4><RegisterModal/>
      </div>
      </Form>
      </div>
      </div>
      

    </Layout>
    </>
  )
}

export default Login