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

const Formulario = () => {
  useEffect(() => {
    bsCustomFileInput.init();
  }, []);

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
