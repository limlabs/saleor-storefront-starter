import { AppRoot } from "./(components)/root";
import { AppProvider } from "@/core/client/useApp"
import "./globals.css";
import type { PropsWithChildren } from "react"

export const metadata = {
  title: "Headless Store",
  description: "Open source headless Storefront",
};

interface RootLayoutProps {
  params: {
      locale: string;
  }
}

export default function RootLayout({
  children,
  params,
}: PropsWithChildren<RootLayoutProps>) {

  return (
    <html lang={params.locale} data-theme="liminalThemeBright">
      <body>
        <AppProvider value={{params}}>
          <AppRoot>{children}</AppRoot>
        </AppProvider>
      </body>
    </html>
  );
}
