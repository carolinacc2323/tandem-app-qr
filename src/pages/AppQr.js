import React, { useState } from 'react';
import Layout from "../components/layout";
import CardApp from "../components/CardApp"; 
import Informacion from "../components/Informacion";
import DarkMode from '../components/DarkMode';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

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
                right: 0,
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }} 
                onClick={handleDarkMode}>
                {darkmode ? <CiLight size={24} /> : <MdDarkMode size={24} />}
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

export default AppQr