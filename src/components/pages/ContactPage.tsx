import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useT } from "../../i18n/locale";

const infoIcons = [Mail, MapPin, Clock];

export function ContactPage() {
  const t = useT().contact;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const infoItems = [
    { label: t.info.emailLabel, value: t.info.emailValue },
    { label: t.info.locationLabel, value: t.info.locationValue },
    { label: t.info.responseLabel, value: t.info.responseValue },
  ];

  return (
    <div className="flex flex-col pt-24">
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">{t.eyebrow}</span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {t.titleLine1}
              <br />
              {t.titleLine2}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">{t.intro}</p>

            <div className="mt-10 space-y-6">
              {infoItems.map((item, i) => {
                const Icon = infoIcons[i];
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.label}</div>
                      <div className="text-sm font-medium text-foreground">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/20 bg-card p-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 size={32} className="text-primary" />
                </div>
                <h3 className="mt-6 text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {t.success.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{t.success.subtitle}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border/60 bg-card p-8 sm:p-10">
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground">{t.form.name}</label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder={t.form.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">{t.form.email}</label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder={t.form.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground">{t.form.company}</label>
                    <input
                      id="company"
                      type="text"
                      className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder={t.form.companyPlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground">{t.form.service}</label>
                    <select
                      id="service"
                      className="mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="">{t.form.serviceSelect}</option>
                      <option value="cloud">{t.form.serviceOptions.cloud}</option>
                      <option value="development">{t.form.serviceOptions.development}</option>
                      <option value="security">{t.form.serviceOptions.security}</option>
                      <option value="data">{t.form.serviceOptions.data}</option>
                      <option value="other">{t.form.serviceOptions.other}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">{t.form.message}</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="mt-2 block w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder={t.form.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(var(--glow),0.3)]"
                  >
                    <Send size={16} />
                    {t.form.send}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
