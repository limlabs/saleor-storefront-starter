import { ContentSection } from "../../(components)/contentSection";
import { IntroCompanyEthos } from "./introCompanyEthos";
import { IntroCompanyOverview } from "./introCompanyOverview";
import { IntroLeadIn } from "./introLeadIn";

export const Intro = () => {
  return (
    <ContentSection className="pb-0 px-0 items-center ">
      <IntroLeadIn />
      <IntroCompanyOverview />
      <IntroCompanyEthos />
    </ContentSection>
  );
};
