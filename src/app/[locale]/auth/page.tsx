import { getTranslations } from "@/core/server/getTranslations";
import { CreateAccount } from "./createAccount";
import { ResolvedMetadata, ResolvingMetadata } from "next";
import { Locale } from "@/locale-config";
import { Channel } from "@/channel-config";
import { withTranslations } from "@/core/server/locale";
import Login from "./login";

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
  const pageTitle = translations("allProducts.pageTitle");
  const pageDescription = translations("allProducts.pageDescription");
  const parentMetadata = await parent;
  return {
    ...parentMetadata,
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      ...parentMetadata.openGraph,
      url: `/${params.locale}/auth`,
    },
  };
}
export default withTranslations<PageProps>(async function Auth({}) {
  return (
    <div className=" py-6 justify-start items-start gap-2.5 inline-flex">
      <Login />
      <CreateAccount />
    </div>
  );
});
