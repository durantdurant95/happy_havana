import React from "react";
import { Modal } from "react-bootstrap";

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
      <Modal.Body>{props.mensaje}</Modal.Body>
    </Modal>
  );
};

export default ModalSubiendo;
