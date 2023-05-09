import AboutMain from "../(components)/aboutMain";
import AboutHero from "../(components)/aboutHero";
import AboutTeam from "../(components)/aboutTeam";

export default function AboutPage() {
  return (
    <main className="h-auto  w-full ">
      <div className="h-screen">
        <AboutHero />
      </div>
      <div className="bg-gradient-to-b  from-light-pink to-light-blue-main shadow-inset-shadow ">
        <div className="h-full ">
          <AboutMain />
        </div>
        <div className="h-full ">
          <AboutTeam />
        </div>
      </div>
    </main>
  );
}
