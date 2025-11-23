import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // <--- Panggil App.jsx biar bisa jalan

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
