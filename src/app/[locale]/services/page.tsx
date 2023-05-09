import AboutMain from "../(components)/aboutMain";
import AboutHero from "../(components)/aboutHero";
import AboutTeam from "../(components)/aboutTeam";

export default function AboutPage() {
  return (
    <main className="h-auto mt-header-margin w-full ">
      <div className="h-main-height">
        <AboutHero />
      </div>
      <div className="bg-gradient-to-b  from-light-pink to-light-blue-main shadow-inset-shadow ">
        <div className="h-main-height ">
          <AboutMain />
        </div>
        <div className="h-main-height ">
          <AboutTeam />
        </div>
      </div>
    </main>
  );
}
