import profileImg from "@images/mine-AI-removebg.webp";
import Stack from "@layout/Stack.jsx";
import "@styles/keyframes.css";
import { useLanguage } from "@context/LanguageContext";

const Hero = () => {
    const { t } = useLanguage();

    return (
        <>
            <section
                className="flex flex-col gap-4 lg:gap-8 pt-20 md:h-auto md:pt-24 lg:pt-36 md:pb-20 scroll-m-20 w-full px-4"
                id="Hero"
            >
                <div className="grid grid-cols-1 lg:grid-flow-col items-center justify-between gap-12">
                    <article
                        className="flex flex-col w-full justify-between items-center
                        lg:items-start order-2 md:order-1"
                    >
                        <h1 className="text-pretty md:text-left">
                            {t("hero.title")}
                        </h1>
                        <br />
                        <p className="text-balance w-full text-xl md:text-left max-w-lg">
                            <strong className="text-custom-accent/80">
                                {t("hero.content.career") + " "}
                            </strong>
                            {t("hero.content.text.first") + " "}
                            <strong className="text-[#239abb] dark:text-[#60dafb]">
                                {t("hero.content.stack.react")}
                            </strong>
                            ,
                            <strong className="text-[#f0db4f]">
                                {" " + t("hero.content.stack.javascript")}
                            </strong>
                            {" " + t("hero.content.and")}
                            <strong className="text-[#3178c6]">
                                {" " + t("hero.content.stack.typescript")}.
                            </strong>
                            {" " + t("hero.content.text.second")}
                            <br />
                            <br />
                            <small>
                                <i className="text-custom-text/60 ">
                                    {t("hero.content.learning")}
                                </i>
                            </small>
                        </p>
                    </article>

                    <div className="relative row-start-1 lg:row-auto flex flex-col w-full mx-auto h-full gap-8 items-center order-1">
                        <span
                            area-label="profile picture"
                            className="max-h-96 h-full aspect-auto mask-alpha mask-b-from-custom-bg mask-b-from-30 mask-r-from-white mask-r-from-60 mask-r-to-transparent  overflow-hidden rounded-lg  shadow-custom-accent/40 shadow-[0px_0px_15px_0px] "
                        >
                            <img
                                className="h-full object-cover"
                                src={profileImg}
                                alt="Kevin Santiago Sierra Rodriguez's picture"
                            />
                        </span>
                        <div className="absolute bottom-0 -rotate-6">
                            <a
                                href="https://www.linkedin.com/in/isantidev/"
                                className="relative px-10 py-2 sm:px-20 text-center text-balance bg-custom-secondary max-w-fit w-fit hover:animate-pulse opacity-90 transition-all block"
                                style={{
                                    clipPath:
                                        "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="absolute -top-[3px] right-[1px] size-4 bg-custom-primary animate-ping rounded-full opacity-80"></span>
                                <span className="absolute -top-[2px] right-[1px] size-3 rounded-full bg-custom-primary"></span>
                                <span className="text-custom-accent text-base md:text-lg">
                                    {t("hero.callToAction")}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <Stack />
            </section>
        </>
    );
};

export default Hero;
