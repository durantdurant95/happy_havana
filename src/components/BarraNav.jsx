import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const BarraNav = () => {
  return (
    <Navbar expand="md" variant="dark" bg="primary" sticky="top">
      <Container>
        <NavLink to="/happy_havana">
          <Navbar.Brand>HappyHavana</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <NavLink to="/happy_havana">Inicio</NavLink>
            <NavLink to="/happy_havana/formulario">Formulario</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNav;
