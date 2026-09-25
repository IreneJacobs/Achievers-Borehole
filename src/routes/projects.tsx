import { createFileRoute } from "@tanstack/react-router";
import heroDrilling from "@/assets/hero-drilling.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/data/projects";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () =>
    pageMeta({
      title: "Borehole Projects in Abeokuta | Achievers Geotechnical",
      description:
        "Completed borehole projects across Abeokuta and Ogun State — from 95 m to 210 m deep, for homes, estates, farms and schools.",
      path: "/projects",
    }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Completed borehole projects"
        lede="A selection of boreholes we have drilled for homes, estates, farms and institutions around Abeokuta."
        image={heroDrilling}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />
      <section className="section">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 80}>
              <ProjectCard project={project} className="h-full" />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
