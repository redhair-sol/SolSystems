import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Award, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLocale, useT, localizedHref } from "../../i18n/locale";

const valueIcons = [Target, Lightbulb, Heart, Award];

export function AboutPage() {
  const locale = useLocale();
  const t = useT().about;

  return (
    <div className="flex flex-col pt-24">
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">{t.eyebrow}</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.titleLine1}
            <br />
            {t.titleLine2}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.intro}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-2xl border border-border/60 bg-card p-8 sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {t.approach.title}
            </h2>
            <ol className="mt-6 space-y-4">
              {t.approach.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-center text-3xl font-bold sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.valuesHeading}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-2xl border border-border/60 bg-card p-6 text-center transition-all hover:border-primary/30 hover:bg-surface-elevated"
                >
                  <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-surface to-background p-10 text-center"
        >
          <h3 className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.cta.title}
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{t.cta.subtitle}</p>
          <Link
            to={localizedHref(locale, "contact")}
            className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            {t.cta.button}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
