import {
  ArrowDownToLine,
  CircleGauge,
  Cylinder,
  Drill,
  Layers,
  Radar,
  Sprout,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/services";

const map: Record<Service["icon"], LucideIcon> = {
  drill: Drill,
  waves: Waves,
  radar: Radar,
  gauge: CircleGauge,
  layers: Layers,
  wrench: Wrench,
  arrowDown: ArrowDownToLine,
  cylinder: Cylinder,
  sprout: Sprout,
};

export function ServiceIcon({ name, className }: { name: Service["icon"]; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} strokeWidth={1.6} aria-hidden="true" />;
}
