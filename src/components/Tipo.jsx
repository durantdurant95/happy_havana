import React from "react";
import { Form, Col } from "react-bootstrap";
import Vip from "./Vip";

const Tipo = (props) => {
  return (
    <Form.Group>
      <Form.Row className="align-items-center">
        <Form.Label column sm="auto">
          Categoría
        </Form.Label>
        <Col sm="auto" className="mr-5">
          <Form.Control
            name="tipo"
            ref={props.register()}
            as="select"
            defaultValue="Bar"
          >
            <option>Bar</option>
            <option>Bar Restauraant</option>
            <option>Bar Bar Piscina</option>
            <option>Bar Café</option>
            <option>Café</option>
            <option>Discoteca</option>
            <option>Hotel</option>
            <option>Club</option>
            <option>Club Nocturno</option>
            <option>Piscina</option>
          </Form.Control>
        </Col>
        <Col sm="auto">
          <Vip register={props.register} />
        </Col>
      </Form.Row>
    </Form.Group>
  );
};

export default Tipo;
