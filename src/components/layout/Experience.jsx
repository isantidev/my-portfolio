const Experience = () => {
    return (
        <>
            <section
                className="scroll-m-20 w-full mx-auto flex flex-col gap-2 lg:max-w-screen-xl px-4 pb-20
                md:max-w-2xl"
                id="Experience"
            >
                <h2>Experience</h2>

                <article
                    tabIndex={0}
                    className="grid gap-4 p-2 rounded-sm hover:bg-custom-secondary focus:bg-custom-secondary transition ease-in-out
                    md:p-4 lg:py-8 lg:px-14 md:grid-cols-2"
                >
                    <div className="relative flex flex-col">
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
                    <ul
                        className="*:text-lg list-disc pl-6
                        md:pl-8"
                    >
                        <li></li>
                        <li>
                            Assisted in troubleshooting hardware and software
                            issues
                        </li>
                        <li>Provided technical support to end-users</li>
                        <li>Participated in IT projects and initiatives</li>
                    </ul>
                </article>
            </section>
        </>
    );
};

export default Experience;
