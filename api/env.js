export const getEnv = (key) => {
    if (typeof process !== "undefined" && process.env[key]) {
        // Estamos en entorno Node / Serverless
        return process.env[key];
    }

    if (typeof import.meta !== "undefined" && import.meta.env?.[key]) {
        // Estamos en entorno Vite / Dev
        return import.meta.env[key];
    }

    return undefined;
};
