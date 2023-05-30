import Image from "next/image";
import { ContentSection } from "./contentSection";
import slideMain from "../../../../public/test-contact/main_slide_background.png";
import slideBackground from "../../../../public/test-contact/slide-stitched.jpg";
import vhs from "../../../../public/test-contact/vhs.png";
import discord from "../../../../public/test-contact/discord.png";
import linkedin from "../../../../public/test-contact/linkedin.png";
import jumpIn from "../../../../public/test-contact/jump_in.png";
import Button from "@/app/daisyui/button";
import { ContactIcons } from "./contactIcons";

export default function Contact() {
  return (
    <ContentSection>
      <div className=" w-full -lg:h-[80vh] -sm:h-[50vh] relative z-100 flex justify-center items-center">
        <Image
          src={slideBackground}
          alt="slide-background"
          layout="fill"
          className="-sm:hidden -lg:flex"
        />
        <div className="h-full -lg:w-2/3 -sm:w-full relative shadow-shadow-sm">
          <Image src={slideMain} alt="slide-layer" layout="fill" />
        </div>
        <div className="absolute flex flex-col justify-center items-center">
          <Image src={jumpIn} alt="jump-in" height={200} />
          <div>
            <Button variant="secondary">Say Hey</Button>
          </div>
        </div>
      </div>
      <div className="h-[30vh] flex flex-col w-full justify-center items-center -lg:mt-32 -lg:mb-32">
        <Image src={vhs} alt="glitch" width={2440} />
        <Image src={vhs} alt="glitch" width={2440} className="-lg:hidden" />
        <Image src={vhs} alt="glitch" width={2440} className="-lg:hidden" />
        <div className="absolute">
          <div className="flex -lg:flex-row -sm:flex-col">
            <h2 className="font-press_start_2p text-light-pink -lg:text-3xl -sm:text-xl -lg:mr-8">
              Find us.
            </h2>
            <h2 className="font-press_start_2p text-light-pink -lg:text-3xl -sm:text-xl">
              Look here.
            </h2>
          </div>

          <ContactIcons />
        </div>
      </div>
    </ContentSection>
  );
}
