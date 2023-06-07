import { Testimonials } from "./(components)/testimonials";
import { Contact } from "./(components)/contact";
import { Intro } from "./(components)/intro";
import { HomeHero } from "./(components)/hero";

export default function HomePage() {
  return (
    <main className="relative bg-almost-black">
      <HomeHero />
      <Intro />
      <Testimonials />
      {/* <Contact /> */}
    </main>
  );
}
