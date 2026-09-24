import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { siteConfig, telLink, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Videos", to: "/videos" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/80 bg-background/85 py-2 backdrop-blur-xl"
          : "border-b border-transparent py-4",
      )}
    >
      <div className="shell flex items-center justify-between gap-6">
        <Link to="/" aria-label="Achievers Geotechnical Services — home">
          <Logo />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-navy-deep"
              activeProps={{ className: "text-navy-deep bg-secondary" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
          <Link to="/request-a-quote" className="btn btn-sm btn-accent">
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-navy-deep lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[68px] bottom-0 z-40 overflow-y-auto border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile navigation" className="shell flex flex-col py-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="border-b border-border/70 py-4 font-display text-lg font-semibold text-navy-deep"
                activeProps={{ className: "text-teal-deep" }}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-6 flex flex-col gap-3">
              <Link to="/request-a-quote" className="btn btn-accent w-full">
                Request a Quote
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-teal w-full"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a
                href={telLink(siteConfig.contact.phones[0])}
                className="btn btn-outline w-full"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.phones[0]}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
