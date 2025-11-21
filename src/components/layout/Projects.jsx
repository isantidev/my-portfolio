import { CardProject } from "@ui/Card.jsx";
import { IoBook } from "react-icons/io5";
import stocksoft from "@projects/stocksoft";
import portfolio from "@projects/portfolio";
import { useLanguage } from "@context/LanguageContext";

const Projects = () => {
    const { t } = useLanguage();

    return (
        <>
            <section
                className="scroll-m-20 w-full flex flex-col gap-4 "
                id="Projects"
            >
                <header className="inline-flex gap-2 align-middle">
                    <span className="w-8 h-full p-1 *:w-full flex justify-center">
                        <IoBook className="my-auto size-full" />
                    </span>
                    <h2>{t("projects.title")}</h2>
                </header>

                <ul className="grid grid-cols-1 grid-flow-row md:grid-cols-2 gap-4">
                    <CardProject {...portfolio} />
                    <CardProject {...stocksoft} />
                </ul>
            </section>
        </>
    );
};

export default Projects;
