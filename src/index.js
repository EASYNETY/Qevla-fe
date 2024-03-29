
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";
import { Provider } from "react-redux";
import store from "store";
// import Login from "components/Login.js";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Redirect from="/" to="/auth/login" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);


