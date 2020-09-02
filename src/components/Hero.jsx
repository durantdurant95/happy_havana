import React from "react";
import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <Container className="hero">
      <h1 className="my-5 display-3">Happy Havana</h1>
      <p>Catalogamos los mejores bares, cafeterías y similares en la ciudad</p>
      <Button className="mr-5">Descarga</Button>
      <NavLink to="/happy_havana/formulario">
        <Button>Anúnciate</Button>
      </NavLink>
    </Container>
  );
};

export default Hero;
