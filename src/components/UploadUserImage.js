// import React, { useState } from 'react';

// const UploadUserImage = () => {
//     const [image, setImage] = useState(null);
//     const [message, setMessage] = useState('');
//     const [loading, setLoading] = useState(false);
//     const idUser = localStorage.getItem('userId'); // Obtener idUser desde localStorage

//     const handleImageChange = (e) => {
//         setImage(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!image) {
//             setMessage('Por favor, selecciona una imagen.');
//             return;
//         }
//         const formData = new FormData();
//         formData.append('image', image);
//         formData.append('id', idUser);

//         setLoading(true);
//         setMessage('');
//         try {
//             const response = await fetch('https://carol.tandempatrimonionacional.eu/gatsbyqr/v1/upload-image-user.php', {
//                 method: 'POST',
//                 body: formData,
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 setMessage(data.message || 'Imagen subida exitosamente.');
//             } else {
//                 setMessage(data.message || 'Error al subir la imagen.');
//             }
//         } catch (error) {
//             setMessage('Error al conectar con el servidor.');
//             console.error('Error subiendo la imagen:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="file" accept="image/*" onChange={handleImageChange} />
//             <button type="submit" disabled={loading}>
//                 {loading ? 'Subiendo...' : 'Subir Imagen'}
//             </button>
//             {message && <p>{message}</p>}
//         </form>
//     );
// };

// export default UploadUserImage