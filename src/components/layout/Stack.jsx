import { IoCodeSlash } from "react-icons/io5";
import { useTheme } from "@context/ThemeContext";
import "@styles/keyframes.css";

const Stack = () => {
    const techStack = [
        { id: 1, icon: "javascript", name: "Javascript" },
        { id: 2, icon: "typescript", name: "Typescript" },
        { id: 3, icon: "nodejs", name: "Node JS" },
        { id: 4, icon: "react", name: "React" },
        { id: 5, icon: "html", name: "HTML" },
        { id: 6, icon: "css", name: "CSS" },
        { id: 7, icon: "tailwindcss", name: "Tailwind" },
        { id: 8, icon: "github", name: "GitHub" },
        { id: 9, icon: "php", name: "PHP" },
        { id: 10, icon: "azure", name: "Azure" },
    ];

    const ICONS_SOURCE = "/src/assets/icons/";

    const { theme } = useTheme();

    return (
        <section aria-label="stack" className="w-full" id="Stack">
            {/* <header className="inline-flex gap-2 align-middle">
                    <span className="w-8 h-full p-1 *:w-full flex justify-center">
                        <IoCodeSlash className="my-auto size-full" />
                    </span>
                    <h2>Stack</h2>
                </header>
                <p className="ml-4 text-xl text-custom-text/80">
                    Tools and technologies I use to build websites.
                </p> */}
            <div className="relative w-full overflow-hidden">
                <span className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-custom-bg md:via-custom-bg/80 z-10" />
                <span className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-custom-bg md:via-custom-bg/80 z-10" />
                <ul
                    className="flex items-center animate-scroll"
                    style={{ width: `${techStack.length * 256 * 2}px` }}
                >
                    {[
                        ...techStack.map((item) => ({
                            ...item,
                            uniqueId: `set-1-${item.id}`,
                        })),
                        ...techStack.map((item) => ({
                            ...item,
                            uniqueId: `set-2-${item.id}`,
                        })),
                    ].map((tech) => {
                        const imgSuffix = theme === "dark" ? "_dark" : "";

                        return (
                            <li
                                key={`key-${tech.uniqueId}`}
                                className="flex-shrink-0 w-64"
                            >
                                <div className="rounded-2xl p-4 h-52 flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-custom-primary/10">
                                    <img
                                        src={`${ICONS_SOURCE}${tech.icon}${
                                            tech.icon === "php" ||
                                            tech.icon === "github"
                                                ? imgSuffix
                                                : ""
                                        }.svg`}
                                        alt={`${tech.name}'s logo`}
                                        loading="lazy"
                                        className={`size-24 p-4 rounded-lg`}
                                    />
                                    <small className="font-medium text-lg capitalize">
                                        {tech.name}
                                    </small>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Stack;
