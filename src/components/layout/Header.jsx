import { useState } from "react";

const Header = () => {
    const [theme, setTheme] = useState("light");

    const toggletheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <>
            <div className="h-full flex items-center justify-center flex-col gap 4 transition-all ease-in-out ">
                <button
                    onClick={toggletheme}
                    className="py-1.5 px-3 border rounded-full text-2xl cursor-pointer bg-custom-secondary text-custom-text"
                >
                    {theme === "light" ? ` Light mode ` : ` Dark mode `}
                </button>
            </div>
        </>
    );
};

export default Header;
