import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToRead from "./components/ToRead";

ReactDOM.render(
  <React.StrictMode>
    <h1>React TBR</h1>
    <ToRead />
  </React.StrictMode>,
  document.getElementById("root")
);
