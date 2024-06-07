import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
function NavbarTandem(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar color="dark" dark className='my-2'>
        <NavbarBrand href="/" className="me-auto">
          <StaticImage src='../images/logoblanco.png' width={150}/>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/AppQr">App QR</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/InfoInstitucional">
                Info Institucional
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavbarTandem;