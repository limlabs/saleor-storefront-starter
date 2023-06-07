import AboutMain from "../(components)/aboutMain";
import AboutHero from "../(components)/aboutHero";
import AboutTeam from "../(components)/aboutTeam";
import Footer from "../(components)/footer";

export default function AboutPage() {
  return (
    <main className=" relative overflow-x-hidden">
      <div className="-lg:h-[85vh] -sm:h-[90vh]">
        <AboutHero />
      </div>
      <div className="bg-gradient-to-b  from-light-pink to-light-blue-main shadow-inset-shadow h-auto">
        <div className="min-h-screen ">
          <AboutMain />
        </div>
        <div className="min-h-screen -sm:pt-12 -sm:pb-12">
          <AboutTeam />
        </div>
      </div>
    </main>
  );
}
