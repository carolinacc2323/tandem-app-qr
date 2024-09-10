import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MisQr = () => {
    const [qrCodes, setQRCodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Obtener el ID del usuario desde localStorage
        const userId = localStorage.getItem('tandem_id');

        if (userId) {
            // Hacer la solicitud a la API PHP
            axios.post('http://carol.tandempatrimonionacional.eu/gatsbyqr/v1/list-qr-user.php', { id: userId })
                .then(response => {
                    setQRCodes(response.data.qr_codes);
                    setLoading(false);
                })
                .catch(error => {
                    setError('Error al obtener los códigos QR.');
                    setLoading(false);
                });
        } else {
            setError('No se encontró el ID de usuario en localStorage.');
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Códigos QR Generados</h1>
            {qrCodes.length > 0 ? (
                <ul>
                    {qrCodes.map(qrCode => (
                        <li key={qrCode.qr_id}>
                            <p><strong>Nombre de Referencia:</strong> {qrCode.qr_nombre_ref}</p>
                            <p><strong>Descripción:</strong> {qrCode.qr_description}</p>
                            <p><strong>Fecha de Creación:</strong> {new Date(qrCode.qr_created_at).toLocaleDateString()}</p>
                            <p><strong>Datos del QR:</strong> {qrCode.qr_data}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No se encontraron códigos QR para este usuario.</p>
            )}
        </div>
    );
};

export default MisQr;