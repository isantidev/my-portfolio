import { CardProject } from "/src/components/ui/Card.jsx";

const Projects = () => {
    return (
        <>
            <section
                className="scroll-m-20 w-full mx-auto flex flex-col gap-4 lg:max-w-screen-xl px-4 pb-20
                md:max-w-2xl"
                id="Projects"
            >
                <div>
                    <CardProject />
                </div>
            </section>
        </>
    );
};

export default Projects;
