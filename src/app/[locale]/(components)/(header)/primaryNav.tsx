import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { DrawerIcon } from "./drawerIcon";
import { DesktopPrimaryNav } from "./navDesktop";
import logo from "./logo.svg";

export const PrimaryNav: FC = () => {
  return (
    <div className="w-full navbar p-4">
      <div className="flex-1 px-2 mx-2">
        <Link
          href="/"
          className="cursor-pointer hover:scale-105 ease-in-out duration-200"
        >
          <Image
            src={logo}
            alt="logomark"
            width={120}
            height={50}
            priority
            className="mr-4 w-auto h-auto"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center lg:hidden">
        <DrawerIcon />
      </div>
      <div className="flex justify-center item-center  lg:block space-x-3">
        <DesktopPrimaryNav />
      </div>
    </div>
  );
};
