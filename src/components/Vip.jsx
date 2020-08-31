import React from "react";
import { Form } from "react-bootstrap";

const Vip = (props) => {
  return (
    <Form.Switch name="vip" label="VIP" id="vipSwitch" ref={props.register()} />
  );
};

export default Vip;
