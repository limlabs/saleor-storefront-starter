"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Navlink {
  name: string;
  path: string;
}

interface SidebarContentProps {
  navLinks: Navlink[];
}

const SidebarContent: React.FC<SidebarContentProps> = ({ navLinks }) => {
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const isActive = (href: string) => {
    return currentPath === href;
  };

  return (
    <>
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-light-gray text-almost-black">
        {navLinks.map((item) => (
          <li
            key={item.name}
            className={isActive(item.path) ? "btn-primary rounded-md" : ""}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarContent;
