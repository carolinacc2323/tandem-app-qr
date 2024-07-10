import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "./NavbarTandem.css";
import CerrarSesion from './CerrarSesion';
import BannerUser from "../components/BannerUser";
import ModalSoporte from './ModalSoporte';

function NavbarTandem(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setModal(!modal);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Navbar color="dark" dark expand="md" >
        <NavbarBrand href="/" style={{
          display: 'flex',
        }}>
          <StaticImage src='../images/logoblanco.png' alt="Logo" width={200} />
          
        </NavbarBrand>
        <NavLink  href="/AreaPersonal">
          <BannerUser />
        </NavLink>
        {isMobile ? (
          <>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/Login" className='navlink'>APP QR</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/AreaPersonal" className='navlink'>
                    ÁREA PERSONAL
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={toggleModal}>
                    SOPORTE TÉCNICO
                  </NavLink>
                </NavItem>
                <NavItem>
                  <CerrarSesion />
                </NavItem>
              </Nav>
            </Collapse>
          </>
        ) : (
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/AppQr" className='navlink' style={{fontSize: '15px'}}>APP QR</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/AreaPersonal" className='navlink' style={{fontSize: '15px'}}>
                ÁREA PERSONAL
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={toggleModal} style={{fontSize: '15px'}}>
                SOPORTE TÉCNICO
              </NavLink>
            </NavItem>
            <NavItem>
              <CerrarSesion />
            </NavItem>
          </Nav>
        )}
      </Navbar>
      <ModalSoporte modal={modal} toggleModal={toggleModal} />
    </div>
  );
}

export default NavbarTandem