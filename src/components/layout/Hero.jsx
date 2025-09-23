import profileImg from "@images/isantidev-vert.webp";
import "@styles/keyframes.css";

const Hero = () => {
    return (
        <>
            <section
                aria-label="about-me"
                className="inline-block max-w-screen-xl h-dvh mx-auto px-2 place-content-center"
            >
                <div className="flex flex-col px-2 items-center justify-between gap-4 md:grid md:grid-cols-3 md:place-items-center md:gap-8">
                    <div className="flex flex-col h-full items-center justify-around gap-4 md:gap-8">
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
                            <span class="absolute -top-1 -right-1 size-3 bg-custom-primary animate-ping rounded-full opacity-80"></span>
                            <span class="absolute -top-1 -right-1 size-3 rounded-full bg-custom-primary"></span>
                            <span className="text-custom-accent/80">
                                open to work!
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-col max-w-xl h-full gap-2 justify-between items-center text-center md:col-span-2 md:items-start">
                        <span className="font-medium text-2xl text-transparent mt-4 bg-clip-text bg-gradient-to-r from-custom-text via-custom-accent to-custom-text opacity-40 animate-gradient">
                            frontend developer
                        </span>
                        <h1 className="text-pretty">Kevin Sierra Rodriguez</h1>
                        <p className="text-balance md:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nemo distinctio reiciendis officiis rem
                            necessitatibus, alias et cupiditate, molestias
                            perspiciatis, optio aut facere dicta quae
                            voluptatibus quisquam enim sunt temporibus fuga.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
