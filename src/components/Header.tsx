import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLocale, useT, localizedHref, alternateUrl, type PageKey } from "../i18n/locale";

const pageKeys: PageKey[] = ["home", "services", "about", "contact"];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const locale = useLocale();
  const t = useT();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const altHref = alternateUrl(pathname);

  const navLinks = pageKeys.map((key, i) => ({
    to: localizedHref(locale, key),
    label: t.nav[i].label,
  }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to={localizedHref(locale, "home")} className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>S</span>
          </div>
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Sol<span className="text-primary">Systems</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
              className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to={altHref}
            aria-label={t.langSwitchLabel}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
          >
            <Globe size={14} />
            {t.langSwitchTo}
          </Link>
          <Link
            to={localizedHref(locale, "contact")}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(var(--glow),0.3)]"
          >
            {t.headerCta}
          </Link>
        </div>

        <button
          className="md:hidden rounded-md p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={t.menuToggle}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={altHref}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              aria-label={t.langSwitchLabel}
            >
              <Globe size={16} />
              {t.langSwitchTo}
            </Link>
            <Link
              to={localizedHref(locale, "contact")}
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              {t.headerCta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
