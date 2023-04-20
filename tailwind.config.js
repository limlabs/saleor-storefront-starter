const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "rgb(157, 255, 212)",
        "hot-pink": "rgb(255, 21, 236)",
        "light-blue-main": "rgb(5, 249, 249)",
        "light-gray": "rgb(216, 218, 245)",
        "forest-green": "rgb(0, 75, 80)",
        "almost-black": "rgb(0, 0, 19)",
      },
      boxShadow: {
        "vertical-sm": " 0px 3px 11px 0px rgba(255,191,244,0.4)",
      },
      gridTemplateColumns: {
        "header-grid": "1fr 5fr 1fr",
        "landing-grid": "2fr 1fr ",
      },
      height: {
        "header-height": "7vh",
        "main-height": "93vh",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        nunito: ["var(--font-nunito)"],
        press_start_2p: ["var(--font-press_start_2p)"],
      },
    },
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
