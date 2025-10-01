const Experience = () => {
    return (
        <>
            <section
                className="scroll-m-20 w-full mx-auto md:max-w-2xl lg:max-w-screen-xl px-4"
                id="Experience"
            >
                <h2>Experience</h2>
                <div className="w-full flex flex-col gap-4">
                    <div className="relative">
                        <h4>Desktop Support IT</h4>

                        <div className="flex gap-2 ">
                            <span className="text-sm font-light capitalize">
                                apprenticeship
                            </span>
                            <span className="text-sm font-light capitalize">
                                Feb 2025 - Aug 2025
                            </span>
                        </div>
                        <span>TP S.A.S.</span>
                    </div>
                    <ul>
                        <li>
                            Assisted in troubleshooting hardware and software
                            issues
                        </li>
                        <li>Provided technical support to end-users</li>
                        <li>Participated in IT projects and initiatives</li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Experience;
