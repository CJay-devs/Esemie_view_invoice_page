/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            // fontFamily: {
            //     "custom-fellix": ["Fellix", "sans-serif"], // custom font
            // },
            colors: {
                "sidebar-bg": "#0D3C6D",
                "main-logo-bg": "#044E97",
                overdue: "#D92D20",
                "overdue-bg": "#FEF3F2",
                "text-body": "#344054",
                "action-button": "#1b6ab5",
            },
            height: {
                "sidebar-height": "1024px",
            },
            spacing: {
                "sidebar-size": "100px",
                "main-body-ml": "132px",
            },
        },
    },
    plugins: [],
};
