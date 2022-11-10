import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <App />
    </div>
  </StrictMode>
);
