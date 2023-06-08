import { HoneyDrop } from "./introHoneyDrop";
import Image from "next/image";

export const IntroCompanyOverview = () => {
  return (
    <div className="-sm:text-l -md:text-xl z-20  w-5/6 max-w-3xl bg-light-pink font-roboto text-center relative mt-32 flex flex-col items-center -sm:px-8 -md:px-20 pt-16 rounded-t-[150px] bg-circular-gradient-secondary bg-top-up bg-top-up-stretch bg-no-repeat ">
      <p className="font-mono font-bold italic -sm:text-l -md:text-3xl -sm:leading-10 -md:leading-10 -md:max-w-[80%]">
        Liminal Labs builds software and media for people who value quality and
        timeliness.
      </p>
      <p className="-sm:px-2 -md:px-8 w-full mt-10 z-20  leading-8 -md:max-w-[80%]">
        Our team combines deep background in software engineering and media
        production with the latest in emerging technologies to deliver solutions
        that are both innovative and practical for organizations of
        all&nbsp;sizes.
      </p>
      <Image
        src="/img/home/drip.svg"
        alt=""
        width={768}
        height={260}
        className={`block w-full absolute top-[95%] z-10 max-w-3xl`}
      />
      <HoneyDrop />
    </div>
  );
};
