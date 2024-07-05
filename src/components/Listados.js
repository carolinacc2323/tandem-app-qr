import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { TbUserEdit } from "react-icons/tb";
import { PiUserSwitchDuotone } from "react-icons/pi";
import { MdDeleteForever } from "react-icons/md";

function Listados({ url }) {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const rutaimg = 'http://localhost/gatsby-qr/images/users/' + localStorage.getItem('tandem_img_user');

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
        setUsers(data.users);
        setMessage(data.message);
      } catch (error) {
        console.log('Error al buscar la lista de usuarios', error);
        console.error('Stack trace:', error.stack);
      }
    };
    fetchUser();
  }, [url]);

  return (
    <div className="container py-5">
      <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4">Team Page</h1>
          <p className="lead mb-0">Using Bootstrap 4 grid and utilities, create a nice team page.</p>
          <p className="lead">
            Snippet by <a href="https://bootstrapious.com/snippets" className="text-white"><u>Bootstrapious</u></a>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row text-center">
          {users.map((user) => (
            <div className="col-xl-3 col-sm-6 mb-5" key={user.id}>
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img src={rutaimg} alt={user.nombre} width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">{user.nombre}</h5>
                <span className="small text-uppercase text-muted">{user.role}</span>
                <p>{user.email}</p>
                <p>{user.delegacion}</p>
                <p>{user.created_at}</p>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link"><TbUserEdit fontSize={30} /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link"><PiUserSwitchDuotone fontSize={30} /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link"><MdDeleteForever fontSize={30} /></a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listados;
