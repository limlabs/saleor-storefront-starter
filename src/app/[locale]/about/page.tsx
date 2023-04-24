import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import Texture from "./assets/texture-logo.jpg";
import Slide from "./assets/slide-logo.png";
import Background from "./assets/window.jpg";
import AboutMain from "../(components)/aboutMain";
import AboutHero from "../(components)/aboutHero";

export default function AboutPage() {
  return (
    <main className="h-main-height mt-header-margin w-full">
      <AboutHero />
      <AboutMain />
    </main>
  );
}
