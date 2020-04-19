import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import AdminProvider from "./store/AdminProvider/AdminProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AdminProvider>
      <Router>
        <App />
      </Router>
    </AdminProvider>
  </React.StrictMode>,
  rootElement
);
