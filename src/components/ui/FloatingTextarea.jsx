import { useState } from "react";

export const FloatingTextarea = ({
    label,
    name,
    value,
    onChange,
    maxRows = 8,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const isActive = isFocused || value.length > 0;
    const maxHeight = `${maxRows * 1.5}rem`;

    return (
        <div className="relative w-full">
            <textarea
                name={name}
                id={`textarea-${name}`}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                rows={4}
                style={{ maxHeight }}
                className="w-full px-4 py-3 border-2 border-custom-text/20 rounded-md text-custom-text focus:border-custom-text focus:outline-none transition-colors duration-200"
                required
            />
            <label
                htmlFor={`textarea-${name}`}
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
