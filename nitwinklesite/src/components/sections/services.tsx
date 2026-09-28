"use client";

import { motion } from "framer-motion";
import {
  Database,
  LayoutDashboard,
  PieChart,
  Brain,
  Workflow,
  Sparkles,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { Container, SectionHeading, fadeUp, stagger } from "../site/ui-primitives";

const SERVICES = [
  {
    Icon: Database,
    num: "01",
    title: "Data Analysis",
    description:
      "Transform raw business data into meaningful insights that explain what is happening and why.",
    examples: [
      "Exploratory data analysis",
      "Performance analysis",
      "Customer analysis",
      "Sales & financial analysis",
      "Statistical analysis",
    ],
    outcome: "Know what is actually happening in your business.",
  },
  {
    Icon: LayoutDashboard,
    num: "02",
    title: "Business Intelligence",
    description:
      "Give decision-makers a clear, current view of business performance, built around the metrics that matter.",
    examples: [
      "Executive dashboards",
      "KPI dashboards",
      "Business reporting",
      "Performance monitoring",
      "Management information systems",
    ],
    outcome: "One source of truth for the people who decide.",
  },
  {
    Icon: PieChart,
    num: "03",
    title: "Data Visualization",
    description:
      "Make complex information easy to understand and easy to act on, through clear visual storytelling.",
    examples: [
      "Interactive visualizations",
      "Executive reports",
      "Data storytelling",
      "KPI visualization",
      "Performance reports",
    ],
    outcome: "Numbers people actually understand and use.",
  },
  {
    Icon: Brain,
    num: "04",
    title: "Data Science & Predictive Analytics",
    description:
      "Use advanced analytical techniques to identify patterns and support better forecasting.",
    examples: [
      "Forecasting",
      "Predictive modelling",
      "Customer analytics",
      "Risk analysis",
      "Trend analysis",
      "Advanced statistical modelling",
    ],
    outcome: "See what's likely coming. And prepare for it.",
  },
  {
    Icon: Workflow,
    num: "05",
    title: "Data Automation",
    description:
      "Reduce repetitive manual reporting and improve operational efficiency across your teams.",
    examples: [
      "Automated reporting",
      "Data pipelines",
      "Workflow automation",
      "Automated dashboards",
      "Data integration",
    ],
    outcome: "Less time on reporting. More time on decisions.",
  },
  {
    Icon: Sparkles,
    num: "06",
    title: "AI & Advanced Analytics",
    description:
      "Identify opportunities and make smarter decisions using modern analytical and AI techniques.",
    examples: [
      "Opportunity identification",
      "Decision intelligence",
      "Pattern recognition",
      "Anomaly detection",
      "AI-assisted analytics",
    ],
    outcome: "Decisions supported by intelligence, not guesswork.",
  },
  {
    Icon: Compass,
    num: "07",
    title: "Data Consulting & Strategy",
    description:
      "Establish better data practices, analytics systems, KPI frameworks and decision-making processes.",
    examples: [
      "Data strategy",
      "KPI frameworks",
      "Analytics systems design",
      "Decision-making processes",
      "Data governance & quality",
    ],
    outcome: "A data function that supports the business. Not the other way around.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-mist/50 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Intelligence built around{" "}
              <span className="text-gradient-sky">your business</span>.
            </>
          }
          description="A full-spectrum data intelligence practice, from analysis and dashboards to predictive modelling, automation and strategy. Each service connects data to a real business outcome."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}

          {/* CTA card */}
          <motion.div
            variants={fadeUp}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-navy/10 bg-navy p-6 text-white shadow-premium"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(220px 130px at 100% 0%, rgba(56,189,248,0.22), transparent 70%), radial-gradient(220px 130px at 0% 100%, rgba(15,157,154,0.18), transparent 70%)",
              }}
            />
            <div className="relative">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky">
                Not sure where to start?
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-snug">
                Tell us what your business is trying to figure out.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                We'll help you map the questions that matter to the data and
                analytics that can answer them.
              </p>
            </div>
            <a
              href="https://forms.gle/9BjQsbcfqL8PL5Az7"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky transition-colors hover:text-white"
            >
              Discuss your data needs
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function ServiceCard({
  Icon,
  num,
  title,
  description,
  examples,
  outcome,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  num: string;
  title: string;
  description: string;
  examples: string[];
  outcome: string;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white p-6 shadow-premium transition-all hover:-translate-y-0.5 hover:border-royal/20 hover:shadow-glow"
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white shadow-premium transition-transform group-hover:scale-105">
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-[0.7rem] font-bold tracking-[0.18em] text-slate-300">
          {num}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      {/* Examples */}
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {examples.map((ex) => (
          <li
            key={ex}
            className="rounded-full bg-mist px-2.5 py-1 text-[0.7rem] font-medium text-slate-600"
          >
            {ex}
          </li>
        ))}
      </ul>

      {/* Outcome */}
      <div className="mt-5 border-t border-hairline pt-4">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-royal">
          Business outcome
        </p>
        <p className="mt-1 text-sm font-medium text-navy">{outcome}</p>
      </div>
    </motion.article>
  );
}
