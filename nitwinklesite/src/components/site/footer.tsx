import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { Logo } from "./logo";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  { label: "Data Analysis", href: "#services" },
  { label: "Business Intelligence", href: "#services" },
  { label: "Data Visualization", href: "#services" },
  { label: "Data Science", href: "#services" },
  { label: "Data Automation", href: "#services" },
  { label: "AI & Advanced Analytics", href: "#services" },
  { label: "Data Consulting", href: "#services" },
];

// All social handles use the unified brand handle @nitwinkleintel
// Profile URLs are clearly marked placeholders to be replaced with real profiles.
const SOCIAL_LINKS = [
  { label: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/company/nitwinkleintel", handle: "@nitwinkleintel" },
  { label: "Instagram", Icon: Instagram, href: "https://www.instagram.com/nitwinkleintel", handle: "@nitwinkleintel" },
  { label: "Facebook", Icon: Facebook, href: "https://www.facebook.com/nitwinkleintel", handle: "@nitwinkleintel" },
  { label: "X / Twitter", Icon: Twitter, href: "https://twitter.com/nitwinkleintel", handle: "@nitwinkleintel" },
  { label: "YouTube", Icon: Youtube, href: "https://www.youtube.com/@nitwinkleintel", handle: "@nitwinkleintel" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-navy text-white">
      {/* Ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(700px 300px at 12% 0%, rgba(37,99,235,0.18), transparent 70%), radial-gradient(600px 300px at 90% 30%, rgba(15,157,154,0.16), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-navy opacity-40"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        {/* Top: brand + CTA row */}
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" motto />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Transforming business data into clear intelligence for better
              decisions, measurable performance and sustainable growth.
            </p>
            <a
              href="mailto:nitwinkleintel@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              nitwinkleintel@gmail.com
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            </a>
          </div>

          <FooterColumn title="Navigation" links={NAV_LINKS} />
          <FooterColumn title="Services" links={SERVICE_LINKS} />
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/45">
              Connect
            </h4>
            <ul className="mt-5 space-y-3">
              {SOCIAL_LINKS.map(({ label, Icon, href, handle }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] transition-colors group-hover:border-sky/40 group-hover:bg-sky/10">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      {label}
                      <span className="ml-2 text-xs text-white/40">{handle}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-start justify-between gap-4 pt-7 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© 2026 Nitwinkle Intel. All rights reserved.</p>
          <p className="font-medium tracking-[0.18em] text-white/40 uppercase">
            From Data to Informed Decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/45">
        {title}
      </h4>
      <ul className="mt-5 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-white/65 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
