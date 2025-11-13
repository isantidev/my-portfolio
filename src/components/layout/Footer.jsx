import { useLanguage } from "@context/LanguageContext";
import {
    IoMailOpenOutline,
    IoLogoLinkedin,
    IoLogoGithub,
} from "react-icons/io5";

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="relative w-full min-h-64 mt-8 md:mt-16 flex flex-col items-center">
            <main className="mx-auto w-full flex flex-col max-w-[1440px] text-custom-text px-4 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 md:mb-8">
                    <div className="text-center">
                        <h3 className="font-bold text-xl text-custom-text/90 mb-4">
                            Kevin Santiago Sierra Rodriguez
                        </h3>
                        <p className="text-sm opacity-80 mb-4">
                            {t("footer.content.career")}
                        </p>
                        <p className="text-sm opacity-70">
                            📍 Bogotá, Cundinamarca, CO
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <h4 className="font-semibold text-lg text-custom-text/90 mb-4">
                            {t("footer.content.callToAction")}
                        </h4>
                        <div className="space-y-3 text-sm">
                            <a
                                href="mailto:tu.email@ejemplo.com"
                                className="inline-flex justify-center items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                            >
                                <IoMailOpenOutline className="size-fit" />
                                santis.sierra6@gmail.com
                            </a>
                        </div>

                        {/* Redes sociales */}
                        <div className="flex gap-3 mt-4">
                            <a
                                href="https://linkedin.com/in/isantidev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center border border-current rounded opacity-80 hover:opacity-100 hover:scale-110 transition-all"
                                aria-label="LinkedIn"
                            >
                                <span className="text-sm font-bold">
                                    <IoLogoLinkedin className="size-fit" />
                                </span>
                            </a>
                            <a
                                href="https://github.com/isantidev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center border border-current rounded opacity-80 hover:opacity-100 hover:scale-110 transition-all"
                                aria-label="GitHub"
                            >
                                <span className="text-sm font-bold">
                                    <IoLogoGithub className="size-fit" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-current opacity-20 my-6"></div>

                <div className="text-center text-sm pb-6">
                    <p className="opacity-70">
                        © 2025 Kevin Santiago Sierra Rodriguez.
                    </p>
                </div>
            </main>

            <div className="absolute w-full top-0 h-full bg-custom-secondary blur-3xl"></div>
        </footer>
    );
};

export default Footer;
