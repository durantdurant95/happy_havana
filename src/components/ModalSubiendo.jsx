import React from "react";
import { Modal, Image } from "react-bootstrap";
import error from "../images/error.svg";
import ok from "../images/ok.svg";

const ModalSubiendo = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.manejoCierre}
      backdrop="static"
      keyboard="false"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Proceso de subida</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.mensaje === "Subiendo sus datos, por favor espere..." ? (
          <svg id="circleSVG">
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
        ) : props.mensaje ===
          "Error subiendo sus datos, revise su conexión de red" ? (
          <Image src={error} height="150" />
        ) : props.mensaje ===
          "Datos incluidos en la base de datos correctamente" ? (
          <Image src={ok} height="150" />
        ) : (
          ""
        )}
      </Modal.Body>
      <Modal.Footer
        style={{
          color:
            props.mensaje === "Subiendo sus datos, por favor espere..."
              ? "#f15946"
              : props.mensaje ===
                "Error subiendo sus datos, revise su conexión de red"
              ? "#aa0000"
              : props.mensaje ===
                "Datos incluidos en la base de datos correctamente"
              ? "087f5b"
              : "#000000",
        }}
      >
        {props.mensaje}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalSubiendo;
