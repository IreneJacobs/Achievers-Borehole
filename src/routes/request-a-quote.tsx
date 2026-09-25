import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import waterSurvey from "@/assets/water-survey.jpg";
import { PageHero } from "@/components/site/PageHero";
import { QuoteForm } from "@/components/site/QuoteForm";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/request-a-quote")({
  validateSearch: z.object({ service: z.string().optional() }),
  head: () =>
    pageMeta({
      title: "Request a Borehole Quote | Achievers Geotechnical, Abeokuta",
      description:
        "Tell us about your site and water needs. Get a quote for borehole drilling, surveys, pumps or maintenance in Abeokuta and Ogun State.",
      path: "/request-a-quote",
    }),
  component: QuotePage,
});

function QuotePage() {
  const { service } = Route.useSearch();
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us about your site"
        lede="Share a few details and we will get back to you to discuss survey, depth and the most practical approach."
        image={waterSurvey}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Request a Quote" }]}
      />
      <section className="section">
        <div className="shell max-w-3xl">
          <div className="card-quiet p-6 md:p-10">
            <QuoteForm defaultService={service} />
          </div>
        </div>
      </section>
    </>
  );
}
