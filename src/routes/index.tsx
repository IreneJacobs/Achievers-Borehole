import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import heroDrilling from "@/assets/hero-drilling.jpg";
import crewFieldwork from "@/assets/crew-fieldwork.jpg";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { ProjectCard } from "@/components/site/ProjectCard";
import { FaqList, SectionHeader, ServiceCard } from "@/components/site/Sections";
import { services } from "@/data/services";
import { featuredProjects } from "@/data/projects";
import { homeFaqs, whoWeServe, whyAchievers } from "@/data/content";
import { siteConfig, whatsappLink } from "@/config/site";
import { faqSchema, ldScript, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: "Borehole Drilling in Abeokuta & Ogun State | Achievers Geotechnical",
      description: siteConfig.description,
      path: "/",
    }),
    scripts: [ldScript(faqSchema(homeFaqs))],
  }),
  component: Home,
});

const stats = [
  { value: "210 m", label: "Deepest documented borehole" },
  { value: "15+", label: "Listed completed projects" },
  { value: "9", label: "Water services, one team" },
  { value: "Ogun", label: "State-wide coverage" },
];

function Home() {
  return (
    <>
      <section className="surface-dark relative flex min-h-[92vh] items-end overflow-hidden pt-32 pb-16 md:pb-24">
        <img
          src={heroDrilling}
          alt="Achievers drilling rig at work on a borehole site in Abeokuta"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.19_0.045_257/40%)_0%,oklch(0.19_0.045_257/95%)_85%)]" />
        <div className="shell relative">
          <p className="eyebrow eyebrow-light rise">Abeokuta · Ogun State</p>
          <h1 className="display-1 rise mt-5 max-w-4xl text-on-dark">
            Dependable water, drilled right the first time.
          </h1>
          <p className="lede rise mt-6 max-w-2xl text-on-dark-muted">
            Surveys, borehole drilling, casing, pumps and maintenance for homes, estates, farms,
            schools and industries across Ogun State.
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3">
            <Link to="/request-a-quote" className="btn btn-accent">
              Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-on-dark/15 pt-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs text-on-dark-muted">{stat.label}</dt>
                <dd className="mt-1 font-display text-3xl font-semibold text-on-dark">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="What we do"
              title="Every stage of your water supply, handled by one team"
            />
            <Link to="/services" className="btn btn-outline">All services</Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={(i % 3) * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-muted">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-2xl">
            <img src={crewFieldwork} alt="Achievers field crew preparing a drilling site" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <div>
            <SectionHeader eyebrow="Why Achievers" title="Practical engineering, honest advice" />
            <div className="mt-10 grid gap-7 sm:grid-cols-2">
              {whyAchievers.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <CheckCircle2 className="h-5 w-5 text-teal-deep" aria-hidden="true" />
                  <h3 className="mt-3 font-display font-semibold text-navy-deep">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader eyebrow="Recent work" title="Boreholes completed across Abeokuta" />
            <Link to="/projects" className="btn btn-outline">View all projects</Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.slice(0, 6).map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 80}>
                <ProjectCard project={project} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-muted">
        <div className="shell">
          <SectionHeader eyebrow="Who we serve" title="Water for every kind of property" />
          <ul className="mt-10 flex flex-wrap gap-3">
            {whoWeServe.map((item) => (
              <li key={item.label} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-navy-deep">
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader eyebrow="FAQ" title="Questions we are often asked" />
          <FaqList faqs={homeFaqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
