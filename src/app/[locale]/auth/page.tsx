import { getTranslations } from "@/core/server/getTranslations";
import { CreateAccount } from "./createAccount";
import { Login } from "./login";
import { ResolvedMetadata, ResolvingMetadata } from "next";
import { Locale } from "@/locale-config";
import { Channel } from "@/channel-config";
import { getLanguageCode, withTranslations } from "@/core/server/locale";

interface PageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<ResolvedMetadata> {
  const translations = await getTranslations(params.locale);
  const pageTitle = translations("auth.create account");

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
export default withTranslations<PageProps>(async function Auth({
  params: { locale },
}) {
  const languageCode = getLanguageCode(locale);
  return (
    <div className=" py-6 justify-start items-start gap-2.5 inline-flex">
      <Login />
      <CreateAccount />
    </div>
  );
});
