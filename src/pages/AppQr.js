// AppQr.js
import React, { useState} from "react";
import Layout from "../components/layout";
import CardApp from "../components/CardApp"; 
import Informacion from "../components/Informacion";


const AppQr = () => {
const role = localStorage.getItem('tandem_role'); 
const [modalOpen, setModalOpen] = useState(false);
const toggleModal = () => setModalOpen(!modalOpen);

    return (
        <>
            <Layout>
                {role === 'admin' || role === 'employee' ? 
                <>
                <CardApp />
                
                </>
                : 
                <div style={{minHeight:'68vh'}}>
                    <Informacion />
                </div>}
            </Layout>
        </>
    )
}

export default AppQr