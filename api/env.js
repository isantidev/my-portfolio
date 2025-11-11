export const getEnv = (key) => {
    if (typeof process !== "undefined" && process.env[key]) {
        return process.env[key];
    }

    if (typeof import.meta !== "undefined" && import.meta.env?.[key]) {
        return import.meta.env[key];
    }

    return undefined;
};
