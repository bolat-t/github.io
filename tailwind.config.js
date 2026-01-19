/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./docs/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                teal: {
                    400: '#2dd4bf',
                    500: '#14b8a6',
                },
                neutral: {
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    800: '#262626',
                    900: '#171717',
                    950: '#0a0a0a',
                }
            }
        },
    },
    plugins: [],
}
