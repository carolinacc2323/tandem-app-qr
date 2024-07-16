import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChangeRoleUser from './ChangeRoleUser';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';

function ListadosUsers({ url }) {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [refresh, setRefresh] = useState(false); // Estado para rastrear actualizaciones

  const fetchUser = async () => {
    try {
      const response = await fetch('http://localhost/gatsby-qr/v1/list-users.php', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data.users);
      setMessage(data.message);
    } catch (error) {
      console.log('Error al buscar la lista de usuarios', error);
      console.error('Stack trace:', error.stack);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [url, refresh]); // Vuelve a buscar usuarios cuando refresh cambia

  const handleUserUpdated = () => {
    setRefresh(!refresh); // Cambia el estado de refresh para desencadenar useEffect
  };
  

  return (
    <div className="containerlist">
      <div className="row text-center">
        {users.map((user) => (
          <div className="col-xl-3 col-sm-6 mb-5" key={user.id}>
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img src={'http://localhost/gatsby-qr/images/users/' + user.image_url} alt={user.nombre} width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 className="mb-0">{user.nombre}</h5>
              <span className="small text-uppercase text-muted">{user.role}</span>
              <p>Id:{user.id}</p>
              <p>{user.email}</p>
              <p>{user.delegacion}</p>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <UpdateUser
                      initialEmail={user.email}
                      initialNombre={user.nombre}
                      initialDelegacion={user.delegacion}
                      onUserUpdated={handleUserUpdated} // Pasar la función callback
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <ChangeRoleUser 
                    initialEmail={user.email}
                    onRoleChanged={handleUserUpdated}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <DeleteUser 
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListadosUsers;
