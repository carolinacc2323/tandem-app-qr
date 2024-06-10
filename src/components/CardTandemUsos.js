import React from "react"
import  { Card, CardBody, CardTitle, CardSubtitle} from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"
import ButtonModalTandem from "./ButtonModalTandem"
import "./CardUsos.css"


const CardTandemUsos = ()=>{

return (
<Card >
  <div className='qrimagen'>
  <StaticImage src="../images/qrimagen.jpg" alt="qrimagen"/>
  </div>
  <CardBody className="card">
    <CardTitle tag="h5" className='eslogan '>
    <h3>Comparte <strong>experiencias únicas</strong>, con nuestra app</h3>
    
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted " tag="h6">
      <h2 className='eslogan2'>GENERADOR DE CÓDIGOS QR</h2>
    </CardSubtitle>
    <ButtonModalTandem className='buttondeps'/>
  </CardBody>
</Card>
)
}
export default CardTandemUsos