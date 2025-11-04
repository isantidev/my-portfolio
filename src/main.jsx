import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Navigation from "@layout/Navigation.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import "@styles/global.css";
import "@fontsource-variable/onest";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <Navigation />
            <App />
        </ThemeProvider>
    </StrictMode>
);
