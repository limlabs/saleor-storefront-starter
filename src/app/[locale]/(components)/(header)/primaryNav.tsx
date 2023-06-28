import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { DrawerIcon } from "./drawerIcon";
import { DesktopPrimaryNav } from "./navDesktop";
import logo from "./logo.svg";

export const PrimaryNav: FC = () => {
  return (
    <div className="w-full navbar bg-gray">
      <div className="flex-1 px-2 mx-2">
        <Link
          href="/"
          className="cursor-pointer hover:scale-110 ease-in-out duration-200"
        >
          <Image
            src={logo}
            alt="logomark"
            width={120}
            height={20}
            priority
            className="mr-4"
          />
        </Link>
      </div>
      <div className="flex-none -lg:hidden">
        <DrawerIcon />
      </div>
      <div className="flex-none hidden -lg:block space-x-3">
        <DesktopPrimaryNav />
      </div>
    </div>
  );
};
