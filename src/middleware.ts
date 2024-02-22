import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation/navigation";

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

export const config = {
  matcher: ["/((?!.*\\..*).*)"],
};
