"use client";

import { motion } from "framer-motion";
import { Database, BarChart3, BrainCircuit, Workflow } from "lucide-react";
import { Container, fadeUp, stagger } from "../site/ui-primitives";

const PILLARS = [
  {
    Icon: Database,
    title: "Data Analysis",
    blurb: "Turning scattered business data into meaningful structure.",
  },
  {
    Icon: BarChart3,
    title: "Business Intelligence",
    blurb: "A clear view of performance for the people who decide.",
  },
  {
    Icon: BrainCircuit,
    title: "Advanced Analytics",
    blurb: "Patterns, forecasts and models that surface what's next.",
  },
  {
    Icon: Workflow,
    title: "Data Automation",
    blurb: "Less manual reporting. More time for decisions that matter.",
  },
];

export function TrustStrip() {
  return (
    <section className="relative border-b border-hairline bg-white py-14 sm:py-16">
      <Container>
        {/* Value statement */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto max-w-3xl text-center text-xl font-semibold leading-snug text-navy sm:text-2xl"
        >
          Turning business data into{" "}
          <span className="text-gradient-sky">clarity</span>,{" "}
          <span className="text-gradient-sky">confidence</span>, and{" "}
          <span className="text-gradient-sky">action</span>.
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
        >
          {PILLARS.map(({ Icon, title, blurb }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group relative rounded-xl border border-hairline bg-mist/40 p-5 transition-colors hover:border-royal/20 hover:bg-white"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white shadow-premium transition-transform group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-navy">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{blurb}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
