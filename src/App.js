import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeContainer from "./pages/HomeContainer";
import Nav123 from "./components/Nav123";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/portfolio" component={Nav123} />
    </Switch>
  </BrowserRouter>
);

export default App;
