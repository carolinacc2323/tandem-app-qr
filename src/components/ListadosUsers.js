import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import ChangeRoleUser from './ChangeRoleUser';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';
import CardEstilo from './CardEstilo'; // Importamos el componente base
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

// Styled components
const ContainerList = styled.div`
  min-height: 70vh;
  margin: 2em;
`;

const Wrapper = styled.div`
  justify-items: center;
  .search-wrapper {
    margin-bottom: 1em;

  }

  .search-input {
    width: 400px;
    height: 40px;
    font-size: 16px;
    padding: 10px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, .1fr));
  grid-gap: 8px;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  max-width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, .1fr));
    grid-gap: 8px;
  }
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  max-width: 100%;

  div {
    display: flex;
    flex-direction: row;
    min-width: 100%;
    column-gap: 10px;
    align-items: center;

    @media (max-width: 600px) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }

  h2 {
    font-size: 40px;
    padding-right: 6em;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media (max-width: 600px) {
      font-size: 20px;
      padding-right: 5em;
      text-overflow: clip;
      white-space: wrap;
    }
  }

  img {
    background-color: #30b3f0;
    margin-right: 2em;

    @media (max-width: 600px) {
      width: 50px;
    }
  }

  .descripcion span,
  .descripcion .email,
  .descripcion .dele,
  .id {
    margin-right: 1em;
    font-size: 20px;

    @media (max-width: 600px) {
      font-size: 10px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: .5fr .5fr .5fr;
    column-gap: 0;

    li {
      width: 50px;
    }
  }
`;

function ListadosUsers({ url, isGridView }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [q, setQ] = useState("");
  const [searchParam] = useState(["nombre", "email", "delegacion"]);
  const [refresh, setRefresh] = useState(false); // Estado para rastrear actualizaciones

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url, {
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
        setIsLoaded(true);
        setMessage(data.message);
      } catch (error) {
        setError(error);
        setIsLoaded(true);
      }
    };
    fetchUser();
  }, [url, refresh]);

  const handleUserUpdated = () => {
    setRefresh(!refresh); // Cambia el estado de refresh para desencadenar useEffect
  };

  const search = (items) => {
    return items.filter((item) => {
      return searchParam.some((param) => {
        return (
          item[param]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1
        );
      });
    });
  };

  const handleSearchChange = debounce((e) => {
    setQ(e.target.value);
  }, 300);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Cargando lista...</div>;
  } else {
    return (
      <ContainerList>
        <Wrapper>
          <div className="search-wrapper">
            <label htmlFor="search-form">
              <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Buscar por nombre, email o delegacion..."
                onChange={handleSearchChange}
              />
            </label>
          </div>

          {isGridView ? (
            <CardGrid>
              {search(users).map((user) => (
                <div key={user.id}>
                  <CardEstilo
                    url={'http://localhost/gatsby-qr/images/users/' + user.image_url}
                    titulo={user.nombre}
                    descripcion={
                      <>
                        <div className='descripcion'>
                          <span className="small text-uppercase text-muted">{user.role}</span>
                          <p className='id'><strong>Id usuario:</strong> {user.id}</p>
                          <p className='email'><strong>Email:</strong> {user.email}</p>
                          <p className='dele'><strong>Delegación:</strong> {user.delegacion}</p>
                          <ul className="social mb-0 list-inline">
                            <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                              <UpdateUser
                                initialEmail={user.email}
                                initialNombre={user.nombre}
                                initialDepartamento={user.delegacion}
                                onUserUpdated={handleUserUpdated}
                              />
                            </li>
                            <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                              <ChangeRoleUser
                                className="social-link"
                                initialEmail={user.email}
                                onRoleChanged={handleUserUpdated}
                              />
                            </li>
                            <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                              <DeleteUser />
                            </li>
                          </ul>
                        </div>
                      </>
                    }
                  />
                </div>
              ))}
            </CardGrid>
          ) : (
            <CardList>
              {search(users).map((user) => (
                <div key={user.id}>
                  <CardEstilo
                    url={'http://localhost/gatsby-qr/images/users/' + user.image_url}
                    titulo={user.nombre}
                    descripcion={
                      <>
                        <div className='descripcion'>
                          <span className="small text-uppercase text-muted">{user.role}</span>
                          <p className='id'><strong>Id usuario:</strong> {user.id}</p>
                          <p className='email'><strong>Email:</strong> {user.email}</p>
                          <p className='dele'><strong>Delegación:</strong> {user.delegacion}</p>
                          <ul className="social mb-0 list-inline">
                            <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                              <UpdateUser
                                initialEmail={user.email}
                                initialNombre={user.nombre}
                                initialDepartamento={user.departamento}
                                onUserUpdated={handleUserUpdated}
                              />
                            </li>
                            <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                              <ChangeRoleUser
                                className="social-link"
                                initialEmail={user.email}
                                onRoleChanged={handleUserUpdated}
                              />
                            </li>
                            <li className="list-inline-item" style={{ cursor: 'pointer' }}>
                              <DeleteUser />
                            </li>
                          </ul>
                        </div>
                      </>
                    }
                  />
                </div>
              ))}
            </CardList>
          )}
        </Wrapper>
      </ContainerList>
    );
  }
}

ListadosUsers.propTypes = {
  url: PropTypes.string.isRequired,
  isGridView: PropTypes.bool
};

export default ListadosUsers