import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "./navigation/navigation";

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
  pathnames,
});

export const config = {
  matcher: ["/", "/(fr|en|ar)/:path*"],
};
