import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { siteConfig, telLink, whatsappLink } from "@/config/site";

export function CtaBand({
  title = "Ready to develop a dependable water source?",
  body = "Tell us about your site and what you need the water for. We will advise on survey, depth and the most practical approach before any drilling begins.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="surface-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,oklch(1_0_0/12%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/12%)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="shell relative py-16 md:py-24">
        <Reveal className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow eyebrow-light">Request a site assessment</p>
            <h2 className="display-2 mt-4 max-w-2xl text-on-dark">{title}</h2>
            <p className="lede mt-5 max-w-xl text-on-dark-muted">{body}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Link to="/request-a-quote" className="btn btn-accent">
              Request a Quote
            </Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <a href={telLink(siteConfig.contact.phones[0])} className="btn btn-ghost-light">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.phones[0]}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
