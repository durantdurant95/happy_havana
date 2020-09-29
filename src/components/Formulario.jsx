import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Container } from "react-bootstrap";
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
import ModalSubiendo from "./ModalSubiendo";

const Formulario = () => {
  //React Hook Form
  const { register, errors, handleSubmit, reset } = useForm();
  useEffect(() => {
    bsCustomFileInput.init();
  }, []);

  //Funciones y estado del Modal de react-bootstrap
  const [show, setShow] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const manejoCierre = () => {
    setMensaje("");
    setShow(false);
  };

  //Conexion con la base de datos de Back4App
  Parse.initialize(
    "0fA7EmBhnDTZqS5aHwEsSoqsmsiZdQrpWrxZIUAg",
    "yMZrtJC9IVeMpYZTGVYXCUP6Y73kyBxAmI5e4A8A"
  );
  Parse.serverURL = "https://parseapi.back4app.com/";

  // Funcion que maneja el submit de datos
  const onSubmit = (data, e) => {
    setShow(true);
    setMensaje("Subiendo sus datos, por favor espere...");

    const Lugar = Parse.Object.extend("Lugar");
    const myNewObject = new Lugar();

    myNewObject.set("nombre", data.nombre);
    myNewObject.set(
      "tipo",
      data.tipo === "Bar"
        ? 0
        : data.tipo === "Bar Restaurant"
        ? 1
        : data.tipo === "Bar Piscina"
        ? 2
        : data.tipo === "Bar Café"
        ? 3
        : data.tipo === "Café"
        ? 4
        : data.tipo === "Discoteca"
        ? 5
        : data.tipo === "Hotel"
        ? 6
        : data.tipo === "Club"
        ? 7
        : data.tipo === "Club Nocturno"
        ? 8
        : 9
    );
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
    data.foto1[0]
      ? myNewObject.set(
          "foto1",
          new Parse.File(data.foto1[0].name, data.foto1[0])
        )
      : console.log("foto1 no seleccionada");
    data.foto2[0]
      ? myNewObject.set(
          "foto2",
          new Parse.File(data.foto2[0].name, data.foto2[0])
        )
      : console.log("foto2 no seleccionada");
    data.foto3[0]
      ? myNewObject.set(
          "foto3",
          new Parse.File(data.foto3[0].name, data.foto3[0])
        )
      : console.log("foto2 no seleccionada");
    data.foto4[0]
      ? myNewObject.set(
          "foto4",
          new Parse.File(data.foto4[0].name, data.foto4[0])
        )
      : console.log("foto2 no seleccionada");

    //Manejo de estado subiendo, subido, error
    myNewObject.save().then(
      (result) => {
        setMensaje("Datos incluidos en la base de datos correctamente");
        console.log("Lugar created", result);
      },
      (error) => {
        setMensaje("Error subiendo sus datos, revise su conexión de red");
        console.error("Error while creating Lugar: ", error);
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="formulario py-3">
      <Container>
        <h1>
          Anúnciate <span>ya!</span>
        </h1>
        <Nombre register={register} errors={errors} />
        <Tipo register={register} />
        <Direccion register={register} errors={errors} />
        <Descripcion register={register} errors={errors} />
        <Telefono register={register} errors={errors} />
        <DiasAbiertos register={register} />
        <Horas register={register} />
        <Coordenadas register={register} />
        <Archivos register={register} errors={errors} />
        <Button variant="secondary" type="submit" className="mr-3">
          Enviar Datos
        </Button>
        <Button type="button" onClick={reset}>
          Limpiar Campos
        </Button>
      </Container>
      <ModalSubiendo
        show={show}
        mensaje={mensaje}
        manejoCierre={manejoCierre}
      />
    </Form>
  );
};

export default Formulario;
