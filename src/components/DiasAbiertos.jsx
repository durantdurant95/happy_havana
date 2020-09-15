import React from "react";
import { Form } from "react-bootstrap";

const DiasAbiertos = (props) => {
  return (
    <Form.Group>
      <Form.Label className="d-block">Días Abierto al Público</Form.Label>
      <Form.Check
        className="ml-3"
        inline
        type="checkbox"
        custom
        id="lunes"
        label="Lunes"
        name="lunes"
        ref={props.register()}
      />
      <Form.Check
        className="ml-3"
        inline
        custom
        type="checkbox"
        id="martes"
        label="Martes"
        name="martes"
        ref={props.register()}
      />
      <Form.Check
        className="ml-3"
        custom
        inline
        id="miercoles"
        label="Miércoles"
        name="miercoles"
        ref={props.register()}
      />
      <Form.Check
        className="ml-3"
        inline
        custom
        id="jueves"
        label="Jueves"
        name="jueves"
        ref={props.register()}
      />
      <Form.Check
        className="ml-3"
        inline
        custom
        id="viernes"
        label="Viernes"
        name="viernes"
        ref={props.register()}
      />
      <Form.Check
        className="ml-3"
        inline
        custom
        id="sabado"
        label="Sábado"
        name="sabado"
        ref={props.register()}
      />
      <Form.Check
        className="ml-3"
        inline
        custom
        id="domingo"
        label="Domingo"
        name="domingo"
        ref={props.register()}
      />
    </Form.Group>
  );
};

export default DiasAbiertos;
