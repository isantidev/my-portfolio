import { useState } from "react";
import Pill from "@ui/Pill.jsx";

export const CardJob = ({ title, enterprise, time, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const showMoreInfo = () => {
        setIsExpanded(!isExpanded);
    };

    const findDot = description?.indexOf(". ") + 1;

    let descriptionShown = description;
    let descriptionHidden;

    if (findDot) {
        descriptionShown = description.slice(0, findDot);
        descriptionHidden = description.slice(findDot + 1);
    }

    return (
        <>
            <article
                tabIndex={0}
                className="grid gap-4 p-2 rounded-sm hover:bg-custom-secondary focus:bg-custom-secondary transition ease-in-out
                    md:p-4 lg:py-8 lg:px-14 md:grid-cols-2"
            >
                <div className="relative flex flex-col gap-1">
                    <h3 className="text-custom-primary">{title}</h3>

                    <span>
                        <strong>{enterprise}</strong>
                    </span>
                    <span className="text-md font-light capitalize">
                        {time}
                    </span>
                </div>
                <p className="text-lg">
                    {descriptionShown}
                    <span className="sr-only">Show more info</span>
                    <span className={isExpanded === true ? "block" : "hidden"}>
                        {descriptionHidden}
                    </span>
                    <button
                        className="block font-light text-custom-primary/80 mt-1"
                        onClick={showMoreInfo}
                    >
                        {isExpanded === true ? "< Read less" : "Read more >"}
                    </button>
                </p>
            </article>
        </>
    );
};

export const CardProject = (project) => {
    return (
        <>
            <article className="w-full py-6 px-8 rounded-sm shadow-custom-primary/20 shadow-[0px_0px_15px_0px] flex flex-col gap-2.5">
                <figure className="w-11/12 max-h-72 mx-auto rounded-sm flex flex-col justify-between ">
                    <img
                        src={project.image.src}
                        alt={project.image.caption}
                        loading="lazy"
                        className="p-2 aspect-4/3 rounded-t-sm object-contain overflow-hidden bg-custom-secondary/40"
                    />
                    <span
                        aria-label="imageCaption"
                        className="block text-custom-text/60 font-light text-sm text-center py-3 px-auto"
                    >
                        {project.image.caption}
                    </span>
                </figure>
                <h3 className="text-custom-primary leading-5">
                    {project.title}
                </h3>
                <p className="leading-6 font-light text-lg text-pretty">
                    {project.description}
                </p>
                <div className="w-full h-fit flex flex-col gap-2">
                    <h5 className="text-custom-text/90">Technology Stack</h5>
                    <ul className="flex flex-wrap gap-2 [&_li]:text-md">
                        {project.stack.map((item) => {
                            return <Pill key={item} text={item} />;
                        })}
                    </ul>
                </div>
                <div className="@container">
                    <div className="flex justify-between max-h-10 mt-4 gap-2">
                        <button className="p-2 size-full bg-custom-primary/40 rounded-sm capitalize">
                            {project.status === "Live"
                                ? "View project"
                                : "Preview"}
                        </button>
                        <a
                            href={
                                project.source ||
                                "https://www.github.com/isantidev"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 w-12 bg-custom-text/90 dark:bg-custom-text/10 text-custom-bg dark:text-custom-text rounded-sm capitalize [&_img]:size-full inline-flex gap-4 items-center justify-center cursor-pointer @xs:w-full @xs:[&_img]:size-4"
                        >
                            <img
                                src="/src/assets/icons/github_dark.svg"
                                alt="github icons"
                            />
                            <span className="sr-only @xs:not-sr-only">
                                View code
                            </span>
                        </a>
                    </div>
                </div>
            </article>
        </>
    );
};
