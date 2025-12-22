/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: '#2563EB', // Blue-600
                secondary: '#1E293B', // Slate-800
                accent: '#0F172A', // Slate-900
            }
        },
    },
    plugins: [],
}
