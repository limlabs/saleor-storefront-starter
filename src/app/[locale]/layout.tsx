import { AppRoot } from "./(components)/root";
import "./globals.css";

export const metadata = {
  title: "Headless Store",
  description: "Open source headless Storefront",
};

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
    <html lang={params.locale}>
      <body>
        <AppRoot>{children}</AppRoot>
      </body>
    </html>
  );
}
