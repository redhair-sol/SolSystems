import { motion } from "framer-motion";
import { Cloud, Code2, Shield, Database, Server, Wifi, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLocale, useT, localizedHref } from "../../i18n/locale";

const serviceIcons = [Cloud, Code2, Shield, Database, Server, Wifi];

export function ServicesPage() {
  const locale = useLocale();
  const t = useT().services;

  return (
    <div className="flex flex-col pt-24">
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">{t.eyebrow}</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.titleLine1}
            <br />
            {t.titleLine2}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">{t.intro}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.list.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group flex flex-col rounded-2xl border border-border/60 bg-card p-8 transition-all hover:border-primary/30 hover:bg-surface-elevated"
              >
                <div className="mb-5 inline-flex w-fit rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

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
