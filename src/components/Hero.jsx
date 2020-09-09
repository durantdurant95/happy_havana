import React from "react";
import { Container, Button, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <Container fluid className="main">
      <Container className="hero">
        <h1 className="display-1">Happy Havana</h1>
        <Col md="10" lg="8">
          <p>
            La nueva app que te muestra las mejores opciones para disfrutar de
            nuestra capital. Encuentra los mejores bares, cafeterías y demás
            sitios de tu agrado. Escribe reseñas, ve opiniones, elige entre tus
            lugares favoritos con todos tus amigos.
          </p>
        </Col>
        {/* 
      <Button href="/happy_havana" size="lg">
      Descarga
    </Button> */}
        <h2>Próximamente en Play Store</h2>
      </Container>
      <Container className="hero-form pb-5">
        <h1>Haz que tus clientes lleguen a ti</h1>
        <Col md={{ span: 10, offset: 2 }} lg={{ span: 8, offset: 4 }}>
          <p>
            Para los orgullosos dueños de bares y demás lugares de recreación:
            contamos con un sencillo formulario con el que podrás anunciarte de
            forma rápida y gratuita en nuestra app. No esperes más y date a
            conocer con nosotros.
          </p>
        </Col>
        <Col xs={{ span: 2, offset: 6 }}>
          <Button href="/happy_havana/formulario" variant="secondary" size="lg">
            Anúnciate
          </Button>
        </Col>
      </Container>
    </Container>
  );
};

export default Hero;
