"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  Loader2,
  Building2,
  User,
  Phone,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import { Container, SectionHeading, fadeUp, stagger } from "../site/ui-primitives";

const HELP_OPTIONS = [
  "Data Analysis",
  "Business Intelligence",
  "Data Visualization",
  "Data Science / Predictive",
  "Data Automation",
  "AI & Advanced Analytics",
  "Data Consulting & Strategy",
  "Not sure yet",
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    // Simulated async submission: wire up to real backend later.
    setTimeout(() => setStatus("success"), 900);
  }

  return (
    <section id="contact" className="relative bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left: copy + email */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title={
                <>
                  Start a{" "}
                  <span className="text-gradient-sky">conversation</span>.
                </>
              }
              description="Tell us what your business is trying to figure out. We'll help you map the questions that matter to the data and analytics that can answer them."
            />

            <motion.div
              variants={fadeUp}
              className="mt-8 rounded-2xl border border-hairline bg-navy p-6 text-white shadow-premium"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sky">
                Email us directly
              </p>
              <a
                href="mailto:nitwinkleintel@gmail.com"
                className="mt-3 inline-flex items-center gap-3 text-lg font-semibold transition-colors hover:text-sky"
              >
                <Mail className="h-5 w-5 text-sky" />
                nitwinkleintel@gmail.com
              </a>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                Prefer email? Send us a short note about your business and what
                you're trying to understand. We'll reply with a clear next step.
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-xs leading-relaxed text-slate-500"
            >
              We respond to most inquiries within one business day. All
              conversations are confidential.
            </motion.p>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-hairline bg-mist/40 p-6 shadow-premium sm:p-8"
          >
            {status === "success" ? (
              <SuccessState onReset={() => setStatus("idle")} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="name"
                    label="Full Name"
                    Icon={User}
                    placeholder="Jane Doe"
                    required
                  />
                  <Field
                    id="org"
                    label="Business / Organization"
                    Icon={Building2}
                    placeholder="Acme Ltd."
                    required
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="email"
                    type="email"
                    label="Email"
                    Icon={Mail}
                    placeholder="jane@acme.com"
                    required
                  />
                  <Field
                    id="phone"
                    type="tel"
                    label="Phone Number"
                    Icon={Phone}
                    placeholder="+1 555 000 0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="help"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600"
                  >
                    <HelpCircle className="mr-1.5 inline h-3.5 w-3.5 text-slate-400" />
                    What do you need help with?
                  </label>
                  <select
                    id="help"
                    name="help"
                    defaultValue=""
                    className="h-11 w-full rounded-lg border border-hairline bg-white px-3 text-sm text-navy outline-none transition-colors focus:border-royal focus:ring-2 focus:ring-royal/15"
                  >
                    <option value="" disabled>
                      Select a service area…
                    </option>
                    {HELP_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600"
                  >
                    <MessageSquare className="mr-1.5 inline h-3.5 w-3.5 text-slate-400" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us a little about your business and the questions you're trying to answer…"
                    className="w-full rounded-lg border border-hairline bg-white px-3 py-2.5 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-royal focus:ring-2 focus:ring-royal/15"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-premium transition-all hover:bg-royal hover:shadow-glow disabled:opacity-70 sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Start a Conversation
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-500">
                  By submitting this form, you agree to be contacted by
                  Nitwinkle Intel about your inquiry. We respect your privacy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  id,
  label,
  Icon,
  placeholder,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600"
      >
        <Icon className="mr-1.5 inline h-3.5 w-3.5 text-slate-400" />
        {label}
        {required && <span className="ml-1 text-royal">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-11 w-full rounded-lg border border-hairline bg-white px-3 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-royal focus:ring-2 focus:ring-royal/15"
      />
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal/15 text-teal"
      >
        <CheckCircle2 className="h-7 w-7" />
      </motion.div>
      <h3 className="mt-5 text-lg font-semibold text-navy">
        Thank you. Message received.
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
        We'll get back to you within one business day. For anything urgent,
        email{" "}
        <a
          href="mailto:nitwinkleintel@gmail.com"
          className="font-medium text-royal hover:underline"
        >
          nitwinkleintel@gmail.com
        </a>
        .
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-mist"
      >
        Send another message
      </button>
    </div>
  );
}
