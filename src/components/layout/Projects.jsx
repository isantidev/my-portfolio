import { CardProject } from "@ui/Card.jsx";

const stocksoft = {
    title: "Stocksoft",
    image: {
        src: "https://imgs.search.brave.com/SWzRUgE9xIahxmKEl5qsvFfZ3opwOiig6rjmhOsBd-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHV0b3JpYWxyZXB1/YmxpYy5jb20vc25p/cHBldHMvZGVzaWdu/cy90YWJsZS13aXRo/LWFkZC1hbmQtZGVs/ZXRlLXJvdy1mZWF0/dXJlLnBuZw",
        description: "Image CRUD proffesional project",
    },
    stack: ["php", "mysql", "javascript", "apache"],
    description: "CRUD proffesional project",
    status: "preview",
};

const Projects = () => {
    return (
        <>
            <section
                className="scroll-m-20 w-full mx-auto flex flex-col gap-4 lg:max-w-screen-xl px-4 pb-20
                md:max-w-2xl"
                id="Projects"
            >
                <div>
                    <CardProject {...stocksoft} />
                </div>
            </section>
        </>
    );
};

export default Projects;
