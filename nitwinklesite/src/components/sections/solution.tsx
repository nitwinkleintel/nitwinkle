"use client";

import { motion } from "framer-motion";
import {
  Database,
  Search,
  Brain,
  Lightbulb,
  MousePointerClick,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { Container, SectionHeading, fadeUp, stagger } from "../site/ui-primitives";

const FLOW = [
  { Icon: Database, label: "Raw Data", tone: "slate" },
  { Icon: Search, label: "Analysis", tone: "royal" },
  { Icon: Brain, label: "Intelligence", tone: "sky" },
  { Icon: Lightbulb, label: "Insight", tone: "teal" },
  { Icon: MousePointerClick, label: "Decision", tone: "royal" },
  { Icon: Rocket, label: "Business Action", tone: "sky" },
  { Icon: TrendingUp, label: "Improved Performance", tone: "teal" },
];

const toneMap: Record<string, string> = {
  slate: "border-slate-200 bg-slate-50 text-slate-600",
  royal: "border-royal/30 bg-royal/10 text-royal",
  sky: "border-sky/30 bg-sky/10 text-sky",
  teal: "border-teal/30 bg-teal/10 text-teal",
};

export function Solution() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="The Nitwinkle solution"
          title={
            <>
              Turn <span className="text-gradient-sky">complexity</span> into{" "}
              <span className="text-gradient-sky">clarity</span>.
            </>
          }
          description="We help businesses move from fragmented data to actionable intelligence, connecting what your data says to what your business should do."
        />

        {/* Horizontal flow: desktop / vertical stack on mobile */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-7 lg:gap-2">
            {FLOW.map(({ Icon, label, tone }, i) => (
              <motion.div key={label} variants={fadeUp} className="relative">
                <div
                  className={`flex h-full flex-col items-center gap-3 rounded-xl border p-4 text-center transition-transform hover:-translate-y-0.5 ${toneMap[tone]}`}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-premium">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em]">
                    {label}
                  </span>
                  <span className="text-[0.6rem] font-bold text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Connector arrow (desktop only, between cards) */}
                {i < FLOW.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-gradient-to-r from-slate-300 to-slate-200 lg:block"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-slate-600"
        >
          Every step is intentional. We don't stop at analysis. We connect
          intelligence to the decisions that move your business forward.
        </motion.p>
      </Container>
    </section>
  );
}
