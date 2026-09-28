"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Zap,
  LineChart,
  FileClock,
  Cpu,
  TrendingUp,
  Users,
  Target,
  Compass,
} from "lucide-react";
import { Container, SectionHeading, fadeUp, stagger } from "../site/ui-primitives";

const OUTCOMES = [
  { Icon: Eye, label: "Clearer business performance" },
  { Icon: Zap, label: "Faster decision-making" },
  { Icon: LineChart, label: "Better visibility" },
  { Icon: FileClock, label: "Reduced reporting effort" },
  { Icon: Cpu, label: "Improved operational efficiency" },
  { Icon: TrendingUp, label: "Stronger forecasting" },
  { Icon: Users, label: "Better customer understanding" },
  { Icon: Target, label: "Identification of growth opportunities" },
  { Icon: Compass, label: "More confident strategic decisions" },
];

const CHAIN = ["Data", "Clarity", "Decision", "Performance"];

export function Outcomes() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-navy opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(600px 300px at 10% 0%, rgba(37,99,235,0.16), transparent 70%), radial-gradient(500px 300px at 90% 100%, rgba(15,157,154,0.14), transparent 70%)",
        }}
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="What you get"
          tone="dark"
          title={
            <>
              What better data decisions can{" "}
              <span className="text-gradient-brand">unlock</span>.
            </>
          }
          description="We don't only talk about what we do. We talk about what you get: outcomes that change how your business operates and decides."
        />

        {/* DATA → CLARITY → DECISION → PERFORMANCE chain */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 text-center"
        >
          {CHAIN.map((c, i) => (
            <div key={c} className="flex items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold tracking-wide backdrop-blur">
                {c}
              </span>
              {i < CHAIN.length - 1 && (
                <span className="text-sky" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Outcome cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {OUTCOMES.map(({ Icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-5 transition-colors hover:border-sky/30 hover:bg-white/[0.06]"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-royal/15 text-sky transition-transform group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium leading-snug text-white/85">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
