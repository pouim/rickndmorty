import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";

import App from "App";
import { theme } from "themes";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
