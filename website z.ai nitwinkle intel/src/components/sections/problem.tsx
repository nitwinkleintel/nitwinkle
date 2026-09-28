"use client";

import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  ShoppingCart,
  Wallet,
  Boxes,
  Users,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { Container, SectionHeading, fadeUp, stagger } from "../site/ui-primitives";

const SCATTERED = [
  { Icon: FileSpreadsheet, label: "Spreadsheets" },
  { Icon: ShoppingCart, label: "Sales systems" },
  { Icon: Wallet, label: "Financial records" },
  { Icon: Boxes, label: "Operations" },
  { Icon: Users, label: "Customer interactions" },
  { Icon: Megaphone, label: "Marketing platforms" },
];

const QUESTIONS = [
  "What happened?",
  "Why did it happen?",
  "What does it mean?",
  "What should we do next?",
];

export function Problem() {
  return (
    <section className="relative bg-mist/50 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title={
            <>
              Your business is generating data.{" "}
              <span className="text-gradient-sky">
                But is it generating decisions?
              </span>
            </>
          }
          description="Most organizations don't lack data. They lack clarity. Information sits in different systems, in different formats, owned by different people. And the questions that actually matter go unanswered."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: scattered data sources */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-hairline bg-white p-6 sm:p-8 shadow-premium"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Where your data lives today
            </h3>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SCATTERED.map(({ Icon, label }) => (
                <motion.li
                  key={label}
                  variants={fadeUp}
                  className="flex items-center gap-2 rounded-lg border border-hairline bg-mist/50 px-3 py-2.5"
                >
                  <Icon className="h-4 w-4 text-slate-500" />
                  <span className="text-xs font-medium text-slate-700">
                    {label}
                  </span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              Data alone does not create value. Scattered across systems, it
              becomes noise. Expensive to maintain, difficult to trust, and
              slow to inform the people who need answers.
            </p>
          </motion.div>

          {/* Right: the unanswered questions */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-hairline bg-navy p-6 text-white shadow-premium sm:p-8"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-sky">
              The questions decision-makers actually need answered
            </h3>
            <ul className="mt-6 space-y-3">
              {QUESTIONS.map((q, i) => (
                <motion.li
                  key={q}
                  variants={fadeUp}
                  className="group flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3.5"
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-royal/20 text-xs font-bold text-sky">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-white/85">{q}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:text-sky" />
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-white/55">
              When these questions stay unanswered, decisions default to
              instinct, opinion, or the loudest voice in the room.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
