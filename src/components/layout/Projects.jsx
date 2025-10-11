import { CardProject } from "@ui/Card.jsx";
import { IoBook } from "react-icons/io5";

const stocksoft = {
    title: "Stocksoft",
    image: {
        src: "src/assets/images/project-stocksoft.webp",
        caption: "Stocksoft - Inventory Management System Preview",
    },
    stack: ["php", "javascript", "css", "mysql", "apache"],
    description:
        "Stocksoft is a web-based inventory management system built with a PHP backend, styled with CSS, and enhanced by JavaScript components. It helps businesses keep track of products, manage stock data, and streamline product organization with a structured, user-friendly interface.",
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
                        <IoBook className="my-auto size-full" />
                    </span>
                    <h2>Projects</h2>
                </header>

                <ul className="grid grid-cols-1 grid-flow-row md:grid-cols-2 [&>:first-child]:md:col-span-2 lg:grid-cols-3  gap-4">
                    <CardProject {...stocksoft} />
                </ul>
            </section>
        </>
    );
};

export default Projects;
