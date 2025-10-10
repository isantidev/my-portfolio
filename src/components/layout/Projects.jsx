import { CardProject } from "@ui/Card.jsx";

const stocksoft = {
    title: "Stocksoft",
    image: {
        src: "https://imgs.search.brave.com/SWzRUgE9xIahxmKEl5qsvFfZ3opwOiig6rjmhOsBd-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHV0b3JpYWxyZXB1/YmxpYy5jb20vc25p/cHBldHMvZGVzaWdu/cy90YWJsZS13aXRo/LWFkZC1hbmQtZGVs/ZXRlLXJvdy1mZWF0/dXJlLnBuZw",
        caption: "Stocksoft - Inventory Management System Preview",
    },
    stack: ["php", "mysql", "javascript", "apache"],
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil necessitatibus recusandae eligendi voluptatibus explicabo dolorum repudiandae quam, velit assumenda?",
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
                <header className="inline-flex gap-2 align-middle">
                    <span className="w-8 h-full p-1 *:w-full flex justify-center">
                        <IoBriefcaseSharp className="my-auto size-full" />
                    </span>
                    <h2>Experience</h2>
                </header>
                <ul className="grid grid-cols-1 grid-flow-row md:grid-cols-2 [&>:first-child]:md:col-span-2 lg:grid-cols-3 [&>:first-child]:lg:col-span-1  gap-4">
                    <CardProject {...stocksoft} />
                </ul>
            </section>
        </>
    );
};

export default Projects;
