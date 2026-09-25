import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqList, SectionHeader, ServiceCard } from "@/components/site/Sections";
import { getService, services } from "@/data/services";
import { breadcrumbSchema, faqSchema, ldScript, pageMeta, serviceSchema } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    const service = loaderData ? getService(loaderData.slug) : undefined;
    if (!service) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/services/${service.slug}`;
    return {
      ...pageMeta({
        title: `${service.name} in Abeokuta & Ogun State | Achievers Geotechnical`,
        description: service.short,
        path,
      }),
      scripts: [
        ldScript(serviceSchema({ name: service.name, description: service.short, path })),
        ldScript(faqSchema(service.faqs)),
        ldScript(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path },
          ]),
        ),
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <section className="shell pt-36 pb-24">
      <h1 className="display-3 text-navy-deep">Service not found</h1>
      <Link to="/services" className="btn btn-primary mt-6">See all services</Link>
    </section>
  );
}

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const service = getService(slug)!;
  const related = services.filter((s) => s.slug !== slug && s.category === service.category).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.name}
        lede={service.short}
        image={service.image}
        imageAlt={service.imageAlt}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.name },
        ]}
      >
        <Link to="/request-a-quote" className="btn btn-accent">Request a Quote</Link>
      </PageHero>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="prose-body space-y-4 text-muted-foreground">
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal className="card-quiet p-6">
            <h2 className="font-display text-lg font-semibold text-navy-deep">Who this is for</h2>
            <ul className="mt-4 space-y-3">
              {service.who.map((w) => (
                <li key={w} className="flex gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-deep" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section surface-muted">
        <div className="shell">
          <SectionHeader eyebrow="Our process" title="How the work is done" />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 80} className="card-quiet p-6">
                <span className="font-display text-3xl font-semibold text-teal-deep">{i + 1}</span>
                <h3 className="mt-3 font-display font-semibold text-navy-deep">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader eyebrow="FAQ" title={`${service.name} questions`} />
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section surface-muted">
          <div className="shell">
            <SectionHeader eyebrow="Related" title="Related services" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => (
                <ServiceCard key={s.slug} service={s} delay={i * 80} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
