import { useState, useEffect } from "react";

export const useTheme = () => {
    const getInitialTheme = () => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved;

        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return { theme, toggleTheme };
};
