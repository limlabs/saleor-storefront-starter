import Button from "@/app/daisyui/button";
import Link from "next/link";
import { ContentSection } from "../(components)/contentSection";
import { DiscordIcon } from "../(components)/discordIcon";
import { LinkedinIcon } from "../(components)/linkedinIcon";
import Image from "next/image";

export function generateStaticParams() {
  return [{ locale: "en-us" }];
}

export const metadata = {
  title: "Contact Us",
  description: "Contact us at Liminal Labs",
};

export default function ContactPage() {
  return (
    <ContentSection className="relative z-20">
      <div className=" w-full -lg:h-[90vh] -sm:h-[90vh] relative z-100 flex justify-center items-center">
        <Image
          src={"/img/contact/background.webp"}
          alt="slide background"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute flex flex-col justify-center items-center">
          <Image
            src={"/img/contact/jump_in.png"}
            alt="jump-in"
            height={200}
            width={605}
          />
          <div className="flex flex-col gap-12 items-center">
            <a href="mailto:info@liminal.sh">
              <Button variant="primary" className="text-secondary font-mono">
                Send an Email <span className="animate-hue-rotate">📧</span>
              </Button>
            </a>
            <Link href="https://calendly.com/austin-liminal">
              <Button variant="secondary" className="text-white font-mono">
                <span className="animate-hue-rotate">📆</span> Book an
                Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[30vh] flex flex-col w-full justify-center items-center -lg:mt-32 -sm:mt-16 -lg:mb-32">
        <Image
          src={"/img/contact/vhs.png"}
          alt="glitch effect"
          width={3815}
          height={602}
        />
        <Image
          src={"/img/contact/vhs.png"}
          alt="glitch effect"
          width={3815}
          height={602}
          className="-lg:hidden"
        />
        <Image
          src={"/img/contact/vhs.png"}
          alt="glitch effect"
          width={3815}
          height={602}
          className="-lg:hidden"
        />
        <div className="absolute">
          <div className="flex -lg:flex-row -sm:flex-col -sm:ml-6 -lg:justify-center -lg:items-center w-full">
            <h2 className="font-press_start_2p text-light-pink -lg:text-3xl -sm:text-xl -lg:mr-8">
              Find us.
            </h2>
            <h2 className="font-press_start_2p text-light-pink -lg:text-3xl -sm:text-xl">
              Look here.
            </h2>
          </div>
          <div className="flex flex-row gap-20 justify-center items-center mt-12 w-full">
            <DiscordIcon size="lg" />
            <LinkedinIcon size="lg" />
          </div>
        </div>
      </div>
    </ContentSection>
  );
}
