import { createFileRoute } from "@tanstack/react-router";
import crewFieldwork from "@/assets/crew-fieldwork.jpg";
import waterSurvey from "@/assets/water-survey.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeader } from "@/components/site/Sections";
import { whyAchievers } from "@/data/content";
import { siteConfig } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About Us | Achievers Geotechnical Services Ltd, Abeokuta",
      description:
        "Learn about Achievers Geotechnical Services Ltd — a borehole drilling and water solutions company serving Abeokuta and towns across Ogun State.",
      path: "/about",
    }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A water solutions team rooted in Ogun State"
        lede={siteConfig.description}
        image={crewFieldwork}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />
      <section className="section">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our approach</p>
            <h2 className="display-2 mt-4 text-navy-deep">Survey first. Drill with purpose.</h2>
            <div className="prose-body mt-6 space-y-4 text-muted-foreground">
              <p>
                Achievers Geotechnical Services Ltd helps homeowners, developers, farms, schools,
                churches and businesses secure a reliable water supply. We assess each site
                carefully, recommend a realistic depth and method, and deliver a complete working
                system.
              </p>
              <p>
                From geological surveys and rotary or Odex drilling through to casing, pumps, tanks
                and irrigation, one team takes responsibility for the whole job — and we document
                our completed work publicly on YouTube.
              </p>
            </div>
          </Reveal>
          <Reveal className="overflow-hidden rounded-2xl">
            <img src={waterSurvey} alt="Water survey equipment on site" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </Reveal>
        </div>
      </section>
      <section className="section surface-muted">
        <div className="shell">
          <SectionHeader eyebrow="What sets us apart" title="The way we work" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyAchievers.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80} className="card-quiet p-6">
                <span className="font-display text-sm font-semibold text-teal-deep">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy-deep">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
