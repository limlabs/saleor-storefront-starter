import Button from "@/app/daisyui/button";
import { ContentSection } from "./contentSection";

export default function SeeWhatsPossible() {
  return (
    <ContentSection className="bg-almost-black flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-between">
        <div className="h-96 light-pink w-5/6 flex shadow-shadow-sm self-center mt-40">
          <div className="w-5/6 z-20 flex flex-col justify-center items-center ">
            <h1 className="  font-futura text-light-blue-main -lg:text-8xl -md:text-5xl -sm:mb-2  -md:mb-4 font-semibold  mt-6">
              L I M I N A L
            </h1>
            <h1 className="  font-futura text-light-blue-main -lg:text-8xl -md:text-5xl -sm:mb-2  -md:mb-4 font-semibold  mt-6">
              S T U D I O S
            </h1>
            <Button variant="secondary">SEE WHAT&apos;S POSSIBLE</Button>
          </div>
          <div>
            <video
              width="1080"
              height="2250"
              autoPlay
              muted
              loop
              className="rounded-lg"
            >
              <source src="/video/cartoon_pc.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
      <div className="h-12 mt-40 w-full bg-checkerboard bg-50"></div>
    </ContentSection>
  );
}
