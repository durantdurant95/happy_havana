import React from "react";
import { Form } from "react-bootstrap";

const Descripcion = (props) => {
  return (
    <Form.Group>
      <Form.Label>Descripción</Form.Label>
      <Form.Control
        as="textarea"
        rows="6"
        placeholder="Breves palabras que describan el lugar"
        name="descripcion"
        ref={props.register({
          required: { value: true, message: "Bríndenos una pequeña reseña" },
        })}
      />
      <Form.Text className="text-danger">
        {props.errors?.descripcion?.message}
      </Form.Text>
    </Form.Group>
  );
};

export default Descripcion;
