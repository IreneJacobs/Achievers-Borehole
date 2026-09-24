import { MapPin, Ruler } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <article className={cn("media-zoom card-quiet group flex flex-col", className)}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.service} — ${project.location}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-navy-deep uppercase backdrop-blur">
          {project.service}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg leading-snug font-semibold text-navy-deep">
          {project.title}
        </h3>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-teal-deep" aria-hidden="true" />
            {project.location}
          </span>
          {project.depth && (
            <span className="flex items-center gap-1.5">
              <Ruler className="h-4 w-4 text-teal-deep" aria-hidden="true" />
              {project.depth}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
