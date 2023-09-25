import Image from "next/image";
import { Link } from "./link";

export default function Footer() {
  return (
    <footer className="w-90% -md:w-full mt-32 flex flex-col -md:flex-row items-start mx-auto -md:items-center p-12   justify-center -md:justify-between">
      <div className="-md:col-span-1 flex flex-col pt-8 -lg:pt-0 items-end justify-end w-full max-w-[250px] text-lg -md:text-sm font-roboto font-extralight">
        <div className="-md:grid -md:grid-cols-12 justify-between -lg:justify-end flex w-full max-w-sm">
          <ul className="-md:col-span-6 -md:col-start-1 -md:justify-end">
            <li className="cursor-pointer hover:text-light-pink mb-px">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="cursor-pointer hover:text-light-pink mb-px">
              <Link href={"/privacy.html"}>Privacy Policy</Link>
            </li>
            <li className="cursor-pointer hover:text-light-pink mb-px">
              <Link href={"/en-us/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="pt-8 -md:pt-4 flex w-full max-w-sm text-xs -md:text-sm">
          Copyright © {new Date().getFullYear()} Liminal&nbsp;Labs&nbsp;LLC.
          All&nbsp;Rights&nbsp;Reserved.
        </div>
      </div>
    </footer>
  );
}
