import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lock,
  Package,
  Server,
  Users,
  Network,
  GitBranch,
  Bell,
  ScrollText,
  Monitor,
  Settings,
  LifeBuoy,
  Languages,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { useLocale, useT, localizedHref } from "../../i18n/locale";

const moduleIcons = [Lock, Package, Server];
const featureIcons = [Users, Network, GitBranch, Bell, ScrollText, Monitor, Settings, LifeBuoy, Languages];

// Locale-aware screenshot paths. Files live in public/images/solsuite/<name>-<locale>.{webp,png}
// Regenerate from src/assets/solsuite/ via `pnpm optimize:images`.
type Screenshot = { webp: string; png: string };
const heroScreenshot = (locale: "el" | "en"): Screenshot => ({
  webp: `/images/solsuite/central-${locale}.webp`,
  png: `/images/solsuite/central-${locale}.png`,
});
const moduleScreenshotKeys = ["solpass", "solassets", "solit"] as const;
const moduleScreenshot = (locale: "el" | "en", i: number): Screenshot => ({
  webp: `/images/solsuite/${moduleScreenshotKeys[i]}-${locale}.webp`,
  png: `/images/solsuite/${moduleScreenshotKeys[i]}-${locale}.png`,
});

export function SolSuitePage() {
  const locale = useLocale();
  const t = useT().solsuite;

  return (
    <div className="flex flex-col pt-24">
      <div className="mx-auto max-w-7xl px-6 pb-24">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to={localizedHref(locale, "home")} className="hover:text-foreground transition-colors">
            {t.breadcrumbHome}
          </Link>
          <ChevronRight size={14} />
          <Link to={localizedHref(locale, "products")} className="hover:text-foreground transition-colors">
            {t.breadcrumbProducts}
          </Link>
          <ChevronRight size={14} />
          <span className="text-foreground">{t.title}</span>
        </nav>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">{t.eyebrow}</span>
          <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.title}
          </h1>
          <p className="mt-4 text-xl font-medium text-primary">{t.tagline}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.intro}</p>
        </motion.div>

        {/* Hero screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 w-full overflow-hidden rounded-2xl border border-border/60 bg-card"
        >
          {(() => {
            const hero = heroScreenshot(locale);
            return (
              <picture>
                <source type="image/webp" srcSet={hero.webp} />
                <img
                  src={hero.png}
                  alt={`${t.title} overview`}
                  className="w-full h-auto"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            );
          })()}
        </motion.div>

        {/* Modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.modulesHeading}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.modulesIntro}</p>
        </motion.div>

        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {t.modules.map((module, i) => {
            const Icon = moduleIcons[i];
            const screenshot = moduleScreenshot(locale, i);
            return (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-elevated hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="w-full overflow-hidden border-b border-border/60 bg-card">
                  <picture>
                    <source type="image/webp" srcSet={screenshot.webp} />
                    <img
                      src={screenshot.png}
                      alt={`${module.name} screenshot`}
                      className="w-full h-auto"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-5 inline-flex w-fit rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {module.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">{module.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{module.description}</p>
                  <ul className="mt-6 space-y-2.5">
                    {module.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cross-cutting features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.featuresHeading}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.featuresIntro}</p>
        </motion.div>

        <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex gap-3 rounded-xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10"
              >
                <div className="shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-card-foreground">{feature.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.stackHeading}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {t.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border/60 bg-surface px-4 py-2 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-surface to-background p-10 text-center sm:p-16"
        >
          <h3 className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.cta.title}
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{t.cta.subtitle}</p>
          <Link
            to={localizedHref(locale, "contact")}
            className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_40px_rgba(var(--glow),0.35)]"
          >
            {t.cta.button}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
