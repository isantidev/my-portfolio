import { useState } from "react";

const FloatingTextarea = ({ label, name, value, onChange, maxRows = 8 }) => {
    const [isFocused, setIsFocused] = useState(false);
    const isActive = isFocused || value.length > 0;
    const minHeight = `${maxRows / 1.5}rem`;
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
                rows={6}
                style={{ maxHeight, minHeight }}
                className="w-full px-4 py-3 border-2 border-custom-text/20 bg-custom-secondary/40 rounded-md text-custom-text focus:border-custom-text focus:outline-none transition-colors duration-200"
                required
            />
            <label
                htmlFor={`textarea-${name}`}
                className={`
                    absolute left-4 px-2
                    font-medium 
                    pointer-events-none
                    transition-all duration-300 ease-out
                    ${
                        isActive
                            ? "top-0 -translate-y-1/2 text-base bg-custom-secondary text-custom-text"
                            : "top-6 text-xl text-custom-text/80"
                    }
                `}
            >
                {label}
            </label>
        </div>
    );
};

export default FloatingTextarea;
