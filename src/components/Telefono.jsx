import React from "react";
import { Form, Col } from "react-bootstrap";

const Telefono = (props) => {
  return (
    <Form.Group>
      <Form.Row>
        <Form.Label column sm="auto">
          Teléfono
        </Form.Label>
        <Col sm="auto">
          <Form.Control
            name="numeroTelefono"
            ref={props.register({
              required: {
                value: true,
                message: "Necesitamos un número de contacto",
              },
              pattern: {
                value: /[0 - 9]/,
                message: "Debe incluir sólo númmeros",
              },
              minLength: {
                value: 8,
                message: "Debe incluir al menos 8 dígitos",
              },
            })}
            placeholder="XXX-XXX-XX"
          ></Form.Control>
          <Form.Text className="text-danger">
            {props.errors?.numeroTelefono?.message}
          </Form.Text>
        </Col>
      </Form.Row>
    </Form.Group>
  );
};

export default Telefono;
