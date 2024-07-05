import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { Button } from 'reactstrap';
import { TbUserEdit } from "react-icons/tb";
import { PiUserSwitchDuotone } from "react-icons/pi";
import { MdDeleteForever } from "react-icons/md";
import Listados from '../components/Listados';
function ListadoUsuarios({ url }) {
const [users,setUsers]=useState([]);
const {message,setMessage}=useState('')
const rutaimg = 'http://localhost/gatsby-qr/images/users/'+ localStorage.getItem('tandem_img_user')
    useEffect(() => {
        const fetchUser = async () => {
            try {
              const response = await fetch('http://localhost/api-qr-tandem/v1/list-users.php', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data.users)
                setMessage(data.message)
            } catch (error) {
                console.log('Error al buscar la lista de usuarios', error);
                console.error('Stack trace:', error.stack);
            }
        };
        fetchUser();
    }, [url]);
    return (
        <>
          <Layout>
            <h1>{message}</h1>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Delegacion</th>
                    <th>Rol</th>
                    <th>Image_url</th>
                    <th>Fecha de registro</th>
                    <th>Modificar datos</th>
                    <th>Cambiar rol</th>
                    <th>Eliminar datos</th>
                </tr>
                </thead>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.nombre}</td>
                        <td>{user.email}</td>
                        <td>{user.delegacion}</td>
                        <td>{user.role}</td>
                        <td><img width={80} src={rutaimg}/></td>
                        <td>{user.created_at}</td>
                        <td>
                          <Button>
                            <TbUserEdit fontSize={30}/>
                          </Button></td>
                        <td>
                          <Button>
                            <PiUserSwitchDuotone fontSize={30}/>
                          </Button></td>
                        <td>
                          <Button>
                          <MdDeleteForever fontSize={30}/>
                          </Button>
                        </td>
                    </tr>
                ))}
            </table>
            <Listados/>
            </Layout>      
        </>
    );
}

export default ListadoUsuarios
