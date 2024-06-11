import React from "react"
import  { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle,Button } from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"
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
      href='../AppQr' className="buttonacceso" >
      <p className="h3"> ACCEDE AQUI</p>
    </Button>

    <CardSubtitle
      className="eslogani"
      tag="h6">
      <p>Acceso solo para empleados registrados</p>

    </CardSubtitle>
    </CardImgOverlay>
    
</Card>
)
}
export default CardTandemAcceso