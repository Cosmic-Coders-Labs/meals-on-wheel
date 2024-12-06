import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                playfair: ["Playfair Display", ...defaultTheme.fontFamily.sans],
                noto: ["Noto Sans", ...defaultTheme.fontFamily.sans],
                inter: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    50: "#faf7fd",
                    100: "#f2edfa",
                    200: "#e8ddf7",
                    300: "#d6c3ef",
                    400: "#bc9ce4",
                    500: "#a275d7",
                    600: "#8751c4",
                    700: "#7644ac",
                    800: "#643c8d",
                    900: "#513172",
                    950: "#361952",
                },
                secondary: {
                    50: "#fcf4f6",
                    100: "#f9eaed",
                    200: "#f2d9de",
                    300: "#e8b9c2",
                    400: "#d88d9d",
                    500: "#c86b81",
                    600: "#b24c69",
                    700: "#953b57",
                    800: "#7d344d",
                    900: "#6c2f46",
                    950: "#3b1623",
                },
                "accent": {
                    50: "#fcf6f4",
                    100: "#f8ece8",
                    200: "#f3dcd5",
                    300: "#eac3b7",
                    400: "#dca08d",
                    500: "#d18d77",
                    600: "#b6664c",
                    700: "#99533c",
                    800: "#7f4735",
                    900: "#6b3f31",
                    950: "#391f16",
                },
            },
        },
    },
    plugins: [],
};
