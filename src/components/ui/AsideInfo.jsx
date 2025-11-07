import { useState } from "react";
import {
    IoCopyOutline,
    IoMailOpenOutline,
    IoLogoLinkedin,
    IoCallOutline,
    IoLogoGithub,
} from "react-icons/io5";

// async function handleCopy(isCopy, text) {
//     console.log(isCopy, "handleCopy");
//     if (isCopy) return;

//     try {
//         await navigator.clipboard.writeText(text);
//         console.log("Copied!");
//     } catch (err) {
//         console.error("Failed to copy:", err);
//     }
// }

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
            window.open(social.social_url, "_blank");
        }
    };

    const IconComponent = isCopied && social.copy ? IoCopyOutline : social.icon;

    return (
        <li
            onClick={handleClick}
            data-url={social?.social_url}
            className={`grid grid-cols-[auto_1fr] grid-rows-2 gap-2 p-4 rounded-md justify-items-center items-center ring-0 ring-custom-accent/40 transition-all duration-200 hover:ring-2 
                ${social?.social_url ? "cursor-pointer" : "cursor-copy"}`}
        >
            <div className="size-full p-4 aspect-square rounded-full bg-custom-accent/20 overflow-hidden col-span-1 row-span-2">
                <IconComponent className="size-full" />
            </div>
            <p className="text-lg lg:text-2xl text-custom-text pointer-events-none">
                {social.name}
            </p>
            <small className="text-[16px] pointer-events-none">
                {isCopied ? "Copied to clipboard!" : social.content}
            </small>
        </li>
    );
};

export const AsideInfo = () => {
    return (
        <aside className="px-4">
            <ul
                onClick={(e) => {
                    const item = e.target.closest("li");
                    const url = item?.dataset.url;
                    if (url) window.open(url, "_blank");
                }}
                className="grid grid-rows-3 grid-cols-1 gap-8 w-full justify-left"
            >
                {socialMedia.map((media) => {
                    return <Contact key={media.social_url} social={media} />;
                })}
            </ul>
        </aside>
    );
};
