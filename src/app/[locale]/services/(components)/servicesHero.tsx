import Image from "next/image";

export const ServicesHero = () => {
  return (
    <div className=" w-full -lg:h-[90vh] -sm:h-[90vh] relative z-100 flex justify-center items-center">
      <Image
        src="/services_hero.webp"
        alt="background of slide in waterpark"
        fill
        className="object-cover"
      />

      <div className="absolute flex flex-col justify-center items-center">
        <Image
          src="/digital_surrealism.png"
          alt="digital surrealism hero text"
          height={1000}
          width={1000}
        />
      </div>
    </div>
  );
};

export default ServicesHero;
