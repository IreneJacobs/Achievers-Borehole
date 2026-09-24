import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { channelUrl } from "@/data/videos";
import { cn } from "@/lib/utils";

/**
 * Lazy YouTube facade: only loads an iframe after the user clicks play.
 * Without a `videoId` it becomes a clearly-marked placeholder that links to
 * the Achievers channel, so no player is loaded for videos not yet mapped.
 */
export function YouTubeLite({
  videoId,
  title,
  category,
  className,
}: {
  videoId?: string;
  title: string;
  category?: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  const thumb = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : undefined;

  return (
    <div className={cn("card-quiet overflow-hidden", className)}>
      <div className="relative aspect-video bg-navy-deep">
        {active && videoId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        ) : videoId ? (
          <button
            type="button"
            onClick={() => setActive(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Play video: ${title}`}
          >
            <img
              src={thumb}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 grid place-items-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-navy-deep shadow-lg transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 translate-x-0.5" aria-hidden="true" />
              </span>
            </span>
          </button>
        ) : (
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute inset-0 grid place-items-center text-center"
          >
            <span className="px-6">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/25 text-teal transition-colors group-hover:border-teal">
                <Play className="h-5 w-5 translate-x-0.5" aria-hidden="true" />
              </span>
              <span className="mt-4 block text-xs tracking-[0.16em] text-on-dark-muted uppercase">
                Watch on YouTube
              </span>
            </span>
          </a>
        )}
      </div>

      <div className="p-5">
        {category && (
          <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-teal-deep uppercase">
            {category}
          </span>
        )}
        <h3 className="mt-2 font-display text-base leading-snug font-semibold text-navy-deep">{title}</h3>
        {!videoId && (
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-3 text-sm"
          >
            Open on YouTube
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
}
