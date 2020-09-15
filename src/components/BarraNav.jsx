import React from "react";
import { Container, Image, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../images/icono_hh.svg";
const BarraNav = () => {
  return (
    <Navbar expand="md" variant="light" sticky="top">
      <Container>
        <NavLink to="/happy_havana">
          <Image src={logo} height="40" className="mr-1 align-top" />
          <Navbar.Brand className="ml-2">Happy Havana</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle>
          <div className="nav-icon"></div>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <NavLink className="links" to="/happy_havana">
              Inicio
            </NavLink>
            <NavLink className="links" to="/happy_havana/formulario">
              Formulario
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNav;
