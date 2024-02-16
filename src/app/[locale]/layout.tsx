import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// import { Archivo } from "next/font/google";

// const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Softy Education - Home",
  description:
    "Embark on a transformative journey with Softy Education, where learning becomes an immersive experience. Whether you're diving into programming, web development, artificial intelligence, or other cutting-edge technologies, our platform is tailored to meet your unique needs.",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html lang={locale} className="scroll-smooth">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          <div>{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
