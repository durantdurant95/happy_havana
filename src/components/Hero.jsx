import React, { Fragment } from "react";
import { Container, Button, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <Fragment>
      <section id="hero">
        <Container>
          <h1 className="display-3">
            Happy <span>Havana</span>
          </h1>
          <Col md="10" lg="8">
            <p>
              La <span className="satisfy">nueva</span> app que te muestra las
              mejores opciones para <span className="satisfy">disfrutar</span>{" "}
              de nuestra capital. Encuentra los mejores{" "}
              <span className="satisfy">bares</span>, cafeterías y demás sitios
              de tu agrado. Escribe reseñas, ve opiniones, elige entre tus
              lugares <span className="satisfy">favoritos</span> con todos tus{" "}
              <span className="satisfy">amigos</span>.
            </p>
          </Col>
          {/* 
      <Button href="/happy_havana" size="lg">
      Descarga
    </Button> */}
          <h2>
            Próximamente en <span>Play Store</span>
          </h2>
        </Container>
      </section>
      <section id="hero-form">
        <Container className="pb-5">
          <h1 className="display-4 py-5">
            Haz que tus clientes <span>lleguen a ti</span>
          </h1>
          <Col md={{ span: 10, offset: 2 }}>
            <p>
              Para los orgullosos <span className="satisfy">dueños</span> de
              bares y demás lugares de recreación: contamos con un{" "}
              <span className="satisfy">sencillo</span> formulario con el que
              podrás <span className="satisfy">anunciarte</span> de forma rápida
              y <span className="satisfy">gratuita</span> en nuestra app.
              <br />
              No esperes más y <span className="satisfy">
                date a conocer
              </span>{" "}
              con nosotros.
            </p>
          </Col>
          <Col xs={{ span: 2, offset: 6 }}>
            <NavLink to="/happy_havana/formulario">
              <Button variant="primary" size="lg">
                Anúnciate
              </Button>
            </NavLink>
          </Col>
        </Container>
      </section>
    </Fragment>
  );
};

export default Hero;
