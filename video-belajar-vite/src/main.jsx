import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // <--- 1. Ini panggil biar bisa jalan

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
