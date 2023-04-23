import { gqlClient } from "@/gql";
import { parseJSONText } from "@/core/server/parseJSONText";
import { renderEditorJsObject } from "@/core/server/renderJSONText";

export default async function HomePage() {

  const {page} = await gqlClient.page({slug: 'about'});

  const content = parseJSONText(page.content);


  return (
    <main className="container mx-auto my-auto w-full max-w-7xl h-full max-h-screen">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Welcome to the Headless Store
      </h1>
      {
        content? renderEditorJsObject(content): null
      }
    </main>
  );
}
