"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { Container, SectionHeading, fadeUp, stagger } from "../site/ui-primitives";

const ARTICLES = [
  {
    title: "5 Business Questions Your Data Should Answer",
    excerpt:
      "Most businesses don't need more dashboards. They need answers to a handful of questions that actually shape decisions.",
    category: "Decision Intelligence",
    read: "5 min read",
  },
  {
    title: "Why Businesses Need More Than Dashboards",
    excerpt:
      "A dashboard shows you what is happening. It rarely tells you what to do next. Here's what comes after visualization.",
    category: "Business Intelligence",
    read: "6 min read",
  },
  {
    title: "How Data Can Improve Operational Performance",
    excerpt:
      "Operational data is often the most underused asset in a business. Here's how to turn it into measurable efficiency.",
    category: "Operations",
    read: "7 min read",
  },
  {
    title: "From Reporting to Decision Intelligence",
    excerpt:
      "Reporting looks backward. Decision intelligence looks forward. Here's the shift every growing business needs to make.",
    category: "Strategy",
    read: "8 min read",
  },
  {
    title: "Using Business Data to Identify Growth Opportunities",
    excerpt:
      "Growth signals are usually already in your data, hidden in customers, segments, channels and trends you're not watching.",
    category: "Growth Analytics",
    read: "6 min read",
  },
];

export function Insights() {
  return (
    <section
      id="insights"
      className="relative bg-mist/50 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Insights"
          title={
            <>
              Thinking on data,{" "}
              <span className="text-gradient-sky">decisions</span> and growth.
            </>
          }
          description="Practical perspectives for leaders who want to get more from their data, without the jargon."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ARTICLES.map((a, i) => (
            <motion.article
              key={a.title}
              variants={fadeUp}
              className={
                i === 0
                  ? "group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white p-6 shadow-premium transition-all hover:-translate-y-0.5 hover:border-royal/20 hover:shadow-glow sm:col-span-2 lg:col-span-1"
                  : "group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white p-6 shadow-premium transition-all hover:-translate-y-0.5 hover:border-royal/20 hover:shadow-glow"
              }
            >
              {/* Category strip */}
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-mist px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-royal">
                  {a.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[0.65rem] text-slate-400">
                  <Clock className="h-3 w-3" />
                  {a.read}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-snug text-navy">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {a.excerpt}
              </p>

              <a
                href="#insights"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal transition-colors hover:text-navy"
              >
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.article>
          ))}

          {/* CTA card */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-between rounded-2xl border border-navy/10 bg-navy p-6 text-white"
          >
            <div>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky">
                Coming soon
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug">
                A growing library of practical thinking on data and decisions.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                This section is built to expand into a full content platform.
              </p>
            </div>
            <a
              href="https://forms.gle/9BjQsbcfqL8PL5Az7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky transition-colors hover:text-white"
            >
              Talk to us about your data
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
