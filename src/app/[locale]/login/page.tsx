import { getTranslations } from "@/core/server/getTranslations";
import { CreateAccount } from "./createAccount";
import { ResolvedMetadata, ResolvingMetadata } from "next";
import { Locale } from "@/locale-config";
import { Channel } from "@/channel-config";
import { withTranslations } from "@/core/server/locale";
import Login from "./login";
import { gqlClient } from "@/gql";
import { FormEvent } from "react";

interface PageProps {
  params: {
    locale: Locale;
    channel: Channel;
  };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<ResolvedMetadata> {
  const translations = await getTranslations(params.locale);
  const pageTitle = translations("login.pageTitle");
  const pageDescription = translations("login.pageDescription");
  const parentMetadata = await parent;

  return {
    ...parentMetadata,
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      ...parentMetadata.openGraph,
      url: `/${params.locale}/login`,
    },
  };
}
export default withTranslations<PageProps>(async function Auth({}) {
  return (
    <div className=" py-6 justify-start items-start gap-2.5 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-10">
        <Login />
      </div>
      <div className="w-full md:w-1/2 p-10 bg-base-300">
        <CreateAccount />
      </div>
    </div>
  );
});
