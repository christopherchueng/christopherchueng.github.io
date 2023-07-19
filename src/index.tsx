import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
