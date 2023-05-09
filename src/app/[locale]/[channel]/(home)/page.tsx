import { useTranslations } from "@/core/server/useTranslations";
import type { Locale } from "@/locale-config";

interface HomePageProps {
	params: {
		locale: Locale;
		channel: string;
	}
}

export default function HomePage({ params }: HomePageProps) {
  const t = useTranslations(params.locale);

  return (
    <main className="container mx-auto my-auto w-full max-w-7xl h-full max-h-screen">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        {t('Home.welcome')}        
      </h1>
        
    </main>
  );
}
