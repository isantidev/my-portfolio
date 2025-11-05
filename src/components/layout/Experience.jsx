import { IoBriefcaseSharp } from "react-icons/io5";
import { CardJob } from "@ui/Card.jsx";

const Experience = () => {
    return (
        <>
            <section
                className="scroll-m-20 w-full flex flex-col gap-4"
                id="Experience"
            >
                <header className="inline-flex gap-2 align-middle">
                    <span className="w-8 h-full p-1 *:w-full flex justify-center">
                        <IoBriefcaseSharp className="my-auto size-full" />
                    </span>
                    <h2>Experience</h2>
                </header>

                <CardJob
                    title={"Desktop Support IT"}
                    enterprise={"TP S.A.S."}
                    time={"Feb 2025 - Aug 2025"}
                    description={`Developed and optimized a custom Linux bootable system, achieving a 40% reduction in ISO size (2.7 GB to 1.6 GB) and 37% faster boot times through terminal-based configuration. Performed system hardening, ensured cross-platform compatibility with Ventoy and Rufus, and created comprehensive technical documentation. Delivered technical support and troubleshooting while contributing to IT projects and system improvements.`}
                />
            </section>
        </>
    );
};

export default Experience;
