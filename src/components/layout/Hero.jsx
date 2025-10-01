import profileImg from "@images/isantidev-vert.webp";
import "@styles/keyframes.css";

const Hero = () => {
    return (
        <>
            <section
                aria-label="about-me"
                className="max-w-screen-xl w-full h-screen min-h-full md:min-h-[90vh] xl:min-h-fit xl:my-16  mx-auto px-4 place-content-center"
            >
                <div className="flex flex-col items-center justify-between gap-4 md:grid md:grid-cols-3 md:place-items-center md:gap-8">
                    <div className="flex flex-col h-full items-center justify-around gap-4 md:gap-2">
                        <span
                            area-label="profile picture"
                            className="size-40 overflow-hidden rounded-full shadow-custom-accent/40 shadow-[0px_0px_15px_0px] "
                        >
                            <img
                                className="h-full w-full object-cover"
                                src={profileImg}
                                alt="Kevin Santiago Sierra Rodriguez's picture"
                            />
                        </span>
                        <a
                            href="#"
                            className="relative py-1 px-3 md:mb-2 text-center text-balance bg-custom-primary/10 rounded-[0.25rem] max-w-fit w-fit hover:animate-pulse opacity-90 transition-all"
                        >
                            <span className="absolute -top-1 -right-1 size-3 bg-custom-primary animate-ping rounded-full opacity-80"></span>
                            <span className="absolute -top-1 -right-1 size-3 rounded-full bg-custom-primary"></span>
                            <span className="text-custom-accent/80">
                                open to work!
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-col max-w-xl h-full gap-2 justify-between items-center text-center md:col-span-2 md:items-start">
                        <span
                            className="font-medium text-2xl text-transparent md:mt-4 bg-clip-text bg-gradient-to-r from-custom-text via-custom-accent to-custom-text opacity-40 animate-gradient"
                            aria-label="Career Profile"
                        >
                            Frontend Developer
                        </span>
                        <h1 className="text-pretty md:text-left">
                            Kevin Sierra Rodriguez
                        </h1>
                        <p className="text-balance md:text-left">
                            I focus on{" "}
                            <i className="text-red-800 dark:text-red-200">
                                building clean
                            </i>{" "}
                            and
                            <i className="text-green-800 dark:text-green-200">
                                {" "}
                                efficient{" "}
                            </i>{" "}
                            user interfaces with
                            <strong className="text-blue-700 dark:text-blue-300">
                                {" "}
                                React.js{" "}
                            </strong>
                            . I'm a collaborative team player, experienced in{" "}
                            <strong className="text-green-800 dark:text-green-200">
                                Agile methodologies
                            </strong>{" "}
                            and comfortable working in English{" "}
                            <i className="text-red-800 dark:text-red-300">
                                (B2 level)
                            </i>{" "}
                            with international teams. <br />
                            <br />
                            <i className="text-custom-text/80">
                                I'm always learning; right now, I'm deepening my
                                knowledge of TypeScript and the latest
                                ECMAScript features to level up my code quality
                            </i>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
