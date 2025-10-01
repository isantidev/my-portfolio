import profileImg from "@images/isantidev-vert.webp";
import "@styles/keyframes.css";

const Hero = () => {
    return (
        <>
            <section
                aria-label="about-me"
                className="py-20 md:h-auto md:py-36 scroll-m-20 w-full mx-auto md:max-w-2xl lg:max-w-screen-xl px-4"
                id="Hero"
            >
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <article
                        className="flex flex-col w-full justify-between items-center
                        md:items-start order-2 md:order-1"
                    >
                        <h1 className="text-pretty md:text-left">
                            Hey, I'm Kevin Sierra
                        </h1>
                        <br />
                        <p className="text-balance text-xl md:text-left max-w-lg">
                            <strong className="text-custom-accent">
                                {"Software Developer "}
                            </strong>
                            focused on building reliable, high-quality
                            applications with
                            <strong className="text-[#60dafb]">
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
                    </article>

                    <div className="flex flex-col h-fit gap-8 items-center md:mx-16 order-1">
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
                            className="relative py-1 px-3 text-center text-balance bg-custom-primary/10 rounded-sm max-w-fit w-fit hover:animate-pulse opacity-90 transition-all"
                        >
                            <span className="absolute -top-1 -right-1 size-3 bg-custom-primary animate-ping rounded-full opacity-80"></span>
                            <span className="absolute -top-1 -right-1 size-3 rounded-full bg-custom-primary"></span>
                            <span className="text-custom-accent text-lg">
                                Available to work!
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
