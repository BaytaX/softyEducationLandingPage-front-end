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
  "/aboutUs": "/aboutUs",

  "/courses": {
    en: "/courses",
    ar: "/courses",
    fr: "/Cours",
  },
  "/logIn": {
    en: "/logIn",
    ar: "/logIn",
    fr: "/SeConnecter",
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
