import { useState } from "react";

export const FloatingInput = ({
    label,
    name,
    type = "text",
    value,
    onChange,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const isActive = isFocused || value.length > 0;

    const inputId = `input-${name}`;

    return (
        <div className="relative w-full h-20">
            <input
                type={type}
                name={name}
                id={inputId}
                value={value}
                onChange={onChange}
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
