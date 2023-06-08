"use client";

import { FC, useEffect, useState } from "react";

export const SkipToMainContentLink: FC = () => {
  const [showSkipLink, setShowSkipLink] = useState(false);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setShowSkipLink(true);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <a
      href="#main-content"
      onClick={() => setShowSkipLink(false)}
      className={`ml-14 btn-primary p-2 rounded-md absolute transition duration-150 ease-out hover:ease-in ${
        showSkipLink ? "opacity-100" : "opacity-0"
      }`}
    >
      Skip to Main Content
    </a>
  );
};
