import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App";


const Root = ReactDom.createRoot(document.getElementById("root"));
Root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)