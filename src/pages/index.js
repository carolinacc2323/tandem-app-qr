import * as React from "react"
import Layout from "../components/layout"
import CardTandemAcceso from "../components/CardTandemAcceso"
import CardTandemUsos from "../components/CardTandemUsos"
const Index = () => {
  
    return (
    <>
    <Layout>
      
      <div className="row">
        <div className="col-12 col-md-6">
          <CardTandemUsos/>
        </div>
        <div className="col-12 col-md-6">
          <CardTandemAcceso/>
        </div>
      </div>
    </Layout>
    </>
    )
  }



export default Index