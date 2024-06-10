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
                  <NavLink href="/CrearQr">App QR</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">
                    Soporte
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/InfoInstitucional">
                    Información Institucional
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </>
        ) : (
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/CrearQr">App QR</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                Soporte Técnico
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/InfoInstitucional">
                Información Institucional
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </div>
  );
}

export default NavbarTandem;