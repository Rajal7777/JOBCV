import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n"; // Import i18n to ensure it's initialized

import App from "./App.jsx";

// Ensure i18n is initialized before rendering
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
