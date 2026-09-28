"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Landmark,
  Truck,
  HeartPulse,
  GraduationCap,
  Briefcase,
  Cpu,
  Globe2,
  Building2,
} from "lucide-react";
import { Container, SectionHeading, fadeUp, stagger } from "../site/ui-primitives";

const INDUSTRIES = [
  {
    Icon: ShoppingBag,
    title: "E-commerce & Retail",
    blurb: "Sales performance, customer behaviour, inventory and growth signals.",
  },
  {
    Icon: Landmark,
    title: "Financial Services",
    blurb: "Risk, performance and the clarity that finance teams depend on.",
  },
  {
    Icon: Truck,
    title: "Logistics & Supply Chain",
    blurb: "Operational visibility, bottlenecks and efficiency opportunities.",
  },
  {
    Icon: HeartPulse,
    title: "Healthcare",
    blurb: "Operational, clinical and patient-data intelligence, handled with care.",
  },
  {
    Icon: GraduationCap,
    title: "Education",
    blurb: "Enrolment, performance and operational insight for institutions.",
  },
  {
    Icon: Briefcase,
    title: "Professional Services",
    blurb: "Utilization, profitability and client intelligence for service firms.",
  },
  {
    Icon: Cpu,
    title: "Technology & Startups",
    blurb: "Product, growth and operational analytics for scaling teams.",
  },
  {
    Icon: Globe2,
    title: "NGOs & Development",
    blurb: "Impact, programme and operations data, turned into evidence.",
  },
  {
    Icon: Building2,
    title: "Public Sector",
    blurb: "Performance, planning and decision intelligence for institutions.",
  },
];

export function Industries() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title={
            <>
              Data intelligence across{" "}
              <span className="text-gradient-sky">industries</span>.
            </>
          }
          description="We work with organizations at different stages of growth, not only large corporations. The questions change; the discipline doesn't."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map(({ Icon, title, blurb }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group relative flex items-start gap-4 rounded-xl border border-hairline bg-mist/30 p-5 transition-all hover:-translate-y-0.5 hover:border-royal/20 hover:bg-white hover:shadow-premium"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-hairline bg-white text-navy shadow-premium transition-colors group-hover:border-royal/30 group-hover:text-royal">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-navy">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {blurb}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-10 max-w-2xl text-center text-xs text-slate-500"
        >
          We do not exclusively serve these sectors. If your business has
          data and decisions to make, we should talk.
        </motion.p>
      </Container>
    </section>
  );
}
