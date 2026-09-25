import { createFileRoute } from "@tanstack/react-router";
import pumpInstallation from "@/assets/pump-installation.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeader, ServiceCard } from "@/components/site/Sections";
import { serviceCategories, services } from "@/data/services";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageMeta({
      title: "Borehole & Water Services in Ogun State | Achievers Geotechnical",
      description:
        "Borehole drilling, water surveys, Odex drilling, pump and casing installation, maintenance, extension, tanks and irrigation across Abeokuta and Ogun State.",
      path: "/services",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete borehole and water services"
        lede="From the first survey to the last fitting, every stage of your water supply."
        image={pumpInstallation}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      {serviceCategories.map((category, idx) => (
        <section key={category} className={idx % 2 ? "section surface-muted" : "section"}>
          <div className="shell">
            <SectionHeader eyebrow={`0${idx + 1}`} title={category} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.category === category)
                .map((service, i) => (
                  <ServiceCard key={service.slug} service={service} delay={i * 80} />
                ))}
            </div>
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}
