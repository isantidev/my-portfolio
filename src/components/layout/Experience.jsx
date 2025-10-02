import { useState } from "react";
import { IoBriefcaseSharp } from "react-icons/io5";

const Experience = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const showMoreInfo = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <section
                className="scroll-m-20 w-full mx-auto flex flex-col gap-4 lg:max-w-screen-xl px-4 pb-20
                md:max-w-2xl"
                id="Experience"
            >
                <header className="inline-flex gap-2 align-middle">
                    <span className="size-8 place-content-center p-1 *:mx-auto *:size-full">
                        <IoBriefcaseSharp />
                    </span>
                    <h2>Experience</h2>
                </header>

                <article
                    tabIndex={0}
                    className="grid gap-4 p-2 rounded-sm hover:bg-custom-secondary focus:bg-custom-secondary transition ease-in-out
                    md:p-4 lg:py-8 lg:px-14 md:grid-cols-2"
                >
                    <div className="relative flex flex-col gap-1">
                        <h4 className="text-custom-primary">
                            Desktop Support IT
                        </h4>

                        <span>
                            <strong>TP S.A.S.</strong>
                        </span>
                        <span className="text-md font-light capitalize">
                            Feb 2025 - Aug 2025
                        </span>
                    </div>
                    <p className="text-lg">
                        Developed and optimized a custom Linux bootable system,
                        achieving a 40% reduction in ISO size (2.7 GB to 1.6 GB)
                        and 37% faster boot times through terminal-based
                        configuration.{" "}
                        <span className="sr-only">Show more info</span>
                        <span
                            className={isExpanded === true ? "block" : "hidden"}
                        >
                            {" "}
                            Performed system hardening, ensured cross-platform
                            compatibility with Ventoy and Rufus, and created
                            comprehensive technical documentation. Delivered
                            technical support and troubleshooting while
                            contributing to IT projects and system improvements.
                        </span>
                        <button
                            className={
                                isExpanded === false
                                    ? "block font-light text-custom-primary/80 mt-1"
                                    : "block font-light text-custom-primary/80 mt-1"
                            }
                            onClick={showMoreInfo}
                        >
                            {isExpanded === true
                                ? "< Read less"
                                : "Read more >"}
                        </button>
                    </p>
                </article>
            </section>
        </>
    );
};

export default Experience;
