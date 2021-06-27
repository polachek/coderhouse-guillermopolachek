import React from "react";
import {BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Home } from "./pages/home/home";
import { NotFound } from "./pages/notFound/notFound";
import {NavBar} from './components/navBar/NavBar'

export const Routes = () => {
  return (
    <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
}