import { AppRoot } from "./(components)/root";
import "./globals.css";
import {
  Nunito,
  Roboto,
  Press_Start_2P,
  Roboto_Mono,
  Prompt,
  Goldman,
} from "next/font/google";

export const metadata = {
  title: "Headless Store",
  description: "Open source headless Storefront",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});
const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});
const press_start_2p = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press_start_2p",
});

const goldman = Goldman({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-goldman",
});

const roboto_mono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

const prompt = Prompt({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-prompt",
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  return (
    <html
      lang={params.locale}
      className={`${roboto.variable} ${roboto_mono.variable} ${prompt.variable}  ${nunito.variable} ${press_start_2p.variable} ${goldman.variable}`}
    >
      <body>
        <AppRoot>{children}</AppRoot>
      </body>
    </html>
  );
}
