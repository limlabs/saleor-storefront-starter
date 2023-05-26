import Image from "next/image";
import { ContentSection } from "./contentSection";
import slideMain from "../../../../public/test-contact/main_slide_background.png";
import slideBackground from "../../../../public/test-contact/background_slide.png";
import vhs from "../../../../public/test-contact/vhs.png";
import discord from "../../../../public/test-contact/discord.png";
import linkedin from "../../../../public/test-contact/linkedin.png";
import jumpIn from "../../../../public/test-contact/jump_in.png";
import Button from "@/app/daisyui/button";

export default function Contact() {
  return (
    <ContentSection>
      <div className=" w-full h-[70vh] relative z-100 flex justify-center items-center">
        <Image src={slideBackground} alt="slide-background" layout="fill" />
        <div className="h-full w-2/3 relative shadow-shadow-sm">
          <Image src={slideMain} alt="slide-layer" layout="fill" />
        </div>
        <div className="absolute flex flex-col justify-center items-center">
          <Image src={jumpIn} alt="jump-in" height={200} />
          <div>
            <Button variant="secondary">Say Hey</Button>
          </div>
        </div>
      </div>
      <div className="h-[30vh] flex flex-col w-full justify-center items-center mt-24 mb-16">
        <Image src={vhs} alt="glitch" width={2440} />
        <div className="absolute">
          <h2 className="font-press_start_2p text-light-pink text-3xl">
            Find us. Look here.
          </h2>
          <div className="flex justify-evenly mt-12">
            <Image
              src={discord}
              alt="discord"
              height={50}
              className="cursor-pointer"
            />
            <Image
              src={linkedin}
              alt="discord"
              height={50}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </ContentSection>
  );
}
