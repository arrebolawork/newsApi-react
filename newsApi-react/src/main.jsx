import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NewsProvider } from "./provider/NewsProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <NewsProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </NewsProvider>
);
