/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false,
    },
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/src/assets/images/backgrounds/otter-bg-teal.png')",
            },
            colors: {
                darkteal: '#99E7D7',
            },
            spacing: {
                'header-height': '8rem',
            },
        },
    },
    plugins: [],
};
