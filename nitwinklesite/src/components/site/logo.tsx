import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "light" | "dark";
  motto?: boolean;
}

/**
 * Nitwinkle Intel logo: original SVG monogram.
 * Two-tone "data node" mark with brand gradient stroke.
 * Used in navbar (light) and footer (light & dark contexts).
 */
export function Logo({
  className,
  showText = true,
  variant = "dark",
  motto = false,
}: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-white/55" : "text-slate-500";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          className="h-9 w-9"
          role="img"
          aria-label="Nitwinkle Intel logo"
        >
          <defs>
            <linearGradient id="ni-logo-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="55%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#0F9D9A" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="7" fill="#0B1324" />
          <path
            d="M9 22 V10 L23 22 V10"
            fill="none"
            stroke="url(#ni-logo-grad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="10" r="1.6" fill="#38BDF8" />
          <circle cx="23" cy="22" r="1.6" fill="#0F9D9A" />
        </svg>
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className={cn("text-[0.95rem] font-semibold tracking-[0.18em]", textColor)}>
            NITWINKLE <span className="text-gradient-sky">INTEL</span>
          </span>
          {motto && (
            <span className={cn("mt-1 text-[0.55rem] font-medium tracking-[0.22em] uppercase", subColor)}>
              From Data to Informed Decisions
            </span>
          )}
        </span>
      )}
    </div>
  );
}
