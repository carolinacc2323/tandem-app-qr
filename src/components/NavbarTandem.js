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
  NavbarText,
} from 'reactstrap';
import "./NavbarTandem.css";

function NavbarTandem(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
        <NavbarBrand href="/">
          <StaticImage src='../images/logoblanco.png' alt="Logo" width={100}  />
        </NavbarBrand>
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
                  <NavLink href="/" className='navlink'>
                    SOPORTE TÉCNICO
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </>
        ) : (
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/AppQr" className='navlink'>APP QR</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/AreaPersonal" className='navlink'>
                ÁREA PERSONAL
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className='navlink'>
                SOPORTE TÉCNICO
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </div>
  );
}

export default NavbarTandem;