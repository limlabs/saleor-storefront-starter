"use client";
import React, {
  useState,
  PropsWithChildren,
  ReactNode,
  useEffect,
} from "react";
import clsx from "clsx";
import Logo from "../../../../public/logo-white.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LogoMark from "../../../../public/slide-logo.png";

import Image from "next/image";

interface DrawerProps {
  children: ReactNode;
  isOpen?: boolean;
  position?: "left" | "right";
  onClose?: () => void;
}

const Drawer: React.FC<PropsWithChildren<DrawerProps>> = ({
  children,
  isOpen = false,
  position = "right",
  onClose,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(isOpen);
  const [currentPath, setCurrentPath] = useState("");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
    if (onClose) {
      onClose();
    }
  };

  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const isActive = (href: string) => {
    return currentPath === href;
  };

  const drawerClass = clsx("fixed z-20 w-64 h-full p-4 bg-white shadow-xl", {
    "translate-x-0": drawerOpen,
    "-translate-x-64": !drawerOpen && position === "left",
    "translate-x-64": !drawerOpen && position === "right",
  });

  return (
    <div className="drawer drawer-end  h-screen">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  w-full overflow-x-hidden">
        <div className="z-20 sticky navbar bg-almost-black top-0 w-full pl-4">
          <div className="flex-1 px-2 mx-2">
            <Image src={LogoMark} alt="logomark" height={20} className="mr-4" />
            <Image src={Logo} alt="logo" height={20} />
          </div>
          <div className="flex-none pl-4">
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
        </div>
        <main className="h-screen w-screen">{children}</main>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-light-gray text-almost-black">
          {[
            { name: "Home", path: "/en-us" },
            { name: "Shop", path: "/en-us/c/all" },
          ].map((item) => (
            <li
              key={item.name}
              className={isActive(item.path) ? "btn-primary" : ""}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
