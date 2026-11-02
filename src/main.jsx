import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // App.css loads Tailwind
import ThemeProvider from "./context/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
