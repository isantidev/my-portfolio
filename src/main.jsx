import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Navigation from "@layout/Navigation.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import { lazy, Suspense } from "react";
import "@styles/global.css";
import "@fontsource-variable/onest";

const Footer = lazy(() => import("@layout/Footer.jsx"));

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <Navigation />
            <App />
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </ThemeProvider>
    </StrictMode>
);
