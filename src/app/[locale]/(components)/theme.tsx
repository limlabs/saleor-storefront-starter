"use client";

import { PaintBrushIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const themes = [
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
];

export const ThemePicker = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdownToggled = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleThemeSelected = (theme: string) => {
    window.document.documentElement.dataset.theme = theme;
    setDropdownOpen(false);
  };

  const currentTheme = window.document.documentElement.dataset.theme;

  return (
    <div className="relative z-10">
      <PaintBrushIcon className="w-6 h-6 " onClick={handleDropdownToggled} />
      {dropdownOpen && (
        <ul className="menu bg-secondary w-56 absolute z-10 px-4 py-2 rounded-md drop-shadow-md mt-2">
          {themes.map((theme) => (
            <li
              key={theme}
              onClick={() => handleThemeSelected(theme)}
              className={`cursor-pointer text-lg ${
                currentTheme === theme
                  ? "text-accent-content font-medium"
                  : "text-primary-content"
              }`}
            >
              {theme}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
