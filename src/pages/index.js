import * as React from "react"
import Layout from "../components/layout"
import CardTandemAcceso from "../components/CardTandemAcceso"
import CardTandemUsos from "../components/CardTandemUsos"
import NavbarTandem from "../components/NavbarTandem"
import FooterInicio from "../components/FooterInicio"
// import FooterInicio from "../components/FooterInicio"
const Index = () => {
  
    return (
    <>
    <NavbarTandem/>
      
      <div className="row">
        <div className="col-12 col-md-6">
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