import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const getInitialTheme = () => {
        // Primero verificar si hay un tema guardado
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme;

        // Si no, usar la preferencia del sistema
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        // Aplicar el tema al DOM
        document.documentElement.classList.toggle("dark", theme === "dark");

        // Guardar la preferencia
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Escuchar cambios en la preferencia del sistema
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (e) => {
            // Solo actualizar si no hay tema guardado manualmente
            if (!localStorage.getItem("theme")) {
                setTheme(e.matches ? "dark" : "light");
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
