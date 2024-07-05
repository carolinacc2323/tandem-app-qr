// AppQr.js
import React from 'react';
import Layout from "../components/layout";
import CardApp from "../components/CardApp"; 
import BannerUser from "../components/BannerUser";
import Informacion from "../components/Informacion";

const AppQr = () => {
  const role = localStorage.getItem('tandem_role'); 
    return (
        <>
            <Layout>
                <BannerUser />
                {/* <CardApp/> */}
                {role === 'admin' || role === 'employee' ? <CardApp /> : <Informacion />}
            </Layout>
        </>
    )
}

export default AppQr
