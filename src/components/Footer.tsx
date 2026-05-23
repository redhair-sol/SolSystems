import { Link } from "@tanstack/react-router";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useLocale, useT, localizedHref, type PageKey } from "../i18n/locale";

const pageKeys: PageKey[] = ["home", "services", "about", "contact"];

export function Footer() {
  const locale = useLocale();
  const t = useT();
  const navLinks = pageKeys.map((key, i) => ({
    to: localizedHref(locale, key),
    label: t.nav[i].label,
  }));

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>S</span>
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Sol<span className="text-primary">Systems</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{t.footer.navigationHeading}</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{t.footer.contactHeading}</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@solsystems.gr" className="hover:text-primary transition-colors">
                  info@solsystems.gr
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-primary" />
                {t.footer.locationValue}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">{t.footer.copyright(new Date().getFullYear())}</p>
          <p className="inline-flex items-baseline gap-1.5 text-xs text-muted-foreground">
            <span>{t.footer.designBy}</span>
            <a
              href="https://redhair.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline no-underline transition-opacity hover:opacity-85"
              aria-label="Redhair"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 900,
                fontSize: "1em",
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              <span style={{ color: "#F8F4EB" }}>red</span>
              <span style={{ color: "#EE2135" }}>hair</span>
              <span className="redhair-dot" style={{ color: "#EE2135" }}>.</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
