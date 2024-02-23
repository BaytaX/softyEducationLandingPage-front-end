import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "../../global.css";

import Store from "@/provider/store";

export const metadata: Metadata = {
  title: "Softy Education - Login",
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
    <html lang={locale} className="scroll-smooth   !max-w-[193rem]">
      <body>
        <Store>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div>{children}</div>
          </NextIntlClientProvider>
        </Store>
      </body>
    </html>
  );
}
