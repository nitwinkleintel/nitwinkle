"use client";

import { motion } from "framer-motion";
import {
  Search,
  Database,
  LineChart,
  Brain,
  Presentation,
  GitBranch,
  TrendingUp,
} from "lucide-react";
import { Container, SectionHeading, fadeUp, stagger } from "../site/ui-primitives";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    Icon: Search,
    description:
      "Understand the business, its objectives, its challenges and the decisions that actually matter.",
  },
  {
    num: "02",
    title: "Collect",
    Icon: Database,
    description:
      "Identify, organize and prepare the relevant data, making it usable, reliable and complete.",
  },
  {
    num: "03",
    title: "Analyze",
    Icon: LineChart,
    description:
      "Apply appropriate analytical techniques to uncover patterns, drivers and performance signals.",
  },
  {
    num: "04",
    title: "Interpret",
    Icon: Brain,
    description:
      "Translate analytical findings into clear business meaning: what the numbers actually say.",
  },
  {
    num: "05",
    title: "Inform",
    Icon: Presentation,
    description:
      "Present insights clearly to decision-makers, in a form they can act on with confidence.",
  },
  {
    num: "06",
    title: "Decide",
    Icon: GitBranch,
    description:
      "Support evidence-based business decisions, connecting intelligence to action.",
  },
  {
    num: "07",
    title: "Improve",
    Icon: TrendingUp,
    description:
      "Measure outcomes, learn and continuously improve the intelligence and the decisions it enables.",
  },
];

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              The Intel Decision Intelligence{" "}
              <span className="text-gradient-sky">Cycle™</span>
            </>
          }
          description="A structured, repeatable framework that connects data to the decisions your business needs to make, and to the outcomes those decisions produce."
        />

        {/* Desktop: circular layout with center node */}
        <div className="relative mt-16 hidden lg:block">
          <CircleLayout />
        </div>

        {/* Mobile/tablet: vertical timeline */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-3 sm:grid-cols-2 lg:hidden"
        >
          {STEPS.map(({ num, title, Icon, description }) => (
            <motion.div
              key={num}
              variants={fadeUp}
              className="relative rounded-xl border border-hairline bg-mist/40 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[0.65rem] font-bold tracking-[0.18em] text-slate-400">
                    {num}
                  </p>
                  <h3 className="text-base font-semibold text-navy">{title}</h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

/* ============== Desktop circular layout ============== */
function CircleLayout() {
  // Position the 7 steps around a circle. The 8th slot is the center node.
  const radius = 220; // px
  const stepCount = STEPS.length;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[680px]">
      {/* Connecting ring */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 680 680"
        aria-hidden
      >
        <defs>
          <linearGradient id="ni-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0F9D9A" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <circle
          cx="340"
          cy="340"
          r="220"
          fill="none"
          stroke="url(#ni-ring)"
          strokeWidth="1.4"
          strokeDasharray="4 6"
        />
      </svg>

      {/* Center node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute left-1/2 top-1/2 z-10 flex w-[200px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-2xl border border-royal/20 bg-white p-5 text-center shadow-glow"
      >
        <div className="flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-royal">
          <span className="h-1.5 w-1.5 rounded-full bg-royal animate-pulse-node" />
          The Cycle
        </div>
        <p className="mt-2 text-base font-bold text-navy">
          Decision Intelligence
        </p>
        <p className="mt-1 text-xs leading-relaxed text-slate-600">
          Data → Intelligence → Insight → Decision → Action → Improvement
        </p>
      </motion.div>

      {/* Step nodes */}
      {STEPS.map((step, i) => {
        const angle = (i / stepCount) * 2 * Math.PI - Math.PI / 2; // start at top
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            className="absolute left-1/2 top-1/2 z-20 w-[160px] -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <StepNode {...step} />
          </motion.div>
        );
      })}
    </div>
  );
}

function StepNode({
  num,
  title,
  Icon,
  description,
}: {
  num: string;
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  description: string;
}) {
  return (
    <div className="group rounded-xl border border-hairline bg-white p-3 shadow-premium transition-all hover:-translate-y-0.5 hover:border-royal/30 hover:shadow-glow">
      <div className="flex items-center gap-2.5">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white transition-colors group-hover:bg-royal">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <div className="leading-tight">
          <p className="text-[0.6rem] font-bold tracking-[0.18em] text-slate-400">
            {num}
          </p>
          <p className="text-sm font-semibold text-navy">{title}</p>
        </div>
      </div>
      <p className="mt-2 text-[0.7rem] leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
