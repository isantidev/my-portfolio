import profileImg from "@images/isantidev-vert.webp";
import "@styles/keyframes.css";

const Hero = () => {
    return (
        <>
            <section
                aria-label="about-me"
                className="py-20 md:h-auto md:py-36 scroll-m-20 w-full mx-auto lg:max-w-screen-xl md:max-w-2xl px-4"
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
                                Available to work!
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-col max-w-xl h-full gap-2 justify-between items-center text-center md:col-span-2 md:items-start">
                        <h1 className="text-pretty md:text-left">
                            Hey, I'm Kevin Sierra
                        </h1>
                        <p className="text-balance md:text-left max-w-md">
                            <strong className="text-custom-accent">
                                {"Software Developer "}
                            </strong>
                            focused on building reliable, high-quality
                            applications with
                            <strong className="text-[#61DBFB]">
                                {" React.js"}
                            </strong>
                            . Skilled in Agile collaboration and effective in
                            international teams.
                            <br />
                            <br />
                            <small>
                                <i className="text-custom-text/60 ">
                                    Currently strengthening my stack with
                                    TypeScript, testing, and Azure to deliver
                                    modern, enterprise-grade solutions.
                                </i>
                            </small>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
