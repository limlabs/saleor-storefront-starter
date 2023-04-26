"use client";
import React, { useState, PropsWithChildren } from "react";
import clsx from "clsx";
import hamburger from "../../../../public/hamburger.png";
import Logo from "../../../../public/logo-white.png";
import AboutHero from "@/app/[locale]/(components)/aboutHero";
import AboutMain from "@/app/[locale]/(components)/aboutMain";
import AboutTeam from "@/app/[locale]/(components)/aboutTeam";
import Image from "next/image";
import AboutBreak from "@/app/[locale]/(components)/aboutBreak";

interface DrawerProps {
  isOpen?: boolean;
  position?: "left" | "right";
  onClose?: () => void;
}

const Drawer: React.FC<PropsWithChildren<DrawerProps>> = ({
  children,
  isOpen = false,
  position = "left",
  onClose,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(isOpen);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
    if (onClose) {
      onClose();
    }
  };

  const drawerClass = clsx("fixed z-20 w-64 h-full p-4 bg-white shadow-xl", {
    "translate-x-0": drawerOpen,
    "-translate-x-64": !drawerOpen && position === "left",
    "translate-x-64": !drawerOpen && position === "right",
  });

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-almost-black">
          <div className="flex-none lg:hidden">
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
          <div className="flex-1 px-2 mx-2">
            <Image src={Logo} alt="logo" height={20} />
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Store</a>
              </li>
              <li>
                <a>Software</a>
              </li>
              <li>
                <a>Media</a>
              </li>
            </ul>
          </div>
        </div>
        <main>
          <section className="h-main-height">
            <AboutHero />
          </section>
          <section className="bg-gradient-to-b grid grid-rows-2 justify-items-center from-light-pink to-light-blue-main shadow-inset-shadow ">
            <div className="h-screen">
              <AboutMain />
            </div>
            <div className="h-screen">
              <AboutTeam />
            </div>
          </section>
        </main>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-light-gray text-almost-black">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Store</a>
          </li>
          <li>
            <a>Software</a>
          </li>
          <li>
            <a>Media</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
