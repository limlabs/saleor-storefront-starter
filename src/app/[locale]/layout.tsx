import { AppRoot } from "./(components)/root";
import "./globals.css";
import {
  Nunito,
  Roboto,
  Press_Start_2P,
  Roboto_Mono,
  EB_Garamond,
} from "next/font/google";
import { PreloadHomeAssets } from "./[channel]/(home)/(components)/assets";

export const metadata = {
  title: "Home - LIMINAL",
  description:
    "Liminal Labs provides software and media consulting services crafted to help brands thrive in the digital age.",
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

const roboto_mono = Roboto_Mono({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-roboto_mono",
});

const eb_garamond = EB_Garamond({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-garamond",
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
      className={`
        ${roboto.variable} 
        ${roboto_mono.variable}
        ${eb_garamond.variable}
        ${nunito.variable}
        ${press_start_2p.variable}
      `}
    >
      <PreloadHomeAssets />
      <body>
        <AppRoot>{children}</AppRoot>
      </body>
    </html>
  );
}
