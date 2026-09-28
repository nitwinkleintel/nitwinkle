"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  LineChart,
  Activity,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Container } from "../site/ui-primitives";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-radial-navy pt-28 pb-16 text-white sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Subtle grid overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-navy opacity-50" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* ---------- Left: copy ---------- */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Data Intelligence &amp; Business Analytics
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              From{" "}
              <span className="text-gradient-brand">data</span>
              <br className="hidden sm:block" /> to informed{" "}
              <span className="text-gradient-sky">decisions.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/65 sm:text-lg"
            >
              Nitwinkle Intel transforms complex business data into clear
              intelligence, helping organizations understand what matters,
              decide with confidence, and improve performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="https://forms.gle/9BjQsbcfqL8PL5Az7"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white shadow-premium transition-all hover:bg-white hover:text-navy"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/[0.08]"
              >
                Explore Our Services
              </a>
            </motion.div>

            {/* Mini trust line: no fake stats */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 text-xs text-white/45"
            >
              A business data intelligence partner. Not just dashboards.
            </motion.p>
          </div>

          {/* ---------- Right: intelligence visualization ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <IntelligenceVisual reduce={!!reduce} />
          </motion.div>
        </div>
      </Container>

      {/* Bottom fade into next section */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white"
      />
    </section>
  );
}

/* ============================================================
   Intelligence visualization
   A premium, abstract "data → analysis → insight → decision" panel.
   Not a cluttered dashboard. Quiet, credible, brand-aligned.
   ============================================================ */
function IntelligenceVisual({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-60"
        style={{
          background:
            "radial-gradient(400px 200px at 30% 20%, rgba(56,189,248,0.18), transparent 70%), radial-gradient(400px 200px at 80% 80%, rgba(15,157,154,0.18), transparent 70%)",
        }}
      />

      <div className="glass-card relative overflow-hidden rounded-2xl p-5 shadow-glow">
        {/* Window chrome */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/40">
            Intelligence View
          </span>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3">
          <KpiCard
            label="Revenue"
            value="▲ 12.4%"
            sub="vs last period"
            Icon={TrendingUp}
            tone="royal"
          />
          <KpiCard
            label="Customers"
            value="8,420"
            sub="active"
            Icon={Activity}
            tone="teal"
          />
          <KpiCard
            label="Forecast"
            value="94%"
            sub="confidence"
            Icon={BarChart3}
            tone="sky"
          />
        </div>

        {/* Flow diagram: RAW → ANALYSIS → INSIGHT → DECISION */}
        <div className="mt-5 rounded-xl border border-white/8 bg-navy-soft/40 p-4">
          <div className="mb-3 flex items-center justify-between text-[0.6rem] font-medium uppercase tracking-[0.18em] text-white/40">
            <span>Decision Pipeline</span>
            <span className="inline-flex items-center gap-1 text-sky">
              <span className="h-1.5 w-1.5 rounded-full bg-sky animate-pulse-node" />
              live
            </span>
          </div>

          <FlowDiagram reduce={reduce} />
        </div>

        {/* Mini trend chart */}
        <div className="mt-4 rounded-xl border border-white/8 bg-navy-soft/40 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-xs text-white/70">
              <LineChart className="h-3.5 w-3.5 text-sky" />
              Performance trend
            </span>
            <span className="text-[0.65rem] text-white/40">7-week moving avg</span>
          </div>
          <Sparkline reduce={reduce} />
        </div>
      </div>
    </div>
  );
}

function KpiCard({
  label,
  value,
  sub,
  Icon,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  Icon: React.ComponentType<{ className?: string }>;
  tone: "royal" | "teal" | "sky";
}) {
  const toneClasses = {
    royal: "text-royal",
    teal: "text-teal",
    sky: "text-sky",
  }[tone];

  const iconBg = {
    royal: "bg-royal/15",
    teal: "bg-teal/15",
    sky: "bg-sky/15",
  }[tone];

  return (
    <div className="rounded-lg border border-white/8 bg-white/[0.03] p-3">
      <div className="flex items-center justify-between">
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white/45">
          {label}
        </span>
        <span className={`inline-flex h-6 w-6 items-center justify-center rounded-md ${iconBg} ${toneClasses}`}>
          <Icon className="h-3.5 w-3.5" />
        </span>
      </div>
      <p className={`mt-2 text-base font-semibold ${toneClasses}`}>{value}</p>
      <p className="text-[0.65rem] text-white/40">{sub}</p>
    </div>
  );
}

function FlowDiagram({ reduce }: { reduce: boolean }) {
  const steps = ["Raw Data", "Analysis", "Insight", "Decision"];
  return (
    <div className="flex items-center">
      {steps.map((s, i) => (
        <div key={s} className="flex flex-1 items-center">
          <div className="flex-1">
            <div
              className={`relative mx-auto flex h-9 w-9 items-center justify-center rounded-full border ${
                i === steps.length - 1
                  ? "border-sky bg-sky/15 text-sky"
                  : "border-white/15 bg-white/[0.04] text-white/70"
              } ${!reduce ? "animate-pulse-node" : ""}`}
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <span className="text-[0.6rem] font-bold">{i + 1}</span>
            </div>
            <p className="mt-1.5 text-center text-[0.6rem] font-medium text-white/55">
              {s}
            </p>
          </div>
          {i < steps.length - 1 && (
            <div className="relative mx-1 h-px flex-1 overflow-hidden bg-white/10">
              {!reduce && (
                <motion.div
                  className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky to-transparent"
                  animate={{ x: ["-100%", "400%"] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Sparkline({ reduce }: { reduce: boolean }) {
  // Pre-composed path so it stays crisp and avoids runtime math errors
  const path = "M0 38 L20 32 L40 36 L60 22 L80 26 L100 14 L120 18 L140 6 L160 10 L180 0";
  return (
    <svg
      viewBox="0 0 180 42"
      className="h-12 w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="ni-spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ni-spark-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0F9D9A" />
        </linearGradient>
      </defs>
      <path
        d={`${path} L180 42 L0 42 Z`}
        fill="url(#ni-spark-fill)"
      />
      <motion.path
        d={path}
        fill="none"
        stroke="url(#ni-spark-stroke)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
      />
      {/* End dot */}
      <motion.circle
        cx="180"
        cy="0"
        r="2.5"
        fill="#0F9D9A"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.4 }}
      />
    </svg>
  );
}
