import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React.StrictMode 是突出应用程序中潜在问题的工具。与fragment一样，strictmode不会呈现任何可见的ui。它会激活其后代的其他检查和警告。
