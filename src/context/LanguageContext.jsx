import {
    Children,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { translations } from "@locales/index.js";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem("language");
        if (saved) return saved;

        const browserLang = navigator.language.split("-")[0];
        return browserLang == "es" ? "es" : "en";
    });

    useEffect(() => {
        localStorage.setItem("language", language);
        document.documentElement.lang = language;
    }, [language]);

    const t = (key) => {
        const keys = key.split(".");
        let value = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "es" : "en"));
    };

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage, toggleLanguage, t }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }

    return context;
};
