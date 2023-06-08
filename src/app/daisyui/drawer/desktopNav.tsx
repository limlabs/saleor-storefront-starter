"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Navlink {
  name: string;
  path: string;
}

interface DesktopNavProps {
  navLinks: Navlink[];
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ navLinks }) => {
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
    <div className="w-full navbar bg-almost-black">
      <a
        href="#main-content"
        onClick={() => setShowSkipLink(false)}
        className={`ml-14 btn-primary p-2 rounded-md absolute transition duration-150 ease-out hover:ease-in ${
          showSkipLink ? "opacity-100" : "opacity-0"
        }`}
      >
        Skip to Main Content
      </a>
      <div className="flex-1 px-2 mx-2">
        <Link
          href="/en-us"
          className="cursor-pointer hover:scale-110 ease-in-out duration-200"
        >
          <Image
            src={"/img/logo-white-small.png"}
            alt="logomark"
            width={120}
            height={20}
            className="mr-4"
          />
        </Link>
      </div>
      <div className="flex-none -lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-none hidden -lg:block space-x-3">
        <ul className="menu menu-horizontal space-x-3 z-50 pr-2">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
