import { AppRoot } from "./(components)/root";
import "./globals.css";
import { Roboto, Press_Start_2P, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { PreloadHomeAssets } from "./home/(components)/assets";

export const metadata = {
  title: "Home - LIMINAL",
  description:
    "Liminal Labs provides software and media consulting services crafted to help brands thrive in the digital age.",
  viewport: "width=device-width,initial-scale=1.0",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
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
        ${press_start_2p.variable}
      `}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <PreloadHomeAssets />
      </head>
      <body className="bg-almost-black">
        <AppRoot>{children}</AppRoot>
        <Analytics />
      </body>
    </html>
  );
}
