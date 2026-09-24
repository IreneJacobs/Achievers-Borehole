import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Music2, Phone, Twitter, Youtube } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { services } from "@/data/services";
import { siteConfig, telLink, whatsappLink } from "@/config/site";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Videos", to: "/videos" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Borehole Drillers in Abeokuta", to: "/borehole-drillers-in-abeokuta" },
  { label: "Request a Quote", to: "/request-a-quote" },
  { label: "Contact", to: "/contact" },
] as const;

const socials = [
  { label: "Instagram", href: siteConfig.social.instagram, Icon: Instagram },
  { label: "Facebook", href: siteConfig.social.facebook, Icon: Facebook },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: Youtube },
  { label: "TikTok", href: siteConfig.social.tiktok, Icon: Music2 },
  { label: "X", href: siteConfig.social.x, Icon: Twitter },
];

export function Footer() {
  return (
    <footer className="surface-dark">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-on-dark-muted">
            Professional borehole drilling and water solutions for homes, businesses, farms,
            institutions and development projects across Ogun State.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-on-dark transition-colors hover:border-teal hover:text-teal"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-on-dark-muted transition-colors hover:text-teal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="font-display text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Services
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="text-on-dark-muted transition-colors hover:text-teal"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-on-dark-muted">
            {siteConfig.contact.phones.map((phone) => (
              <li key={phone}>
                <a href={telLink(phone)} className="flex items-center gap-2.5 hover:text-teal">
                  <Phone className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-teal">
                <MessageCircle className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                WhatsApp {siteConfig.contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2.5 break-all hover:text-teal">
                <Mail className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
              {siteConfig.contact.location}
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
              <span>
                {siteConfig.contact.hours.map((entry) => (
                  <span key={entry.days} className="block">
                    {entry.days}: {entry.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-on-dark-muted md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2026 {siteConfig.legalName}. All rights reserved.</p>
          <p>Borehole drilling &amp; water solutions · {siteConfig.contact.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
