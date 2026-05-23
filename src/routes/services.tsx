import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Shield,
  Database,
  Server,
  Wifi,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SolSystems" },
      { name: "description", content: "Explore our comprehensive IT services: cloud architecture, custom development, cybersecurity, and data engineering." },
      { property: "og:title", content: "Services — SolSystems" },
      { property: "og:description", content: "Explore our comprehensive IT services: cloud architecture, custom development, cybersecurity, and data engineering." },
    ],
  }),
  component: ServicesPage,
});

const allServices = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Design and implement scalable cloud infrastructure that grows with your business. We specialize in multi-cloud strategies, container orchestration, and serverless architectures.",
    features: ["AWS, Azure, GCP", "Kubernetes & Docker", "CI/CD Pipelines", "Cost Optimization", "99.99% Uptime SLA"],
  },
  {
    icon: Code2,
    title: "Custom Development",
    description: "Bespoke software solutions built from the ground up. We use modern frameworks and best practices to create applications that are fast, secure, and maintainable.",
    features: ["React & Next.js", "Node.js & Python", "Mobile Apps", "API Design", "Legacy Modernization"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your organization with comprehensive security audits, penetration testing, and compliance frameworks. We identify vulnerabilities before attackers do.",
    features: ["Penetration Testing", "Security Audits", "Compliance (GDPR, ISO)", "Incident Response", "Security Training"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Transform raw data into strategic assets. We build data pipelines, warehouses, and analytics platforms that drive informed decision-making.",
    features: ["Data Pipelines", "Data Warehousing", "Real-time Analytics", "BI Dashboards", "ML Infrastructure"],
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "End-to-end infrastructure management from network design to hardware procurement. We keep your systems running at peak performance.",
    features: ["Network Design", "Hardware Procurement", "Virtualization", "Backup & Recovery", "Monitoring & Alerts"],
  },
  {
    icon: Wifi,
    title: "DevOps & Automation",
    description: "Streamline your development workflow with automated testing, deployment, and infrastructure management. Ship faster with confidence.",
    features: ["CI/CD Automation", "Infrastructure as Code", "Automated Testing", "Release Management", "Observability"],
  },
];

function ServicesPage() {
  return (
    <div className="flex flex-col pt-24">
      <div className="mx-auto max-w-7xl px-6 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Services</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Solutions engineered
            <br />
            for your success
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            From cloud infrastructure to custom applications, we provide the technology expertise your organization needs to thrive in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex flex-col rounded-2xl border border-border/60 bg-card p-8 transition-all hover:border-primary/30 hover:bg-surface-elevated"
            >
              <div className="mb-5 inline-flex w-fit rounded-xl bg-primary/10 p-3 text-primary">
                <service.icon size={28} />
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
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-surface to-background p-10 text-center"
        >
          <h3 className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Not sure what you need?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Book a free discovery call. We will assess your current setup and recommend the right approach.
          </p>
          <Link
            to="/contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Book a Discovery Call
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
