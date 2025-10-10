import { useState } from "react";

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
            <article className="w-full py-6 px-8 rounded-sm shadow-custom-primary/20 shadow-[0px_0px_15px_0px] flex flex-col gap-2">
                <figure className="w-full rounded-sm flex flex-col justify-between">
                    <img
                        src={project.image.src}
                        alt={project.image.description}
                        loading="lazy"
                        className="p-2 aspect-[4/3] max-h-60 rounded-t-sm object-cover overflow-hidden bg-custom-secondary/40"
                    />
                    <span
                        aria-label="imageCaption"
                        className="block text-custom-text/60 font-light text-sm text-center py-3 px-auto"
                    >
                        {project.image.description}
                    </span>
                </figure>
                <h3 className="text-custom-primary leading-5">
                    {project.title}
                </h3>
                <p className="leading-6 font-light text-md">
                    {project.description}
                </p>
                <div className="w-full h-fit">
                    <h5 className="text-custom-text/90">Technology Stack</h5>
                    <ul className="flex flex-wrap gap-4 gap-y-1">
                        {project.stack.map((item) => {
                            return <li key={item}>{item}</li>;
                        })}
                    </ul>
                </div>
                <button className="p-2 max-w-2/3 mt-4 bg-custom-primary/40 rounded-sm capitalize">
                    {project.status === "Live" ? "View project" : "Preview"}
                </button>
            </article>
        </>
    );
};
