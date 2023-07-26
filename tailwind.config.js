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
        "light-gray": "rgb(240, 240, 240)",
        "forest-green": "rgb(0, 75, 80)",
        "almost-black": "rgb(0, 0, 19)",
        "normal-gray": "rgb(89, 89, 89",
        "shark-attack": "rgb(44, 53, 170",
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
      keyframes: {
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-down": "fade-down 0.25s ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],

  //daisyUI config
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
};
