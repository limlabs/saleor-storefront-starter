import Button from "@/app/daisyui/button";
import Image from "next/image";

import Background from "../../../../public/night_time_crt.jpg";
import { ContentSection } from "./contentSection";

export default function StoreDemo() {
  return (
    <ContentSection>
      <Image
        src={Background}
        alt="background"
        height={600}
        width={1000}
        className="shadow-shadow-white border border-white"
      />
      <div className="w-5/6 z-20 flex justify-center items-center absolute">
        <Button variant="primary">BROWSE OUR WARES</Button>
      </div>
    </ContentSection>
  );
}
