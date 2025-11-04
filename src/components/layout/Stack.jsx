import { IoCodeSlash } from "react-icons/io5";

const Stack = () => {
    const techStack = [
        "javascript",
        "react",
        "nodejs",
        "typescript",
        "tailwindcss",
        "github",
        "html",
        "php",
    ];

    const ICONS_SOURCE = "/src/assets/icons/";

    return (
        <>
            <section
                aria-label="stack"
                className="scroll-m-20 w-full mx-auto flex flex-col gap-4 lg:max-w-screen-xl px-4 pb-20
                md:max-w-2xl"
                id="Stack"
            >
                <header className="inline-flex gap-2 align-middle">
                    <span className="w-8 h-full p-1 *:w-full flex justify-center">
                        <IoCodeSlash className="my-auto size-full" />
                    </span>
                    <h2>Stack</h2>
                </header>
                <p className="ml-4 text-xl text-custom-text/80">
                    Tools and technologies I use to build websites.
                </p>
                <ul
                    className="grid grid-cols-5 place-items-center
                    [&_img]:size-24 [&_img]:p-4"
                >
                    {techStack.map((tech) => {
                        const phpCustom =
                            tech === "php" ? "bg-white" : "bg-transparent";

                        // Detectar si el tema es oscuro
                        const isDarkMode =
                            window.matchMedia &&
                            window.matchMedia("(prefers-color-scheme: dark)")
                                .matches;

                        // Elegir la imagen según el tema
                        const imgSuffix = isDarkMode ? "_dark" : "";

                        return (
                            <li
                                key={tech}
                                className="flex flex-col justify-center items-center"
                            >
                                <img
                                    src={`${ICONS_SOURCE}${tech}${imgSuffix}.svg`}
                                    alt={`${tech}'s logo`}
                                    loading="lazy"
                                    className={`size-24 p-4 rounded-lg ${phpCustom}`}
                                />

                                <small className="font-medium text-lg capitalize">
                                    {tech}
                                </small>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
};

export default Stack;
