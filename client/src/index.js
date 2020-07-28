import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WebFont from "webfontloader";
import App from "./App";

WebFont.load({
  google: {
    families: ["Lato:300,400,700", "Lobster:300,400,700", "sans-serif"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA