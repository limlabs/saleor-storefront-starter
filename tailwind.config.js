const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "-sm": "375px",
      "-md": "768px",
      "-lg": "1024px",
    },
    extend: {
      colors: {
        "light-green": "rgb(157, 255, 212)",
        "hot-pink": "rgb(255, 21, 236)",
        "light-blue-main": "rgb(5, 249, 249)",
        "light-pink": "rgb(255, 191, 244)",
        "light-gray": "rgb(216, 218, 245)",
        "forest-green": "rgb(0, 75, 80)",
        "almost-black": "rgb(0, 0, 19)",
        "dark-purp": "rgb(58, 1, 95)",
        "dark-blue": "rgb(19, 27, 108)",
        "blue-main": "rgb(68, 63, 228)",
      },
      boxShadow: {
        "header-shadow": "0px 3px 11px 1px rgba(0,0,0,0.89)",
        "inset-shadow": " inset 2px 2px 17px 0px rgba(0,0,0,0.5)",
        "vertical-sm": " 0px 2px 9px 0px rgba(255,191,244,0.3)",
        "shadow-sm": "  3px 5px 4px 0px rgba(0,0,0,0.3)",
        "shadow-hero": "3px -2px 12px 0px rgba(0,0,0,0.75)",
      },
      gridTemplateColumns: {
        "header-grid": "1fr 6fr 1fr",
        "landing-grid": "2fr 1fr ",
        "about-grid-mobile": "2fr 3fr",
      },
      height: {
        "header-height": "7vh",
        "main-height": "93vh",
        "md-main-height": "95vh",
      },
      spacing: {
        "header-margin": "7vh",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        nunito: ["var(--font-nunito)"],
        press_start_2p: ["var(--font-press_start_2p)"],
        roboto_mono: ["var(--font-roboto_mono)"],
        prompt: ["var(--font-prompt)"],
        goldman: ["var(--font-goldman)"],
        futura: ["var(--font-futura)"],
      },
      blur: {
        xsmall: "2px",
      },
    },
  },
  plugins: [require("daisyui")],

  //daisyUI config
  daisyui: {
    themes: [
      {
        liminalTheme: {
          primary: "rgb(63, 63, 236)",
          secondary: "rgb(255, 21, 236)",
          accent: "rgb(58, 1, 95)",
          neutral: "rgb(0, 0, 19)",
          "base-100": "rgb(42, 48, 60)",
        },
      },
      {
        liminalThemeLight: {
          primary: "rgb(5, 249, 249)",
          secondary: "rgb(81, 241, 113)",
          accent: "rgb(255, 191, 244)",
          neutral: "rgb(255, 245, 230)",
          "base-100": "rgb(42, 48, 60)",
        },
      },
      "dark",
      "light",
      "synthwave",
    ],
  },
};
