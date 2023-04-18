/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "rgb(157, 255, 212)",
        "hot-pink": "rgb(255, 21, 236)",
        "light-blue-main": "rgb(5, 249, 249)",
      },
      boxShadow: {
        "vertical-sm": " 0px 3px 11px 0px rgba(255,191,244,0.4)",
      },
      gridTemplateColumns: {
        "header-grid": "1fr 5fr 1fr",
      },
    },
  },
  plugins: [require("daisyui")],
};
