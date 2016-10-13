import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import {MainPage} from "./pages/MainPage";
import {LoginPage} from "./pages/LoginPage";
import {registeredAllRoutes} from "./navigation/registeredRoute";

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={MainPage}/>
      <Route path="/login" component={LoginPage}/>
    </Router>
  ),
  document.getElementById("container")!,
  ()=>registeredAllRoutes()
);

