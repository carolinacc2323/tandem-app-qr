import React from "react"
import  { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle,Button } from "reactstrap"

import "./CardAcceso.css"

import image from "../images/acceso5.png"
const CardTandemAcceso = ()=>{

return (
<Card inverse>
<CardImg
      alt="Card image cap"
      src= {image}
      className="imagenacceso"
    />
    <CardImgOverlay>
    <Button color="warning"
      href='../Login' className="buttonacceso" >
      <p className="h3"> ACCEDE AQUI</p>
    </Button>

    <CardSubtitle
      tag="h6">
      <p className="eslogani">Acceso solo para empleados registrados</p>
    </CardSubtitle>
    </CardImgOverlay>
    
</Card>
)
}
export default CardTandemAcceso