import React from "react";
import { Form, Col } from "react-bootstrap";

const Archivos = (props) => {
  return (
    <Form.Row>
      <Form.Group as={Col} sm="6" lg="3">
        <Form.File
          custom
          label="Elija Foto 1"
          id="foto1"
          name="foto1"
          ref={props.register()}
          data-browse="Buscar"
        />
      </Form.Group>
      <Form.Group as={Col} sm="6" lg="3">
        <Form.File
          custom
          label="Elija Foto 2"
          id="foto2"
          name="foto2"
          ref={props.register()}
          data-browse="Buscar"
        />
      </Form.Group>
      <Form.Group as={Col} sm="6" lg="3">
        <Form.File
          custom
          label="Elija Foto 3"
          id="foto3"
          name="foto3"
          ref={props.register()}
          data-browse="Buscar"
        />
      </Form.Group>
      <Form.Group as={Col} sm="6" lg="3">
        <Form.File
          custom
          label="Elija Foto 4"
          id="foto4"
          name="foto4"
          ref={props.register()}
          data-browse="Buscar"
        />
      </Form.Group>
    </Form.Row>
  );
};

export default Archivos;
