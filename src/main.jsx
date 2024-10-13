import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ResultContextProvider } from "./contexts/ContextProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ResultContextProvider>
        <App />
      </ResultContextProvider>
    </Router>
  </StrictMode>
);
