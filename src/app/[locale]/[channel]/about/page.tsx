import { parseJSONText } from "@/core/server/parseJSONText";
import { renderEditorJsObject } from "@/core/server/renderJSONText";
import { getLanguageCode } from "@/core/server/locale";
import { gqlClient } from "@/gql";
import { Locale } from "@/locale-config";

interface AboutProps {
  params: {
    locale: Locale;
    channel: string;
  };
}

export default async function AboutPage({
  params: { channel, locale },
}: AboutProps) {
  const languageCode = getLanguageCode(locale);
  const { page } = await gqlClient.Page({ slug: "about", languageCode });
  const content = parseJSONText(page?.content);

  return (
    <main>
      <article className="mt-10">
        <h1 className="text-5xl">{page?.title}</h1>
        {content ? renderEditorJsObject(content) : null}
      </article>
    </main>
  );
}
