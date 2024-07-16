import React, { useState, useEffect } from "react";
import Layout from '../components/layout';
import CardQr from '../components/CardQr';

const ListadoQr = () => {
    const [isGridView, setIsGridView] = useState(true);

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    return (
        <>
        <Layout>
            <div className='titulo mt-3'>
                <h1>Lista de Códigos QR</h1>
                <button onClick={toggleView}>
                    {isGridView ? 'Cambiar a Vista de Lista' : 'Cambiar a Vista de Cuadrícula'}
                </button>
            </div>
            
            <div style={{
                minHeight: '70vh',
                margin: '2em'
            }}>
                <CardQr url="http://localhost/gatsby-qr/v1/list-qr.php" isGridView={isGridView} />
            </div>
        </Layout>
        </>
    );
};

export default ListadoQr;