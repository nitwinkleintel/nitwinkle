"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

/* ---------- animation variants ---------- */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/* ---------- Eyebrow ---------- */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em]",
        tone === "light"
          ? "border border-hairline bg-mist/60 text-slate-600"
          : "border border-white/10 bg-white/[0.04] text-sky",
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "light" ? "bg-royal" : "bg-sky"
        )}
      />
      {children}
    </span>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className={cn(
          "max-w-3xl text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.7rem]",
          tone === "light" ? "text-navy" : "text-white"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-slate-600" : "text-white/65"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

/* ---------- CTA buttons ---------- */
export function PrimaryCTA({
  href = "#contact",
  children,
  className,
  icon = true,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  icon?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white shadow-premium transition-all hover:bg-navy hover:shadow-glow",
        className
      )}
    >
      {children}
      {icon && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </a>
  );
}

export function SecondaryCTA({
  href = "#services",
  children,
  className,
  tone = "light",
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-all",
        tone === "light"
          ? "border-navy/15 bg-white text-navy hover:border-navy/30 hover:bg-mist"
          : "border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]",
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

/* ---------- Section wrapper ---------- */
export function Section({
  id,
  children,
  className,
  tone = "light",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 py-16 sm:py-20 lg:py-24",
        tone === "dark" ? "bg-navy text-white" : "bg-white text-navy",
        className
      )}
    >
      {children}
    </section>
  );
}

/* ---------- Container ---------- */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
