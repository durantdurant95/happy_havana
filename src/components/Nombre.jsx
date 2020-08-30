import React from "react";
import { Form, Col } from "react-bootstrap";

const Nombre = (props) => {
  return (
    <Form.Group>
      <Form.Row>
        <Form.Label column sm="auto">
          Nombre
        </Form.Label>
        <Col sm="6" lg="8">
          <Form.Control
            placeholder="Nombre del Establecimiento"
            name="nombre"
            ref={props.register({
              required: { value: true, message: "Recuerde incluir el nombre" },
              minLength: {
                value: 2,
                message: "Incluya al menos dos caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {props.errors?.nombre?.message}
          </Form.Text>
        </Col>
      </Form.Row>
    </Form.Group>
  );
};

export default Nombre;
