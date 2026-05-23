import { useRouterState } from "@tanstack/react-router";
import { strings, type Locale } from "./strings";

export function detectLocale(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "el";
}

export function useLocale(): Locale {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return detectLocale(pathname);
}

export function useT() {
  return strings[useLocale()];
}

export type PageKey = "home" | "services" | "about" | "contact";

export function localizedHref(locale: Locale, page: PageKey): string {
  const prefix = locale === "el" ? "" : "/en";
  switch (page) {
    case "home":
      return prefix || "/";
    case "services":
      return `${prefix}/services`;
    case "about":
      return `${prefix}/about`;
    case "contact":
      return `${prefix}/contact`;
  }
}

export function alternateUrl(pathname: string): string {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice(3);
    return rest || "/";
  }
  return pathname === "/" ? "/en" : `/en${pathname}`;
}
