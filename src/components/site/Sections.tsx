import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import type { Service } from "@/data/services";

export function SectionHeader({
  eyebrow,
  title,
  lede,
  className,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-2 mt-4 max-w-3xl text-navy-deep">{title}</h2>
      {lede && <p className="lede mt-5 max-w-2xl text-muted-foreground">{lede}</p>}
    </Reveal>
  );
}

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="card-quiet group flex h-full flex-col p-6 transition-colors hover:border-teal"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-teal-deep">
          <ServiceIcon name={service.icon} className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-display text-lg font-semibold text-navy-deep">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-deep">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </Link>
    </Reveal>
  );
}

export function FaqList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {faqs.map((faq) => (
        <AccordionItem key={faq.question} value={faq.question}>
          <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-navy-deep">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
