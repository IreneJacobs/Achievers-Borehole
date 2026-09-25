import { createFileRoute, Link } from "@tanstack/react-router";
import abeokutaAerial from "@/assets/abeokuta-aerial.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { ProjectCard } from "@/components/site/ProjectCard";
import { FaqList, SectionHeader, ServiceCard } from "@/components/site/Sections";
import { abeokutaFaqs } from "@/data/content";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { faqSchema, ldScript, pageMeta } from "@/lib/seo";

const areas = [
  "Alabata", "Obantoko", "Obada", "Idi Aba", "Asero", "Soyoye", "Kotopo",
  "Ogere", "Pansake", "Ibara", "Olorunsogo", "Kemta",
];

export const Route = createFileRoute("/borehole-drillers-in-abeokuta")({
  head: () => ({
    ...pageMeta({
      title: "Borehole Drillers in Abeokuta | Achievers Geotechnical Services",
      description:
        "Trusted borehole drillers in Abeokuta, Ogun State. Surveys, drilling from 95 m to 210 m, casing, pumps and maintenance across Alabata, Obantoko, Kotopo and more.",
      path: "/borehole-drillers-in-abeokuta",
    }),
    scripts: [ldScript(faqSchema(abeokutaFaqs))],
  }),
  component: AbeokutaPage,
});

function AbeokutaPage() {
  return (
    <>
      <PageHero
        eyebrow="Abeokuta, Ogun State"
        title="Borehole drillers in Abeokuta"
        lede="Local knowledge of Abeokuta's ground conditions, documented projects across the city, and one team for survey, drilling and pumps."
        image={abeokutaAerial}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Borehole Drillers in Abeokuta" }]}
      >
        <Link to="/request-a-quote" className="btn btn-accent">Request a Quote</Link>
      </PageHero>
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-2">
          <Reveal className="prose-body space-y-4 text-muted-foreground">
            <h2 className="display-3 text-navy-deep">Drilling across Abeokuta's varied geology</h2>
            <p>
              Borehole depths across Abeokuta vary widely — our completed wells range from around 95
              metres at Ibara Housing Estate to 210 metres at Pansake. That is why we survey every
              site before drilling and choose rotary or Odex drilling to suit the formation.
            </p>
            <p>
              We have drilled for private homes, estates, FUNAAB Farm, dairy farms at Ogere and
              schools including Egba Comprehensive High School, Asero and Abeokuta Grammar School,
              Idi Aba.
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-lg font-semibold text-navy-deep">Areas we serve</h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {areas.map((a) => (
                <li key={a} className="rounded-full border border-border px-4 py-2 text-sm text-navy-deep">{a}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <section className="section surface-muted">
        <div className="shell">
          <SectionHeader eyebrow="Local projects" title="Recent Abeokuta boreholes" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter((p) => p.depth).slice(0, 6).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <SectionHeader eyebrow="Services" title="Our services in Abeokuta" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.slug} service={s} delay={(i % 3) * 80} />
            ))}
          </div>
        </div>
      </section>
      <section className="section surface-muted">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader eyebrow="FAQ" title="Abeokuta borehole questions" />
          <FaqList faqs={abeokutaFaqs} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
