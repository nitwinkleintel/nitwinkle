"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading, fadeUp, stagger } from "../site/ui-primitives";

const VALUES = ["Intelligence", "Clarity", "Accuracy", "Impact", "Integrity"];

const PILLARS = [
  "Analytical thinking",
  "Business understanding",
  "Technology",
  "Visualization",
  "Automation",
  "Advanced analytics",
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: narrative */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Nitwinkle Intel"
              title={
                <>
                  Built to make data{" "}
                  <span className="text-gradient-sky">useful</span>.
                </>
              }
              description="Nitwinkle Intel is a Data Intelligence & Business Analytics company focused on helping organizations turn data into informed decisions."
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-600"
            >
              Our approach combines analytical thinking with business
              understanding. We bring the right technology, visualization,
              automation and advanced analytics together. Not as a list of
              tools, but as a discipline focused on the decisions your business
              needs to make.
            </motion.p>

            {/* Approach pills */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {PILLARS.map((p) => (
                <motion.span
                  key={p}
                  variants={fadeUp}
                  className="rounded-full border border-hairline bg-mist/60 px-3 py-1.5 text-xs font-medium text-slate-700"
                >
                  {p}
                </motion.span>
              ))}
            </motion.div>

            {/* Mission & Vision */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="rounded-2xl border border-hairline bg-mist/40 p-6"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-royal">
                  Mission
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  To help businesses make informed decisions by transforming
                  data into clear, actionable intelligence.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="rounded-2xl border border-hairline bg-mist/40 p-6"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-teal">
                  Vision
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  To become a trusted data intelligence company helping
                  businesses across Africa and global markets make better
                  decisions through data.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right: values card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative overflow-hidden rounded-2xl border border-navy/10 bg-navy p-7 text-white shadow-premium"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(300px 200px at 100% 0%, rgba(56,189,248,0.16), transparent 70%), radial-gradient(300px 200px at 0% 100%, rgba(15,157,154,0.16), transparent 70%)",
              }}
            />
            <div className="relative">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sky">
                What we stand for
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-snug">
                Five values, applied to every engagement.
              </h3>
              <ul className="mt-6 space-y-3">
                {VALUES.map((v, i) => (
                  <li
                    key={v}
                    className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-royal/20 text-[0.65rem] font-bold text-sky">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-white/85">{v}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-white/45">
                We treat data quality, confidentiality, accuracy and integrity
                seriously. And we hold ourselves to the same standard we hold
                the work.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
