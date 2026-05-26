import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layers, Activity, ArrowRight } from "lucide-react";
import { useLocale, useT, localizedHref } from "../../i18n/locale";

const productIcons = [Layers, Activity];
const productHrefs = ["solsuite", null] as const;

export function ProductsPage() {
  const locale = useLocale();
  const t = useT().productsListing;

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

        <div className="grid gap-6 md:grid-cols-2">
          {t.items.map((product, i) => {
            const Icon = productIcons[i];
            const detailKey = productHrefs[i];
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group flex flex-col rounded-2xl border border-border/60 bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-elevated hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="mb-5 inline-flex w-fit rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">{product.tagline}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                {product.hasDetail && detailKey && (
                  <Link
                    to={localizedHref(locale, detailKey)}
                    className="mt-6 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    {product.learnMore}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
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
