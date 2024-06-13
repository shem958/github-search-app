import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles.css";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
