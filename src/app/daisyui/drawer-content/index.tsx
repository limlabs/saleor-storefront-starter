"use client";
import React, { useState, PropsWithChildren, FC } from "react";
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

export const DrawerContent: FC  = ({ children: ReactNode }) => {
  return <div className="drawer-content">{children}</div>;
};
};

export default Drawer;
