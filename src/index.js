import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CentersContext } from "./context/centers-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CentersContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CentersContext>
);
