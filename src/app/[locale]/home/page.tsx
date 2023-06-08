import { Testimonials } from "./(components)/testimonials";
import { Contact } from "./(components)/contact";
import { Intro } from "./(components)/intro";
import { HomeHero } from "./(components)/hero";

export function generateStaticParams() {
  return [{ locale: "en-us" }];
}

export default function HomePage() {
  return (
    <main className="relative">
      <HomeHero />
      <Intro />
      <Testimonials />
      <Contact />
    </main>
  );
}
