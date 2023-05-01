import { getI18N } from "@/core/server/i18n";
import type { Locale } from "@/core/server/i18n";

interface HomePageProps {
	params: {
		locale: Locale;
		channel: string;
	}
}

export default async function HomePage({ params }: HomePageProps) {
  const t = await getI18N(params.locale);
  return (
    <main className="container mx-auto my-auto w-full max-w-7xl h-full max-h-screen">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        {t["Home"]["welcome"]}
      </h1>
    </main>
  );
}
