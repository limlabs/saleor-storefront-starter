import Button from "@/app/daisyui/button";
import Image from "next/image";
import Link from "next/link";

import { ContentSection } from "../../../(components)/contentSection";

export const Contact = () => {
  return (
    <ContentSection className="bg-almost-black flex flex-col -sm:items-center -sm:mt-8 -sm:px-8 -lg:px-0 -lg:my-0 -lg:items-end -lg:pb-24 w-full">
      <div className="h-96 -lg:bg-forest-green -sm:bg-transparent -lg:w-5/6 flex -lg:flex-row -sm:flex-col-reverse -lg:justify-between -lg:shadow-shadow-sm -sm:mt-16  -lg:mt-36">
        <div className="z-20 flex flex-col items-center justify-center w-full">
          <h1 className="-lg:mx-12 font-futura text-light-blue-main -sm:text-3xl -lg:text-8xl -md:text-5xl -sm:mb-2 -md:mb-4 font-semibold mt-6">
            We&#39;re here to help
          </h1>
          <div className="mt-4">
            <Link href="/contact">
              <Button variant="secondary">Get in Touch</Button>
            </Link>
          </div>
        </div>
        <Image
          src={"/img/home/cache_me_outside.png"}
          alt="AI team"
          width={384}
          height={384}
        />
      </div>
    </ContentSection>
  );
};
