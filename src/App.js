import React, { Fragment } from "react";
import "./fonts/JosefinSans-VariableFont_wght.ttf";
import "./App.scss";
import Formulario from "./components/Formulario";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Hero from "./components/Hero";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Fragment>
      <Router>
        <Container>
          <NavLink to="/" exact>
            Logo
          </NavLink>
        </Container>
        <Switch>
          <Route path="/" exact>
            <Hero />
          </Route>
          <Route path="/formulario" exact>
            <Formulario />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
