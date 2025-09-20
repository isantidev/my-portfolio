import profileImg from "@images/isantidev-vert.webp";

const Hero = () => {
    return (
        <>
            <section
                aria-label="about-me"
                className="max-w-screen-xl mx-auto my-4"
            >
                <div className="flex flex-col items-center justify-center gap-2">
                    <span className="size-32 overflow-hidden rounded-full shadow-custom-text/60 shadow-[0px_0px_15px_0px] ">
                        <img
                            className="h-full w-full object-cover"
                            src={profileImg}
                            alt=""
                        />
                    </span>
                    <div className="flex flex-col justify-around items-center text-center">
                        <a
                            href="#"
                            className="py-0.5 px-2 bg-custom-accent rounded-[0.25rem] max-w-fit opacity-90 hover:opacity-100 hover:contrast-150 focus:contrast-150"
                        >
                            <span className="font-light text-custom-bg">
                                open to work
                            </span>
                        </a>
                        <h1 className="text-pretty">Kevin Sierra Rodriguez</h1>
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
