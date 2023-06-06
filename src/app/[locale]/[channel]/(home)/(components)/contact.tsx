import Button from "@/app/daisyui/button";
import Image from "next/image";
import Link from "next/link";

import { ContentSection } from "../../../(components)/contentSection";

export const Contact = () => {
  return (
    <ContentSection className="bg-almost-black flex flex-col items-end -sm:pb-24 -lg:pb-0 w-full -lg:justify-end -sm:items-center">
      <div className="h-96 -lg:bg-forest-green -sm:bg-transparent w-5/6 flex -lg:flex-row -sm:flex-col-reverse -lg:shadow-shadow-sm mt-36">
        <div className="z-20 flex flex-col items-center">
          <h1 className="-lg:mx-12 font-futura text-light-blue-main -sm:text-3xl -lg:text-8xl -md:text-5xl -sm:mb-2 -md:mb-4 font-semibold mt-6">
            We&#39;re here to help
          </h1>
          <div className="mt-4">
            <Link href="/talk">
              <Button variant="secondary">GET IN CONTACT</Button>
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
