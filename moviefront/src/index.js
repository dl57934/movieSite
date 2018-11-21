import React from "react";
import ReactDOM from "react-dom";
import App from "./javascript/root/App";
import HeaderApp from "./javascript/header/headerApp";
import GlobalStyle from "./javascript/globalStyles";
import { Fragment } from "react";

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById("root")
);

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <HeaderApp />
  </Fragment>,
  document.getElementById("header")
);
