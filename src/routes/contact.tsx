import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import abeokutaAerial from "@/assets/abeokuta-aerial.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/site/QuoteForm";
import { mapsDirectionsLink, mapsEmbedSrc, siteConfig, telLink, whatsappLink } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta({
      title: "Contact Achievers Geotechnical | Borehole Drillers, Abeokuta",
      description:
        "Call, WhatsApp or email Achievers Geotechnical Services Ltd in Abeokuta, Ogun State, about borehole drilling and water projects.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  const c = siteConfig.contact;
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us about your water project"
        lede={`Serving ${c.serviceArea}.`}
        image={abeokutaAerial}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="space-y-8">
            <div>
              <h2 className="flex items-center gap-2 font-display font-semibold text-navy-deep">
                <Phone className="h-4 w-4 text-teal-deep" aria-hidden="true" /> Phone
              </h2>
              <ul className="mt-2 space-y-1">
                {c.phones.map((p) => (
                  <li key={p}>
                    <a href={telLink(p)} className="link-underline text-muted-foreground">{p}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="flex items-center gap-2 font-display font-semibold text-navy-deep">
                <MessageCircle className="h-4 w-4 text-teal-deep" aria-hidden="true" /> WhatsApp
              </h2>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="link-underline mt-2 inline-block text-muted-foreground">
                {c.whatsappDisplay}
              </a>
            </div>
            <div>
              <h2 className="flex items-center gap-2 font-display font-semibold text-navy-deep">
                <Mail className="h-4 w-4 text-teal-deep" aria-hidden="true" /> Email
              </h2>
              <a href={`mailto:${c.email}`} className="link-underline mt-2 inline-block text-muted-foreground">{c.email}</a>
            </div>
            <div>
              <h2 className="flex items-center gap-2 font-display font-semibold text-navy-deep">
                <MapPin className="h-4 w-4 text-teal-deep" aria-hidden="true" /> Location
              </h2>
              <p className="mt-2 text-muted-foreground">{c.location}</p>
              <a href={mapsDirectionsLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline mt-3">
                <Navigation className="h-4 w-4" aria-hidden="true" /> Get directions
              </a>
            </div>
            <div>
              <h2 className="flex items-center gap-2 font-display font-semibold text-navy-deep">
                <Clock className="h-4 w-4 text-teal-deep" aria-hidden="true" /> Hours
              </h2>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                {c.hours.map((h) => (
                  <li key={h.days}>{h.days}: {h.time}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="card-quiet p-6 md:p-8">
            <h2 className="display-3 text-navy-deep">Send an enquiry</h2>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="shell pb-20">
        <iframe
          title="Achievers Geotechnical location map"
          src={mapsEmbedSrc}
          loading="lazy"
          className="h-[380px] w-full rounded-2xl border border-border"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
