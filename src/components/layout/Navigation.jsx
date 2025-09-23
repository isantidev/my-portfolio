import { useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navigation = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <nav className="inline-block w-full min-h-[4.5rem] md:min-h-16 justify-center bg-custom-secondary z-999">
                <div className="fixed top-0 right-0 left-0 w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-auto bg-custom-secondary">
                    <a href="#" className="flex items-center">
                        <span className="self-center text-[1.2rem] font-semibold whitespace-nowrap">
                            isantidev
                        </span>
                    </a>
                    <div className="flex items-center gap-3 md:gap-0 md:order-2">
                        <button
                            onClick={toggleTheme}
                            className="size-8 rounded-full cursor-pointer bg-custom-primary/40 hover:bg-custom-accent/20 hover:shadow-sm hover:shadow-custom-text/20"

                        >
                            {theme === "light" ? (
                                <IoMdSunny className="size-4 m-auto" />
                            ) : (
                                <IoMdMoon className="size-4 m-auto" />
                            )}
                        </button>
                        <button
                            onClick={toggleNavbar}
                            data-collapse-toggle="navbar-solid-bg"
                            type="button"
                            className="inline-flex items-center p-2 size-10 justify-center text-sm text-custom-text rounded-lg md:hidden"
                            aria-controls="navbar-solid-bg"
                            aria-expanded={isExpanded}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isExpanded === true ? (
                                <IoClose className="size-6 m-auto stroke-3" />
                            ) : (
                                <IoMenu className="size-6 m-auto stroke-3" />
                            )}
                        </button>
                    </div>
                    <div
                        className={`${
                            isExpanded ? "block" : "hidden"
                        } w-full md:block md:w-auto`}
                        id="navbar-solid-bg"
                    >
                        <ul className="flex flex-col font-medium mt-4 rounded-lg md:rounded-none overflow-hidden bg-custom-primary/40 md:gap-4 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 md:py-0.5 text-custom-text bg-custom-accent/20 md:rounded-sm md:bg-custom-accent/20 md:text-custom-text"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 md:py-0.5 text-custom-text/90 md:rounded-sm md:overflow-auto hover:text-custom-text focus:bg-custom-accent/20 md:border-0 md:hover:bg-custom-accent/20 "
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 md:py-0.5 text-custom-text/90 md:rounded-sm hover:text-custom-text focus:bg-custom-accent/20 md:border-0 md:hover:bg-custom-accent/20 "
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 md:py-0.5 text-custom-text/90 md:rounded-sm hover:text-custom-text focus:bg-custom-accent/20 md:border-0 md:hover:bg-custom-accent/20 "
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
