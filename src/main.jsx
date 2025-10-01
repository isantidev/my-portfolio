import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navigation from "./components/layout/Navigation.jsx";
import Hero from "./components/layout/Hero.jsx";
import Experience from "./components/layout/Experience.jsx";
import "@styles/global.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navigation />
        <Hero />
        <Experience />
    </StrictMode>
);
