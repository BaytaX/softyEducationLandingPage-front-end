import { NextIntlClientProvider, useMessages } from "next-intl";
import "../../global.css";

import Store from "@/provider/store";

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
