import React from "react";
import { Form, Col } from "react-bootstrap";

const Direccion = (props) => {
  return (
    <Form.Group>
      <Form.Row>
        <Form.Label column sm="auto">
          Dirección
        </Form.Label>
        <Col sm="6" lg="12">
          <Form.Control
            placeholder="Dónde podemos encontrarlo?"
            name="direccion"
            ref={props.register({
              required: {
                value: true,
                message: "Bríndele una direccíon a sus clientes",
              },
              minLength: {
                value: 4,
                message: "Incluya al menos cuatro caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {props.errors?.direccion?.message}
          </Form.Text>
        </Col>
      </Form.Row>
    </Form.Group>
  );
};

export default Direccion;
