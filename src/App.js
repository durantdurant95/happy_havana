import React from "react";
import "./fonts/JosefinSans-VariableFont_wght.ttf";
import "./fonts/Satisfy-Regular.ttf";
import "./fonts/Jost-VariableFont_ital_wght.ttf";
import "./App.scss";
import Formulario from "./components/Formulario";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Hero from "./components/Hero";
import BarraNav from "./components/BarraNav";

function App() {
  return (
    <Router className="mainPage">
      <BarraNav />
      <Switch>
        <Route path="/happy_havana/formulario">
          <Formulario />
        </Route>
        <Route path="/happy_havana" exact>
          <Hero />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
