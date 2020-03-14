import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
