import Image from "next/image";
import { ContentSection } from "./contentSection";
import slideMain from "../../../../public/test-contact/main_slide_background.png";
import slideBackground from "../../../../public/test-contact/slide-stitched.jpg";
import vhs from "../../../../public/test-contact/vhs.png";
import jumpIn from "../../../../public/test-contact/jump_in.png";
import Button from "@/app/daisyui/button";
import { DiscordIcon } from "./discordIcon";
import { LinkedinIcon } from "./linkedinIcon";

export default function Contact() {
  return (
    <ContentSection>
      <div className=" w-full -lg:h-[90vh] -sm:h-[90vh] relative z-100 flex justify-center items-center">
        <Image
          src={slideBackground}
          alt="slide background"
          fill
          className="-sm:hidden -lg:flex object-cover"
        />
        <div className="h-full -lg:w-2/3 -sm:w-full relative shadow-shadow-sm">
          <Image src={slideMain} alt="slide background layer" layout="fill" />
        </div>
        <div className="absolute flex flex-col justify-center items-center">
          <Image src={jumpIn} alt="jump-in" height={200} />
          <div>
            <a href="mailto:info@liminal.sh">
              <Button variant="primary">Say Hey</Button>
            </a>
          </div>
        </div>
      </div>
      <div className="h-[30vh] flex flex-col w-full justify-center items-center -lg:mt-32 -sm:mt-16 -lg:mb-32">
        <Image src={vhs} alt="glitch effect" width={2440} />
        <Image
          src={vhs}
          alt="glitch effect"
          width={2440}
          className="-lg:hidden"
        />
        <Image
          src={vhs}
          alt="glitch effect"
          width={2440}
          className="-lg:hidden"
        />
        <div className="absolute">
          <div className="flex -lg:flex-row -sm:flex-col -sm:ml-6">
            <h2 className="font-press_start_2p text-light-pink -lg:text-3xl -sm:text-xl -lg:mr-8">
              Find us.
            </h2>
            <h2 className="font-press_start_2p text-light-pink -lg:text-3xl -sm:text-xl">
              Look here.
            </h2>
          </div>
          <div className="flex justify-evenly mt-12">
            <DiscordIcon />
            <LinkedinIcon />
          </div>
        </div>
      </div>
    </ContentSection>
  );
}
