import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      className="background-image"
      style={{
        backgroundImage: "url('../../public/background-image2.jpg')",
      }}
    ></div>
    <App />
  </React.StrictMode>,
);
