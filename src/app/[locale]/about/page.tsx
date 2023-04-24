import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import Texture from "./assets/texture-logo.jpg";
import Slide from "./assets/slide-logo.png";
import Background from "./assets/window.jpg";
import AboutMain from "../(components)/aboutMain";
import AboutHero from "../(components)/aboutHero";
import AboutTeam from "../(components)/aboutTeam";

export default function AboutPage() {
  return (
    <main className="h-auto mt-header-margin w-full ">
      <div className="h-main-height">
        <AboutHero />
      </div>
      <div className="bg-gradient-to-b from-hot-pink from-5%  via-light-pink to-light-blue-main ">
        <div className="h-main-height">
          <AboutMain />
        </div>
        <div className="h-main-height">
          <AboutTeam />
        </div>
      </div>
    </main>
  );
}
