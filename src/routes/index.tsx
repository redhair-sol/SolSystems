import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Shield,
  Cloud,
  Code2,
  Database,
  ArrowRight,
  Users,
  Clock,
  Zap,
} from "lucide-react";
import heroTech from "../assets/hero-tech.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SolSystems — Enterprise IT Solutions" },
      { name: "description", content: "SolSystems delivers cutting-edge IT infrastructure, cloud architecture, and custom software for ambitious organizations." },
      { property: "og:title", content: "SolSystems — Enterprise IT Solutions" },
      { property: "og:description", content: "SolSystems delivers cutting-edge IT infrastructure, cloud architecture, and custom software for ambitious organizations." },
    ],
  }),
  component: HomePage,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable cloud infrastructure on AWS, Azure, and GCP with enterprise-grade security and 99.99% uptime.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description: "Bespoke software solutions built with modern frameworks. From web apps to enterprise systems.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "End-to-end security audits, penetration testing, and compliance frameworks for your organization.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Data pipelines, warehousing, and analytics platforms that turn raw data into actionable intelligence.",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "12", label: "Years Experience" },
  { value: "40+", label: "Expert Engineers" },
  { value: "99.9%", label: "Uptime SLA" },
];

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroTech}
            alt="Technology visualization"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Now accepting new partnerships
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Technology that{" "}
              <span className="relative">
                <span className="text-primary">moves</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 4 Q 50 0, 100 4 T 200 4" stroke="var(--color-primary)" strokeWidth="3" fill="none" opacity="0.5" />
                </svg>
              </span>
              <br />
              business forward
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              Enterprise IT infrastructure, cloud architecture, and bespoke software — engineered for organizations that refuse to settle.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(var(--glow),0.3)]"
              >
                Explore Services
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-surface-elevated"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border/40 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">What We Do</span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Built for scale.
              <br />
              Designed for impact.
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/30 hover:bg-surface-elevated"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-lg border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
            >
              View All Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TRUST / WHY US */}
      <section className="border-t border-border/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why SolSystems</span>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                We do not just deliver code.
                <br />
                We deliver outcomes.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Every engagement starts with understanding your business goals. We align technology decisions with measurable business outcomes — not buzzwords.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {[
                { icon: Users, title: "Dedicated Teams", desc: "Senior engineers assigned to your project. No junior handoffs." },
                { icon: Clock, title: "Rapid Delivery", desc: "Agile sprints with weekly demos. See progress, not promises." },
                { icon: Zap, title: "Performance First", desc: "Architecture optimized for speed, security, and cost-efficiency." },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4 rounded-xl border border-border/60 bg-card p-5">
                  <div className="shrink-0 rounded-lg bg-primary/10 p-2.5 text-primary">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{item.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-surface to-background p-10 sm:p-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to build something extraordinary?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Let us discuss how SolSystems can accelerate your digital transformation.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_40px_rgba(var(--glow),0.35)]"
              >
                Start Your Project
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
