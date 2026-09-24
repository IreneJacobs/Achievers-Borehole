import { cn } from "@/lib/utils";

/**
 * Brand lockup. Replace the SVG mark with the supplied Achievers logo file
 * when available — keep the same wrapper so sizing stays consistent.
 */
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0"
        role="img"
        aria-label="Achievers Geotechnical Services logo"
      >
        <rect width="40" height="40" rx="10" className="fill-navy" />
        <path
          d="M20 8.5c3.9 4.6 6.4 8.2 6.4 11.6 0 3.9-2.9 6.6-6.4 6.6s-6.4-2.7-6.4-6.6c0-3.4 2.5-7 6.4-11.6Z"
          className="fill-teal"
        />
        <path d="M20 26.7v6.1" className="stroke-accent" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M14.6 31.4h10.8" className="stroke-accent" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[0.95rem] font-bold tracking-tight",
            light ? "text-on-dark" : "text-navy-deep",
          )}
        >
          ACHIEVERS
        </span>
        <span
          className={cn(
            "mt-1 text-[0.58rem] font-semibold tracking-[0.18em]",
            light ? "text-on-dark-muted" : "text-muted-foreground",
          )}
        >
          GEOTECHNICAL SERVICES
        </span>
      </span>
    </span>
  );
}
