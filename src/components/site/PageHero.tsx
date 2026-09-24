import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Compact dark page header used on every inner page, with breadcrumbs.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  breadcrumbs,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image?: string;
  imageAlt?: string;
  breadcrumbs: { label: string; to?: string }[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("surface-dark relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24", className)}>
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            aria-hidden={imageAlt ? undefined : true}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.19_0.045_257/95%)_10%,oklch(0.19_0.045_257/60%)_100%)]" />
        </>
      )}

      <div className="shell relative">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-on-dark-muted">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3 w-3 opacity-60" aria-hidden="true" />}
              {crumb.to ? (
                <Link to={crumb.to} className="transition-colors hover:text-teal">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-on-dark">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <p className="eyebrow eyebrow-light mt-8">{eyebrow}</p>
        <h1 className="display-2 mt-4 max-w-4xl text-on-dark">{title}</h1>
        {lede && <p className="lede mt-5 max-w-2xl text-on-dark-muted">{lede}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
