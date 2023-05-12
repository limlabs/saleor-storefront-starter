import { parseJSONText } from "@/core/server/parseJSONText";
import { renderEditorJsObject } from "@/core/server/renderJSONText";
import { gqlClient } from "@/gql";

interface AboutProps {
  params: {
    locale: string;
    channel: string;
  };
}

export default async function AboutPage({
  params: { channel, locale },
}: AboutProps) {
  const { page } = await gqlClient.page({ slug: "about", channel, locale });
  const content = parseJSONText(page.content);

  return (
    <main>
      <article className="mt-10">
        <h1 className="text-5xl">{page.title}</h1>
        {content ? renderEditorJsObject(content) : null}
      </article>
    </main>
  );
}
