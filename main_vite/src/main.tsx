import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div
        className="background-image"
        style={{
          backgroundImage: "url('../../public/background-image2.jpg')",
        }}
      ></div>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
