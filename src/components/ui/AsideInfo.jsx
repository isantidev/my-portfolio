import { useState } from "react";
import {
    IoCopyOutline,
    IoMailOpenOutline,
    IoLogoLinkedin,
    IoLogoGithub,
} from "react-icons/io5";

const socialMedia = [
    {
        icon: IoMailOpenOutline,
        name: "Email",
        content: "santis.sierra6@gmail.com",
        copy: true,
        social_url: null,
    },
    {
        icon: IoLogoLinkedin,
        name: "LinkedIn",
        content: "linkedin.com/in/isantidev",
        copy: false,
        social_url: "https://www.linkedin.com/in/isantidev",
    },
    {
        icon: IoLogoGithub,
        name: "Github",
        content: "github.com/isantidev",
        copy: false,
        social_url: "https://github.com/isantidev",
    },
];

const Contact = ({ social }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleClick = async () => {
        if (social.copy) {
            try {
                await navigator.clipboard.writeText(social.content);
                setIsCopied(true);

                setTimeout(() => {
                    setIsCopied(false);
                }, 1000);
            } catch (err) {
                console.error("Failed to copy:", err);
            }
        } else if (social.social_url) {
            window.open(social.social_url, "_blank", "noopener");
        }
    };

    const IconComponent = isCopied && social.copy ? IoCopyOutline : social.icon;

    return (
        <li
            onClick={handleClick}
            data-url={social?.social_url}
            className={`grid lg:grid-cols-[auto_1fr] lg:grid-rows-2 gap-x-12 gap-y-2 lg:py-4 lg:px-8 rounded-md justify-items-center items-center ring-0 ring-custom-accent/40 lg:bg-custom-secondary/40 backdrop-blur-2xl transition-all duration-200 hover:ring-2 
                ${social?.social_url ? "cursor-pointer" : "cursor-copy"}`}
        >
            <div className="p-2 lg:p-4 flex justify-center items-center aspect-square rounded-full bg-custom-accent/20 lg:col-span-1 lg:row-span-2">
                <IconComponent className="size-full min-w-8 min-h-8 max-w-12 max-h-12" />
            </div>
            <p className="hidden sm:block text-lg text-custom-accent/60 lg:text-2xl font-semibold pointer-events-none">
                {social.name}
            </p>
            <small className="hidden lg:block text-[16px] font-medium pointer-events-none">
                {isCopied ? "Copied to clipboard!" : social.content}
            </small>
        </li>
    );
};

const AsideInfo = () => {
    return (
        <aside className="px-4 w-full row-start-2 lg:col-start-2">
            <ul
                onClick={(e) => {
                    const item = e.target.closest("li");
                    const url = item?.dataset.url;
                    if (url) window.open(url, "_blank");
                }}
                className="grid grid-cols-3 lg:grid-rows-3 lg:grid-cols-1 gap-8 w-full justify-center lg:justify-left shrink-0"
            >
                {socialMedia.map((media) => {
                    return <Contact key={media.social_url} social={media} />;
                })}
            </ul>
        </aside>
    );
};

export default AsideInfo;
