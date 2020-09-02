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
import Direccion from "./Direccion";

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

    myNewObject.set("nombre", data.nombre);
    myNewObject.set("tipo", data.tipo);
    myNewObject.set("vip", data.vip);
    myNewObject.set("direcc", data.direccion);
    myNewObject.set("descr", data.descripcion);
    myNewObject.set("telefono", data.numeroTelefono);
    myNewObject.set("lunesi", data.lunes);
    myNewObject.set("martesi", data.martes);
    myNewObject.set("miercolesi", data.miercoles);
    myNewObject.set("juevesi", data.jueves);
    myNewObject.set("viernesi", data.viernes);
    myNewObject.set("sabadoi", data.sabado);
    myNewObject.set("domingoi", data.domingo);
    myNewObject.set(
      "hora",
      data.horaApertura +
        ":" +
        data.minutosApertura +
        data.aperturaAMPM +
        " - " +
        data.horaCierre +
        ":" +
        data.minutosCierre +
        data.cierreAMPM
    );
    myNewObject.set(
      "coord",
      new Parse.GeoPoint({
        latitude: Number(data.latitud),
        longitude: Number(data.longitud),
      })
    );

    myNewObject.set("foto1", new Parse.File(data.foto1));
    myNewObject.set("foto2", new Parse.File(data.foto2));
    myNewObject.set("foto3", new Parse.File(data.foto3));
    myNewObject.set("foto4", new Parse.File(data.foto4));

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
        <Direccion register={register} errors={errors} />
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
