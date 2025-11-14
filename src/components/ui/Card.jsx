import { useState } from "react";
import Pill from "@ui/Pill.jsx";
import { useLanguage } from "@context/LanguageContext";

export const CardJob = ({ title, enterprise, time, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { t } = useLanguage();

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
                className="grid gap-4 p-2 rounded-sm hover:bg-custom-secondary focus:bg-custom-secondary transition ease-in
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
                <div className="text-lg">
                    <p>{descriptionShown}</p>

                    <div
                        className={`grid transition-all duration-500 ease-in-out ${
                            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                    >
                        <span className="sr-only">Show more info</span>
                        <div className="overflow-hidden mt-2">
                            <p>{descriptionHidden}</p>
                        </div>
                    </div>

                    <button
                        className="block text-sm md:text-base font-medium text-custom-accent/80 mt-2"
                        onClick={showMoreInfo}
                    >
                        {isExpanded
                            ? `< ${t("components.reading.less")}`
                            : `${t("components.reading.more")} >`}
                    </button>
                </div>
            </article>
        </>
    );
};

export const CardProject = (staticContent) => {
    const githubIcon = new URL(
        `/src/assets/icons/github_dark.svg`,
        import.meta.url
    );

    const { t } = useLanguage();
    const project = staticContent.title;

    return (
        <li className="w-full py-6 px-8 rounded-sm shadow-custom-primary/20 shadow-[0px_0px_15px_0px] flex flex-col gap-2">
            <figure className="shrink max-h-72 mx-auto rounded-sm flex flex-col justify-between after:h-1 after:bg-custom-text/40 after:w-full">
                <img
                    src={staticContent?.image?.src}
                    alt={t(`projects.content.${project}.image.caption`)}
                    loading="lazy"
                    className="p-2 aspect-4/3 rounded-t-sm object-contain overflow-hidden bg-custom-secondary/40"
                />
                <span
                    aria-label="imageCaption"
                    className="block text-custom-text/60 font-light text-sm text-center py-3 px-auto"
                >
                    {t(`projects.content.${project}.image.caption`)}
                </span>
            </figure>
            <div className="w-full h-fit flex flex-col my-4 gap-2">
                <ul className="flex flex-wrap gap-2 [&_li]:text-md">
                    {staticContent.stack.map((item) => {
                        return <Pill key={item} text={item} />;
                    })}
                </ul>
            </div>
            <h3 className="text-custom-text capitalize">{project}</h3>
            <p className="leading-6 font-light text-lg text-pretty">
                {t(`projects.content.${project}.description`)}
            </p>

            <div className="@container mt-auto">
                <div className="flex justify-between max-h-10 mt-4 gap-2">
                    <a
                        href={staticContent.webLink || null}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                            staticContent?.status === "code" ||
                            !staticContent?.status
                                ? "hidden"
                                : "block"
                        } p-2 size-full bg-custom-primary/40 rounded-sm capitalize text-center`}
                    >
                        <span>
                            {staticContent.status === "deploy"
                                ? t("components.buttonState.deploy")
                                : t("components.buttonState.code")}
                        </span>
                    </a>
                    <a
                        href={
                            staticContent.codeSource ||
                            "https://www.github.com/isantidev"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 w-12 bg-custom-text/90 dark:bg-custom-text/10 text-custom-bg dark:text-custom-text rounded-sm capitalize [&_img]:size-full inline-flex gap-4 items-center justify-center cursor-pointer @xs:w-full @xs:[&_img]:size-4"
                    >
                        <img src={githubIcon} alt="github icon" />
                        <span className="sr-only @xs:not-sr-only">
                            {t("components.buttonState.code")}
                        </span>
                    </a>
                </div>
            </div>
        </li>
    );
};
