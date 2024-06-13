import * as React from "react"
import NavbarInicio from "../components/NavbarInicio"
import CardTandemAcceso from "../components/CardTandemAcceso"
import CardTandemUsos from "../components/CardTandemUsos"
import FooterInicio from "../components/FooterInicio"

const Index = () => {
  
    return (
    <>
      <NavbarInicio/>
      
      <div className="row text-center" >
        <div className="col-12 col-md-6" style={{
        
        
      }}>
          <CardTandemUsos/>
        </div>
        <div className="col-12 col-md-6">
          <CardTandemAcceso/>
        </div>
      </div>
      <FooterInicio/>
    </>
    )
  }



export default Index