import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Row,
    Col,
} from 'reactstrap';
import '../components/CardApp.css';

const CardApp = () => {
    return (
        <>
            <h1>CREACIÓN DE QR</h1>
            <div className="container">
                <Card className="no-border" style={{ width: '100%' }}>
                    <Row>
                        <Col>
                            <StaticImage src="../images/creandoqr.png" className="imagen1" />
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center">
                            <CardBody className="cuerpo text-center">
                                <CardTitle tag="h5">
                                    CREA CÓDIGOS QR
                                </CardTitle>
                                <CardText className="texto">
                                    Crea códigos QR personalizados para compartir información.
                                </CardText>
                                <Button href='../CrearQr'>
                                    CREAR QR
                                </Button>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
                <Card className="no-border" style={{ width: '100%' }}>
                    <Row>
                        <Col className="d-flex align-items-center justify-content-center">
                            <CardBody className="text-center">
                                <CardTitle tag="h5">
                                    LISTADO DE CÓDIGOS QR
                                </CardTitle>
                                <CardText className="texto">
                                    Embárcate en un viaje interactivo por Aranjuez con nuestro listado de códigos QR.
                                </CardText>
                                <Button>
                                    LISTADO QR
                                </Button>
                            </CardBody>
                        </Col>
                        <Col>
                            <StaticImage src="../images/listadoqr.png" className="imagen2"/>
                        </Col>
                    </Row>
                </Card>
            </div>
        </>
    );
};

export default CardApp;