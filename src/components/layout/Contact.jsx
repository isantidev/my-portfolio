import { AsideInfo } from "@ui/AsideInfo";
import { useState } from "react";
import { IoCall } from "react-icons/io5";

const FloatingInput = ({ label, type = "text" }) => {
    const inputId = `input-${type}-${label}`;
    const inputName = `input-${label}`;

    const [isFocused, setIsFocused] = useState(false);
    const [content, setContent] = useState("");

    const isActive = isFocused || content.length > 0;

    return (
        <div className="relative w-full h-20">
            <input
                type={type}
                name={inputName}
                id={inputId}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full h-full px-4 rounded-md border-b-2 border-custom-text/20 text-custom-text"
                required
            />
            <label
                htmlFor={inputId}
                className={`absolute rounded-md font-medium pointer-events-none transition-all duration-300 ease-out ${
                    !isActive
                        ? "top-1/4 left-0 px-4 py-2 text-xl text-custom-accent/50"
                        : "-top-4 left-4 leading-normal py-1 px-2 text-custom-accent/80 bg-custom-secondary text-base"
                }`}
            >
                {label}
            </label>
        </div>
    );
};

const FloatingTextarea = ({ label, maxRows = 8 }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [content, setContent] = useState("");

    const isActive = isFocused || content.length > 0;

    const maxHeight = `${maxRows * 1.5}rem`;

    return (
        <div className="relative w-full">
            <textarea
                name="input-message"
                id="input-textarea-message"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                rows={4}
                style={{ maxHeight }}
                className="w-full px-4 py-3 border-2 border-custom-text/20 rounded-md text-custom-text focus:border-custom-text focus:outline-none transition-colors duration-200"
                required
            />
            <label
                htmlFor="input-textarea-message"
                className={`
                    absolute left-4 bg-custom-secondary px-2
                    pointer-events-none
                    font-medium 
                    transition-all duration-300 ease-out
                    ${
                        isActive
                            ? "top-0 -translate-y-1/2 text-base text-custom-accent/80"
                            : "top-6 text-xl text-custom-accent/50"
                    }
                `}
            >
                {label}
            </label>
        </div>
    );
};

const Contact = () => {
    return (
        <section
            id="Contact"
            className="grid grid-row-[auto_1fr] grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-8"
        >
            <header className="inline-flex gap-2 align-middle row-start-1 lg:col-span-2">
                <span className="w-8 h-full p-1 *:w-full flex justify-center">
                    <IoCall className="my-auto size-full" />
                </span>
                <h2>Contact</h2>
            </header>
            <form
                action=""
                method="post"
                name="contact-form"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="flex flex-col gap-8 rounded-md row-start-3 lg:row-start-2 col-start-1 p-4  bg-custom-secondary text-custom-accent/60"
            >
                <FloatingInput label="Name" />

                <FloatingInput label="Email" type="email" />
                <FloatingTextarea label="I'll be happy to get your message" />
                <button
                    type="submit"
                    className="mx-auto px-4 py-2 text-lg md:px-6 md:py-3 rounded-lg bg-custom-primary/60 text-custom-text opacity-90 hover:scale-125 focus:opacity-100 focus:scale-90"
                >
                    Let's get in contact
                </button>
            </form>
            <AsideInfo />
        </section>
    );
};

export default Contact;
