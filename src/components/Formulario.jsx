import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, Button, Form } from "react-bootstrap";
import bsCustomFileInput from "bs-custom-file-input";
import Horas from "./Horas";
import Archivos from "./Archivos";
import Nombre from "./Nombre";
import Descripcion from "./Descripcion";
import DiasAbiertos from "./DiasAbiertos";
import Telefono from "./Telefono";
import Coordenadas from "./Coordenadas";
import Tipo from "./Tipo";
import { Parse } from "parse";

const Formulario = () => {
  useEffect(() => {
    bsCustomFileInput.init();
  }, []);

  Parse.initialize(
    "0fA7EmBhnDTZqS5aHwEsSoqsmsiZdQrpWrxZIUAg",
    "yMZrtJC9IVeMpYZTGVYXCUP6Y73kyBxAmI5e4A8A"
  );
  Parse.serverURL = "https://parseapi.back4app.com/";

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const Lugar = Parse.Object.extend("Lugar");
    const myNewObject = new Lugar();
    myNewObject.set("descr", "{data.descripcion}");

    myNewObject.save().then(
      (result) => {
        if (typeof document !== "undefined")
          // document.write(`Lugar created: ${JSON.stringify(result)}`);
          console.log("Lugar created", result);
      },
      (error) => {
        if (typeof document !== "undefined")
          // document.write(
          //   `Error while creating Lugar: ${JSON.stringify(error)}`
          // );
          console.error("Error while creating Lugar: ", error);
      }
    );
  };

  return (
    <Container className="formulario">
      <h1 className="titulo">Formulario</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Nombre register={register} errors={errors} />
        <Tipo register={register} />
        <Descripcion register={register} errors={errors} />
        <Telefono register={register} errors={errors} />
        <DiasAbiertos register={register} />
        <Horas register={register} />
        <Coordenadas register={register} />
        <Archivos register={register} />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};

export default Formulario;
