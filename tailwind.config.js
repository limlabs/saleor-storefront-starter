const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  //daisyUI config
  daisyui: {
    themes: [
      {
        liminalThemeBright: {
          primary: "rgb(255, 21, 236)",
          secondary: "rgb(5, 249, 249)",
          accent: "rgb(81, 241, 113)",
          neutral: "rgb(255, 245, 230)",
          "base-100": "rgb(0, 0, 19)",
        },
      },
      {
        liminalThemeNeutral: {
          primary: "rgb(255, 191, 244)",
          secondary: "rgb(194, 255, 253)",
          accent: "rgb(157, 255, 212)",
          neutral: "rgb(255, 245, 230)",
          "base-100": "rgb(0, 0, 19)",
        },
      },
      "dark",
      "light",
      "synthwave",
    ],
  },
};
