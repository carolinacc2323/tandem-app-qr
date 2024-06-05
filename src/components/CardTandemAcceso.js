import React from "react"
import  { Card, CardBody, CardTitle, CardSubtitle,Button } from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"
import "./CardAcceso.css"


const CardTandemAcceso = ()=>{

return (
<Card>
  <div className="userlogin">
    <StaticImage alt="User logotipo" src="../images/user.png"/>
  </div>
  <CardBody className="card">
    <CardTitle tag="h5" className="eslogan">
    <h2>EMPLEADOS PATRIMONIO NACIONAL</h2>
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted eslogan2"
      tag="h6"
    >
      Solo para empleados registrados
    </CardSubtitle>
    <Button color="danger"
    outline size="lg" href='./AppQr'>
    ACCESO
    </Button>
  </CardBody>
</Card>
)
}
export default CardTandemAcceso