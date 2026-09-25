import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import irrigationFarm from "@/assets/irrigation-farm.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { testimonialPlaceholders } from "@/data/content";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/testimonials")({
  head: () =>
    pageMeta({
      title: "Client Testimonials | Achievers Geotechnical, Abeokuta",
      description:
        "What homeowners, developers, farms and schools across Abeokuta and Ogun State say about working with Achievers Geotechnical Services.",
      path: "/testimonials",
    }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const real = testimonialPlaceholders.filter((t) => t.quote && t.name);
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What our clients say"
        image={irrigationFarm}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Testimonials" }]}
      />
      <section className="section">
        <div className="shell">
          {real.length ? (
            <div className="grid gap-6 md:grid-cols-2">
              {real.map((t, i) => (
                <Reveal key={t.name} delay={(i % 2) * 80} className="card-quiet p-8">
                  <Quote className="h-7 w-7 text-teal-deep" aria-hidden="true" />
                  <blockquote className="mt-4 text-lg leading-relaxed text-navy-deep">{t.quote}</blockquote>
                  <p className="mt-6 font-display font-semibold text-navy-deep">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.context}</p>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="card-quiet mx-auto max-w-2xl p-10 text-center">
              <Quote className="mx-auto h-8 w-8 text-teal-deep" aria-hidden="true" />
              <h2 className="display-3 mt-4 text-navy-deep">Client stories are on the way</h2>
              <p className="mt-4 text-muted-foreground">
                We are gathering feedback from recent clients. In the meantime, see our completed
                projects and videos from real sites.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/projects" className="btn btn-primary">View projects</Link>
                <Link to="/videos" className="btn btn-outline">Watch videos</Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
