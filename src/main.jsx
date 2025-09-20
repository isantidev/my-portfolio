import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navigation from "./components/layout/Navigation.jsx";
import "@styles/global.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navigation />
    </StrictMode>
);
