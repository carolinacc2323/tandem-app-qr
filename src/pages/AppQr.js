import React from 'react';
import Layout from "../components/layout";
import CardApp from "../components/CardApp"; 
import Informacion from "../components/Informacion";
import { minHeight } from '@mui/system';

const AppQr = () => {
const role = localStorage.getItem('tandem_role'); 
    return (
        <>
            <Layout>
                {/* <CardApp/> */}
                {role === 'admin' || role === 'employee' ? <CardApp /> 
                : 
                <div style={{minHeight:'70vh'}}>
                    <Informacion />
                </div>}
            </Layout>
        </>
    )
}

export default AppQr