import { useState } from "react";
import { useTheme } from "/src/components/hooks/useTheme";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { IoMenu, IoClose, IoLanguage } from "react-icons/io5";
import { useLanguage } from "@context/LanguageContext";

const Navigation = () => {
    // toogle Theme and Language
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const { t } = useLanguage();

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
                            Isantidev
                        </span>
                    </a>
                    <div className="flex items-center gap-3 md:gap-4 md:order-2">
                        <button
                            onClick={toggleLanguage}
                            aria-roledescription="Change the page language"
                            className="h-8 inline-flex justify-center items-center px-4 gap-2 lg:gap-4 rounded-sm cursor-pointer bg-custom-secondary/20 ring-2 ring-custom-text/10 hover:bg-custom-accent/10 hover:scale-105 [&_span]:uppercase [&_span]:font-semibold text-sm [&_p_span]:pointer-events-none [&_svg]:hidden [&_svg]:md:block transition-colors ease-in"
                        >
                            <p className="sr-only">Change language</p>
                            <IoLanguage className="size-4 m-auto pointer-events-none" />
                            {language === "en" ? (
                                <span>EN</span>
                            ) : (
                                <span>ES</span>
                            )}
                        </button>
                        <button
                            onClick={toggleTheme}
                            aria-roledescription="Change the page theme"
                            className="size-8 rounded-sm cursor-pointer bg-custom-secondary/20 ring-2 ring-custom-text/10 hover:bg-custom-accent/10 hover:scale-105 transition-all ease-in"
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
                                <IoClose className="size-7 stroke-3 pointer-events-none" />
                            ) : (
                                <IoMenu className="size-7 stroke-3 pointer-events-none" />
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
                                    {t("nav.experience")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#Projects"
                                    className="block py-2 px-3 md:py-1 text-custom-text/90 md:rounded-sm hover:text-custom-text focus:bg-custom-accent/20 md:border-0 md:hover:bg-custom-accent/20 "
                                >
                                    {t("nav.projects")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#About"
                                    className="block py-2 px-3 md:py-1 text-custom-text/90 md:rounded-sm hover:text-custom-text focus:bg-custom-accent/20 md:border-0 md:hover:bg-custom-accent/20 "
                                >
                                    {t("nav.about")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#Contact"
                                    className="block py-2 px-3 md:py-1 text-custom-text/90 md:rounded-sm hover:text-custom-text focus:bg-custom-accent/20 md:border-0 md:hover:bg-custom-accent/20 "
                                >
                                    {t("nav.contact")}
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
