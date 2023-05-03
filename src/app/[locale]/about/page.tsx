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
    <main className="h-auto  w-full ">
      <div className="h-screen">
        <AboutHero />
      </div>
      <div className="bg-gradient-to-b  from-light-pink to-light-blue-main shadow-inset-shadow ">
        <div className="h-full ">
          <AboutMain />
        </div>
        <div className="h-full ">
          <AboutTeam />
        </div>
      </div>
    </main>
  );
}
