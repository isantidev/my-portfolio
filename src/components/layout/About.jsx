import { IoBook } from "react-icons/io5";

const About = () => {
    return (
        <section
            id="About"
            className="grid grid-flow-col md:grid-cols-2 grid-rows-[auto_repeat(2,1fr)] md:grid-rows-[auto_1fr] items-center gap-4 lg:gap-8"
        >
            <header className="inline-flex gap-2 items-center col-start-1 col-end-3">
                <span className="w-8 h-full p-1 *:w-full flex justify-center">
                    <IoBook className="my-auto size-full" />
                </span>
                <h2>About me</h2>
            </header>
            <article className="max-w-2xl w-full mx-auto py-14 relative">
                <div className="relative w-full h-[400px] md:h-[450px]">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/5 h-full *:ring-8 *:ring-custom-text/80">
                        <img
                            src="/src/assets/images/isantidev-vert.webp"
                            alt=""
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                    </div>

                    <div className="absolute -bottom-12 left-0 grid grid-cols-2 gap-20 px-[10%] *:ring-8 *:ring-custom-text z-20">
                        <img
                            src="/src/assets/images/isantidev-vert.webp"
                            alt=""
                            className="aspect-square h-full w-full object-cover rounded-lg -rotate-12"
                        />
                        <img
                            src="/src/assets/images/isantidev-vert.webp"
                            alt=""
                            className="aspect-square h-full w-full object-cover rounded-lg shadow-xl rotate-12"
                        />
                    </div>
                </div>
            </article>
            <article className="flex flex-col gap-8 text-lg *:text-balance [&_strong]:text-custom-accent/80">
                <p>
                    I'm Santiago! I'm a{" "}
                    <strong>19-year-old software developer</strong> from Funza,
                    Colombia. I recently{" "}
                    <strong>
                        completed my Associate Degree in Software Analysis and
                        Development
                    </strong>
                    , and I'm eager to apply my knowledge in real-world
                    projects.
                </p>
                <p>
                    Four years ago, I was{" "}
                    <strong>
                        selected by my local government for a bilingual
                        immersion program in recognition of my academic
                        excellence
                    </strong>
                    . That experience sparked my passion for languages and
                    opened my mind to international opportunities—now I{" "}
                    <strong>
                        work confidently in both Spanish and English
                    </strong>
                    .
                </p>

                <p>
                    Beyond coding, I'm passionate about languages and cycling. I
                    believe that <strong>learning never stops</strong>, and I'm
                    always looking for new challenges that push me to grow both
                    professionally and personally.
                </p>
            </article>
        </section>
    );
};

export default About;
