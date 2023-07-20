"use client";

import { useDrawer } from "@/app/daisyui/drawer";
import Link from "next/link";
import { ReactNode } from "react";

export const NavLinkMobile = ({
  href,
  children,
}: {
  children: ReactNode;
  href: string;
}) => {
  const { setSidebarOpen } = useDrawer();

  return (
    <Link
      className="text-white font-roboto font-bold text-md liminal-text"
      data-text={children}
      href={href}
      onClick={() => setSidebarOpen(false)}
    >
      {children}
    </Link>
  );
};
