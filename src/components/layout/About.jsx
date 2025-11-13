import { IoBook } from "react-icons/io5";
import bigImg from "@images/isantidev-vert.webp";
import { useLanguage } from "@context/LanguageContext";

const About = () => {
    const { t } = useLanguage();

    return (
        <section
            id="About"
            className="scroll-m-20 grid grid-flow-col md:grid-cols-2 grid-rows-[auto_repeat(2,1fr)] md:grid-rows-[auto_1fr] items-center gap-4 lg:gap-8"
        >
            <header className="inline-flex gap-2 items-center col-start-1 col-end-3">
                <span className="w-8 h-full p-1 *:w-full flex justify-center">
                    <IoBook className="my-auto size-full" />
                </span>
                <h2>{t("about.title")}</h2>
            </header>
            <article className="max-w-2xl w-full mx-auto py-14 relative">
                <div className="relative w-full h-[400px] md:h-[450px]">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/5 h-full *:ring-8 *:ring-custom-text/80">
                        <img
                            src={bigImg}
                            alt=""
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                            loading="lazy"
                        />
                    </div>

                    <div className="absolute -bottom-12 left-0 grid grid-cols-2 gap-20 px-[10%] *:ring-8 *:ring-custom-text z-20">
                        <img
                            src={bigImg}
                            alt=""
                            className="aspect-square h-full w-full object-cover rounded-lg -rotate-12"
                            loading="lazy"
                        />
                        <img
                            src={bigImg}
                            alt=""
                            className="aspect-square h-full w-full object-cover rounded-lg shadow-xl rotate-12"
                            loading="lazy"
                        />
                    </div>
                </div>
            </article>
            <article className="flex flex-col gap-8 text-lg *:text-balance [&_strong]:text-custom-accent/80">
                <p>
                    {t("about.content.firstParagraph.first") + " "}
                    <strong>
                        {t("about.content.firstParagraph.firstHightlight")}
                    </strong>{" "}
                    {t("about.content.firstParagraph.second") + " "}
                    <strong>
                        {t("about.content.firstParagraph.secondHighlight")}
                    </strong>
                    {", " + t("about.content.firstParagraph.third")}
                </p>
                <p>
                    {t("about.content.secondParagraph.first") + " "}
                    <strong>
                        {t("about.content.secondParagraph.firstHightlight")}
                    </strong>
                    {". " + t("about.content.secondParagraph.second")}
                </p>
                <p>
                    {t("about.content.thirdParagraph.first") + " "}
                    <strong>
                        {t("about.content.thirdParagraph.firstHightlight")}
                    </strong>
                    {", " + t("about.content.thirdParagraph.second")}
                </p>
            </article>
        </section>
    );
};

export default About;
