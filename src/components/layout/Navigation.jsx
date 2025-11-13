import { useState } from "react";
import { useTheme } from "/src/components/hooks/useTheme";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";

const Navigation = () => {
    const { theme, toggleTheme } = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <nav className="fixed md:top-2 w-screen min-h-fit inline-flex justify-center z-999">
                <div className="w-full md:mx-4 md:rounded-sm max-w-screen-xl flex flex-wrap items-center justify-between p-4 h-auto backdrop-blur-3xl">
                    <a href="#Hero" className="block">
                        <span className="h-full align-middle text-xl font-bold">
                            isantidev
                        </span>
                    </a>
                    <div className="flex items-center gap-3 md:gap-0 md:order-2">
                        <button
                            onClick={toggleTheme}
                            aria-roledescription="Change the page theme"
                            className="size-8 rounded-sm cursor-pointer bg-custom-primary/40 hover:bg-custom-accent/20 hover:shadow-sm hover:shadow-custom-text/20"
                        >
                            <p className="sr-only">Change Theme</p>
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
                            className="inline-flex items-center size-8 justify-center text-sm text-custom-text rounded-sm md:hidden"
                            aria-controls="navbar-solid-bg"
                            aria-expanded={isExpanded}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isExpanded === true ? (
                                <IoClose className="size-7 stroke-3" />
                            ) : (
                                <IoMenu className="size-7 stroke-3" />
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
                                    href="#Experience"
                                    className="block py-2 px-3 md:py-1 text-custom-text/90 md:rounded-sm md:overflow-auto hover:text-custom-text focus:bg-custom-accent/20 md:border-0 md:hover:bg-custom-accent/20 "
                                >
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#Projects"
                                    className="block py-2 px-3 md:py-1 text-custom-text/90 md:rounded-sm hover:text-custom-text focus:bg-custom-accent/20 md:border-0 md:hover:bg-custom-accent/20 "
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#About"
                                    className="block py-2 px-3 md:py-1 text-custom-text/90 md:rounded-sm hover:text-custom-text focus:bg-custom-accent/20 md:border-0 md:hover:bg-custom-accent/20 "
                                >
                                    About me
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#Contact"
                                    className="block py-2 px-3 md:py-1 text-custom-text/90 md:rounded-sm hover:text-custom-text focus:bg-custom-accent/20 md:border-0 md:hover:bg-custom-accent/20 "
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
