import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            "primary": "var(--primary)",
            "primary-light": "var(--primary-light)",
            "secondary": "var(--secondary)",
            "input-color":"var(--input-color)",
            "background-popup": "var(--background-popup)",
            "denied": "var(--denied)",
            "accept": "var(--accept)",
            "white": "var(--white",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
