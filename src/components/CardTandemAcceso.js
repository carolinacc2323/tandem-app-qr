import React from "react"
import  { Card, CardBody, CardTitle, CardSubtitle,Button } from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"
import "./CardAcceso.css"
import { PiUserSquareThin } from "react-icons/pi"

const CardTandemAcceso = ()=>{

return (
<Card>
  <CardBody  className="cardi text-center">
    <CardTitle tag="h1" className="eslogani2 rounded-4">
    <h1>EMPLEADOS PATRIMONIO NACIONAL</h1>
    </CardTitle>
    <PiUserSquareThin size={200} style={{
      color:'#ffc107'
    }}/>
    <Button color="danger"
    outline size="lg" href='../AppQr' className="w-40">
      <p className="h3">ACCESO GENERADOR QR</p>
    </Button>
    <CardSubtitle
      className="mb-2  eslogani"
      tag="h6"
    >
      Acceso solo para empleados registrados
      
    </CardSubtitle>
    <StaticImage src="../images/qi.jpg"/>
    
  </CardBody>
</Card>
)
}
export default CardTandemAcceso