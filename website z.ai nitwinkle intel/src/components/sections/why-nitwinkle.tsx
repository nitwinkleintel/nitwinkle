"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Eye,
  Lightbulb,
  Wrench,
  Target,
  ShieldCheck,
} from "lucide-react";
import { Container, SectionHeading, fadeUp, stagger } from "../site/ui-primitives";

const DIFFERENTIATORS = [
  {
    Icon: Briefcase,
    title: "Business-First Thinking",
    description:
      "We start with the business problem, not the technology. The data is a means; the decision is the end.",
  },
  {
    Icon: Eye,
    title: "Clarity",
    description:
      "We simplify complex information so decision-makers understand what matters and what doesn't.",
  },
  {
    Icon: Lightbulb,
    title: "Actionable Insight",
    description:
      "We focus on what the data means and what should happen next, not just what the numbers are.",
  },
  {
    Icon: Wrench,
    title: "Custom Solutions",
    description:
      "We build around your organization's actual needs. Not a template. Not a one-size-fits-all dashboard.",
  },
  {
    Icon: Target,
    title: "Measurable Impact",
    description:
      "Our work should support better performance, efficiency, growth or decision quality. If it doesn't, we say so.",
  },
  {
    Icon: ShieldCheck,
    title: "Professional & Trustworthy",
    description:
      "We treat data quality, confidentiality, accuracy and integrity seriously. Always.",
  },
];

const LINKS = ["Data", "Business", "Decision", "Action", "Results"];

export function WhyNitwinkle() {
  return (
    <section
      id="why-nitwinkle"
      className="relative overflow-hidden bg-mist/50 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Why Nitwinkle Intel"
          title={
            <>
              More than reports.{" "}
              <span className="text-gradient-sky">
                Intelligence for decisions.
              </span>
            </>
          }
          description="Many providers can produce charts. We focus on the connection between data, business, decision, action and results, and on building work that earns trust."
        />

        {/* The chain we connect */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2 rounded-full border border-hairline bg-white px-5 py-3 text-sm shadow-premium"
        >
          {LINKS.map((l, i) => (
            <span key={l} className="flex items-center gap-2">
              <span className="font-semibold text-navy">{l}</span>
              {i < LINKS.length - 1 && (
                <span className="text-royal" aria-hidden>
                  →
                </span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {DIFFERENTIATORS.map(({ Icon, title, description }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-hairline bg-white p-6 shadow-premium transition-all hover:-translate-y-0.5 hover:border-royal/20 hover:shadow-glow"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-white shadow-premium transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {description}
                  </p>
                </div>
              </div>
              {/* Decorative corner accent */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(56,189,248,0.18), transparent 70%)",
                }}
              />
            </motion.article>
          ))}
        </motion.div>

        {/* Mid-page CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://forms.gle/9BjQsbcfqL8PL5Az7"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-premium transition-all hover:bg-royal hover:shadow-glow"
          >
            Work With Nitwinkle Intel
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
