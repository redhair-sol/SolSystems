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
  AlertTriangle,
  ListChecks,
  Wrench,
  History,
  LayoutList,
  type LucideIcon,
} from "lucide-react";
import { useLocale, useT, localizedHref } from "../../i18n/locale";
import { SolStatusHeroMock, SolStatusModuleMock } from "./SolStatusMock";

type ProductKey = "solsuite" | "solstatus";
type Screenshot = { webp: string; png: string };
type Loc = "el" | "en";

// SolStatus has no shareable screenshots (real data is confidential), so its
// visuals are rendered as fake, language-aware mock UIs instead.
const MOCK_KINDS = ["incidents", "initiatives", "maintenance"] as const;

// Per-product icon sets (module cards + features grid).
const MODULE_ICONS: Record<ProductKey, LucideIcon[]> = {
  solsuite: [Lock, Package, Server],
  solstatus: [AlertTriangle, ListChecks, Wrench],
};
const FEATURE_ICONS: Record<ProductKey, LucideIcon[]> = {
  solsuite: [Server, Network, Lock, Users, GitBranch, Bell, ScrollText, Monitor, Settings, LifeBuoy, Languages],
  solstatus: [Server, Network, Users, Lock, ScrollText, AlertTriangle, History, LayoutList],
};

// SolSuite has real screenshots; SolStatus uses placeholders until provided.
// To add SolStatus shots: drop files in public/images/solstatus/ and add a
// resolver here mirroring the solsuite one.
const SHOTS: Record<
  ProductKey,
  { hero: (l: Loc) => Screenshot; module: (l: Loc, i: number) => Screenshot } | null
> = {
  solsuite: {
    hero: (l) => ({ webp: `/images/solsuite/central-${l}.webp`, png: `/images/solsuite/central-${l}.png` }),
    module: (l, i) => {
      const keys = ["solpass", "solassets", "solit"] as const;
      return { webp: `/images/solsuite/${keys[i]}-${l}.webp`, png: `/images/solsuite/${keys[i]}-${l}.png` };
    },
  },
  solstatus: null,
};

export function ProductDetailPage({ productKey }: { productKey: ProductKey }) {
  const locale = useLocale();
  const t = useT()[productKey];
  const moduleIcons = MODULE_ICONS[productKey];
  const featureIcons = FEATURE_ICONS[productKey];
  const shots = SHOTS[productKey];

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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-3xl">
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
          {shots ? (
            <picture>
              <source type="image/webp" srcSet={shots.hero(locale).webp} />
              <img
                src={shots.hero(locale).png}
                alt={`${t.title} overview`}
                className="h-auto w-full"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          ) : productKey === "solstatus" ? (
            <SolStatusHeroMock locale={locale} />
          ) : (
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary/10 via-surface to-background text-sm text-muted-foreground">
              {t.title} screenshot
            </div>
          )}
        </motion.div>

        {/* Modules / tracks */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.modulesHeading}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.modulesIntro}</p>
        </motion.div>

        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {t.modules.map((module, i) => {
            const Icon = moduleIcons[i];
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
                  {shots ? (
                    <picture>
                      <source type="image/webp" srcSet={shots.module(locale, i).webp} />
                      <img src={shots.module(locale, i).png} alt={`${module.name} screenshot`} className="h-auto w-full" loading="lazy" decoding="async" />
                    </picture>
                  ) : productKey === "solstatus" ? (
                    <SolStatusModuleMock locale={locale} kind={MOCK_KINDS[i] ?? "incidents"} />
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-primary/10 via-surface to-background text-xs text-muted-foreground">
                      {module.name}
                    </div>
                  )}
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

        {/* Features grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.featuresHeading}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.featuresIntro}</p>
        </motion.div>

        <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.map((feature, i) => {
            const Icon = featureIcons[i % featureIcons.length];
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.stackHeading}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {t.stack.map((tech) => (
              <span key={tech} className="rounded-lg border border-border/60 bg-surface px-4 py-2 text-sm text-muted-foreground">
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
