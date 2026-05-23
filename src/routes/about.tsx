import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Award, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SolSystems" },
      { name: "description", content: "Learn about SolSystems — our mission, values, and the team behind our enterprise IT solutions." },
      { property: "og:title", content: "About — SolSystems" },
      { property: "og:description", content: "Learn about SolSystems — our mission, values, and the team behind our enterprise IT solutions." },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Target,
    title: "Outcome-Driven",
    description: "We measure success by the business results we deliver, not the lines of code we write.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of technology curves so our clients do not have to worry about falling behind.",
  },
  {
    icon: Heart,
    title: "Partnership Mindset",
    description: "We function as an extension of your team — invested in your long-term success.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "No shortcuts. No technical debt left behind. Every solution is built to last.",
  },
];

function AboutPage() {
  return (
    <div className="flex flex-col pt-24">
      <div className="mx-auto max-w-7xl px-6 pb-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Technology partners,
            <br />
            not just vendors
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Founded in 2013, SolSystems has grown from a small team of passionate engineers into a trusted technology partner for organizations across Europe and beyond.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We believe that great technology is invisible — it just works. Our mission is to build systems so reliable and intuitive that our clients forget about the complexity underneath.
          </p>
        </motion.div>

        {/* Story Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/60 bg-card p-8 sm:p-10"
          >
            <h2 className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                What started as a two-person operation in a small Athens apartment has evolved into a full-service technology consultancy serving enterprise clients across fintech, healthcare, logistics, and e-commerce.
              </p>
              <p>
                Over 12 years, we have learned that the best technology solutions are born from deep collaboration. We do not parachute in, deliver a report, and leave. We embed with your team, understand your constraints, and co-create solutions that actually get adopted.
              </p>
              <p>
                Today, our team of 40+ engineers, architects, and security specialists operates from offices in Athens and remotely across Europe — delivering the same hands-on, high-touch service that defined our earliest projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-border/60 bg-card p-8 sm:p-10">
              <h3 className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Approach</h3>
              <ol className="mt-6 space-y-4">
                {[
                  "Deep discovery — we understand your business before touching any code",
                  "Architectural clarity — we design before we build, always",
                  "Iterative delivery — weekly demos, not quarterly surprises",
                  "Knowledge transfer — your team owns the solution when we are done",
                ].map((step, i) => (
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
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-center text-3xl font-bold sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            What We Stand For
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-border/60 bg-card p-6 text-center transition-all hover:border-primary/30 hover:bg-surface-elevated"
              >
                <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <value.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-surface to-background p-10 text-center"
        >
          <h3 className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Want to work with us?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            We are always looking for ambitious partners with interesting challenges.
          </p>
          <Link
            to="/contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Get in Touch
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
