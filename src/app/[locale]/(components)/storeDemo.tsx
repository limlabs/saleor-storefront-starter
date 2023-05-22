import Button from "@/app/daisyui/button";
import Image from "next/image";

import Background from "../../../../public/night_time_crt.jpg";

export default function StoreDemo() {
  return (
    <section className="-sm:hidden -lg:w-full   -md:h-1/3 -sm:shadow-none  -lg:h-full  -md:flex -lg:flex flex-col items-center justify-center  mt-0 bg-almost-black    relative">
      <Image src={Background} alt="background" height={600} width={1000} />
      <div className="w-5/6 z-20 flex justify-center items-center absolute">
        <Button variant="primary">BROWSE OUR WARES</Button>
      </div>
    </section>
  );
}
