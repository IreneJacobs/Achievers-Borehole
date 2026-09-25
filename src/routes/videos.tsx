import { createFileRoute } from "@tanstack/react-router";
import { Youtube } from "lucide-react";
import crewFieldwork from "@/assets/crew-fieldwork.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeader } from "@/components/site/Sections";
import { YouTubeLite } from "@/components/site/YouTubeLite";
import { channelUrl, videoCategories, videos } from "@/data/videos";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/videos")({
  head: () =>
    pageMeta({
      title: "Borehole Drilling Videos | Achievers Geotechnical",
      description:
        "Watch real borehole drilling projects in Abeokuta and Ogun State, drilling in action and practical advice on why boreholes fail.",
      path: "/videos",
    }),
  component: VideosPage,
});

function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Videos"
        title="See our work on site"
        lede="Real projects, recorded on real sites across Ogun State."
        image={crewFieldwork}
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Videos" }]}
      >
        <a href={channelUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
          <Youtube className="h-4 w-4" aria-hidden="true" /> Visit our YouTube channel
        </a>
      </PageHero>
      {videoCategories.map((category, idx) => {
        const list = videos.filter((v) => v.category === category);
        if (!list.length) return null;
        return (
          <section key={category} className={idx % 2 ? "section surface-muted" : "section"}>
            <div className="shell">
              <SectionHeader eyebrow={`0${idx + 1}`} title={category} />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((video, i) => (
                  <Reveal key={video.title} delay={(i % 3) * 80}>
                    <YouTubeLite videoId={video.youtubeId} title={video.title} category={video.category} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <CtaBand />
    </>
  );
}
