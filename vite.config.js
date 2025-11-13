import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@styles": "/src/styles",
            "@images": "/src/assets/images",
            "@icons": "/src/assets/icons",
            "@layout": "/src/components/layout",
            "@ui": "/src/components/ui",
            "@context": "/src/context",
            "@components": "/src/components",
            "@locales": "/src/locales",
        },
    },
});
