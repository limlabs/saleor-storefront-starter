import { Intro } from "./(components)/intro";
import { ServicesHero } from "./(components)/servicesHero";
import { SeeAndFeel } from "./(components)/seeAndFeel";

export function generateStaticParams() {
  return [{ locale: "en-us" }];
}

export default function HomePage() {
  return (
    <main className="relative bg-almost-black">
      <div className="h-screen">
        <ServicesHero />
      </div>

      <Intro />
      <SeeAndFeel />
    </main>
  );
}