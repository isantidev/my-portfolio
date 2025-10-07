import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navigation from "@layout/Navigation.jsx";
import Hero from "@layout/Hero.jsx";
import Experience from "@layout/Experience.jsx";
import Stack from "@layout/Stack.jsx";
import "@styles/global.css";
import "@fontsource-variable/onest";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navigation />
        <Hero />
        <Experience />
    </StrictMode>
);
