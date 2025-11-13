import { IoBriefcaseSharp } from "react-icons/io5";
import { CardJob } from "@ui/Card.jsx";
import { useLanguage } from "@context/LanguageContext";

const Experience = () => {
    const { t } = useLanguage();

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
                    <h2>{t("experience.title")}</h2>
                </header>

                <CardJob
                    title={t("experience.content.tp.title")}
                    enterprise={t("experience.content.tp.enterprise")}
                    time={t("experience.content.tp.time")}
                    description={t("experience.content.tp.description")}
                />
            </section>
        </>
    );
};

export default Experience;
