import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "fr", "ar"] as const;
export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/blog": "/blog",
  "/bootcamps": "bootcamps",
  "/contact": "/contact",

  "/courses": {
    en: "/courses",
    fr: "/Cours",
    ar:'/'
  },
  "/logIn": {
    en: "/logIn",
    fr: "/SeConnecter",
    ar:'/'
  },

  // // Dynamic params are supported via square brackets
  // "/news/[articleSlug]-[articleId]": {
  //   en: "/news/[articleSlug]-[articleId]",
  //   de: "/neuigkeiten/[articleSlug]-[articleId]",
  // },

  // Also (optional) catch-all segments are supported
  // "/categories/[...slug]": {
  //   en: "/categories/[...slug]",
  //   de: "/kategorien/[...slug]",
  // },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
