import Button from "@/app/daisyui/button";
import { ContentSection } from "./contentSection";

export default function SeeWhatsPossible() {
  return (
    <ContentSection className="bg-almost-black h-auto -lg:p-52 -sm:pt-0 -sm:pb-12">
      <div className="w-full flex flex-col justify-center items-center -sm:flex-col -lg:flex-row">
        <div>
          <video
            width="1200"
            height="2500"
            autoPlay
            muted
            loop
            className="rounded-lg"
          >
            <source src="/video/chrome_anthony.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="w-5/6 z-20 flex flex-col justify-center items-center -sm:pt-12 -sm:pb-12 ">
          <h1 className="  font-futura text-light-blue-main -lg:text-6xl -sm:text-4xl -md:text-5xl -sm:mb-0  -md:mb-4 font-semibold  mt-6">
            L I M I N A L
          </h1>
          <h1 className="  font-futura text-light-blue-main -lg:text-6xl -md:text-5xl -sm:text-4xl -sm:mb-0  -md:mb-4 font-semibold  mt-6">
            S T U D I O S
          </h1>
          <div className="mt-6">
            <Button variant="secondary">SEE WHAT&apos;S POSSIBLE</Button>
          </div>
        </div>
      </div>
    </ContentSection>
  );
}
