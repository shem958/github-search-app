import React from "react";
import ReactDOM from "react-dom/client";
import "/home/shem/github-search-app/src/styles.css";
import { ThemeProvider } from "./ThemeContext";
import App from "./App";
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
