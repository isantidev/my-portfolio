import profileImg from "@images/isantidev-vert.webp";

const Hero = () => {
    return (
        <>
            <section
                aria-label="about-me"
                className="max-w-screen-xl mx-auto my-4 h-[80dvh] px-2"
            >
                <div className="flex flex-col items-center justify-center gap-4">
                    <span className="size-40 overflow-hidden rounded-full shadow-custom-accent/40 shadow-[0px_0px_15px_0px] ">
                        <img
                            className="h-full w-full object-cover"
                            src={profileImg}
                            alt=""
                        />
                    </span>
                    <div className="flex flex-col gap-2 justify-around items-center text-center">
                        <a
                            href="#"
                            className="relative py-1 px-3 bg-transparent border border-custom-accent/60 rounded-[0.25rem] max-w-fit hover:animate-pulse transition-all"
                        >
                            <span class="absolute -top-1 -right-1 size-3 bg-custom-accent animate-ping rounded-full  opacity-60"></span>
                            <span class="absolute -top-1 -right-1 size-3 rounded-full bg-custom-accent"></span>
                            <span className="font-light text-custom-accent">
                                open to work
                            </span>
                        </a>
                        <h1 className="text-pretty text-">
                            Kevin Sierra Rodriguez
                        </h1>
                        <p className="text-balance">
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
