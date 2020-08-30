import React from "react";
import { Form } from "react-bootstrap";

const Vip = (props) => {
  return (
    <Form.Check
      name="vip"
      label="VIP"
      type="switch"
      id="vipSwitch"
      ref={props.register()}
    />
  );
};

export default Vip;
