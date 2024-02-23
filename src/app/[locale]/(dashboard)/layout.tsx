import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "../../global.css";
import Store from "@/provider/store";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

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
        <Store>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <NavBar />
            <div className="max-w-[136rem] mx-auto">{children}</div>
            <Footer />
          </NextIntlClientProvider>
        </Store>
      </body>
    </html>
  );
}
