import { siteConfig } from "@/config/site";

export type VideoCategory =
  | "Recent Projects"
  | "Drilling in Action"
  | "Technical & Educational"
  | "Project Stories";

export type Video = {
  title: string;
  category: VideoCategory;
  /**
   * YouTube video ID. Leave empty until the real ID is added — the card then
   * links out to the channel instead of embedding a player.
   */
  youtubeId?: string;
  note?: string;
};

export const videoCategories: VideoCategory[] = [
  "Recent Projects",
  "Drilling in Action",
  "Technical & Educational",
  "Project Stories",
];

/**
 * Video titles as listed by Achievers. Add the `youtubeId` for each one to
 * enable the lazy-loaded embedded player (nothing else needs changing).
 */
export const videos: Video[] = [
  { title: "150 meters Borehole Drilling at Film Village Alabata", category: "Recent Projects" },
  { title: "Borehole Drilled at Ogere", category: "Recent Projects" },
  { title: "100 meters Borehole Drilled at Soyoye", category: "Recent Projects" },
  { title: "120 meters Borehole Drilled at Oloyede/Olorunsogo", category: "Recent Projects" },
  { title: "140 Meters Borehole Drilled at Kotopo", category: "Recent Projects" },
  { title: "Borehole Drilling Step by Step", category: "Drilling in Action" },
  { title: "Automated Borehole Drilling Machine at Work", category: "Drilling in Action" },
  { title: "How We Drilled a Borehole on a Hill", category: "Drilling in Action" },
  { title: "Why Boreholes Fail and the Remedy", category: "Technical & Educational" },
  { title: "Water from a Dry Land – Borehole Mystery", category: "Project Stories" },
];

export const channelUrl = `${siteConfig.social.youtube}/videos`;
