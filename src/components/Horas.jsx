import React from "react";
import { Form, Col } from "react-bootstrap";

const Horas = (props) => {
  return (
    <Form.Row>
      <Form.Group as={Col} className="mr-5" sm="auto">
        <Form.Label>Hora de Apertura</Form.Label>
        <Form.Row>
          <Col sm="auto">
            <Form.Control
              name="horaApertura"
              ref={props.register()}
              as="select"
              className="mb-1"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </Form.Control>
          </Col>
          <Col sm="auto">
            <Form.Control
              name="aperturaAMPM"
              ref={props.register()}
              as="select"
            >
              <option>AM</option>
              <option>PM</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
      <Form.Group as={Col} className="mr-5" sm="auto">
        <Form.Label>Hora de Cierre</Form.Label>
        <Form.Row>
          <Col sm="auto">
            <Form.Control
              name="horaCierre"
              type="number"
              ref={props.register()}
              as="select"
              className="mb-1"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </Form.Control>
          </Col>
          <Col sm="auto">
            <Form.Control name="cierreAMPM" ref={props.register()} as="select">
              <option>AM</option>
              <option>PM</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
    </Form.Row>
  );
};

export default Horas;
