import React, { useState } from 'react';
import Layout from "../components/layout";
import CardApp from "../components/CardApp"; 
import Informacion from "../components/Informacion";
import DarkMode from '../components/DarkMode';

const AppQr = () => {
    const role = localStorage.getItem('tandem_role');

    const [darkmode, setDarkMode] = useState(false);
    const handleDarkMode = () => {
        setDarkMode(!darkmode);
    }

    return (
        <>
            <button style={{
                backgroundColor: '#212529', 
                color: 'white',
                position: 'fixed',
                right: 0
            }} 
                onClick={handleDarkMode}>
                {darkmode ? 'Apagar' : 'Encender'}
            </button>
            <DarkMode dark={darkmode}>
                <Layout>
                    {/* <CardApp/> */}
                    {role === 'admin' || role === 'employee' ? <CardApp /> 
                    : 
                    <div style={{minHeight: '70vh'}}>
                        <Informacion />
                    </div>}
                </Layout>
            </DarkMode>
        </>
    );
}

export default AppQr;
