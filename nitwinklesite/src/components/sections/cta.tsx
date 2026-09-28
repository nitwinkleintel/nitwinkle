"use client";

import { motion } from "framer-motion";
import { CalendarCheck, MessageSquare, ArrowRight } from "lucide-react";
import { Container, fadeUp, stagger } from "../site/ui-primitives";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="relative isolate overflow-hidden rounded-3xl border border-navy/10 bg-radial-navy px-6 py-14 text-center text-white shadow-glow sm:px-12 sm:py-20"
        >
          {/* Grid overlay */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-navy opacity-50" />

          {/* Ambient glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(500px 220px at 18% 18%, rgba(56,189,248,0.18), transparent 70%), radial-gradient(500px 220px at 85% 80%, rgba(15,157,154,0.18), transparent 70%)",
            }}
          />

          <div className="relative">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky backdrop-blur"
            >
              Let's talk
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.6rem]"
            >
              Your data already knows more about your business than you think.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg"
            >
              Let's turn it into intelligence you can act on.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <a
                href="https://forms.gle/9BjQsbcfqL8PL5Az7"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy shadow-premium transition-all hover:bg-sky hover:text-white"
              >
                <CalendarCheck className="h-4 w-4" />
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://forms.gle/9BjQsbcfqL8PL5Az7"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/[0.08]"
              >
                <MessageSquare className="h-4 w-4" />
                Talk to Nitwinkle Intel
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
