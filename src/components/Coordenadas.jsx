import React from "react";
import { Form, Col } from "react-bootstrap";

const Coordenadas = (props) => {
  return (
    <Form.Group>
      <Form.Label>Coordenadas</Form.Label>
      <Form.Row>
        <Form.Label column sm="auto">
          Latitud
        </Form.Label>
        <Col sm="2">
          <Form.Control
            name="latitud"
            ref={props.register()}
            placeholder="Lat."
          />
        </Col>
        <Form.Label column sm="auto">
          Longitud
        </Form.Label>
        <Col sm="auto">
          <Form.Control
            name="longitud"
            ref={props.register()}
            placeholder="Long."
          />
        </Col>
      </Form.Row>
    </Form.Group>
  );
};

export default Coordenadas;
