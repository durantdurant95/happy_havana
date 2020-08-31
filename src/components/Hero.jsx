import React from "react";
import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <Container>
      <h1>Happy Havana</h1>
      <p>Catalogamos los mejores bares, cafeterías y similares en la ciudad</p>
      <Button>Descarga</Button>
      <NavLink to="/formulario">
        <Button>Anúnciate</Button>
      </NavLink>
    </Container>
  );
};

export default Hero;
