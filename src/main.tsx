import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const element = <h1>Hello, Element</h1>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <App />
  element
);
