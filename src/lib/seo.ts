import { siteConfig } from "@/config/site";

type MetaEntry = Record<string, string>;

/**
 * Build per-page head metadata. Paths stay relative so the site works on the
 * preview/deployment URL today and on the custom domain once it is connected.
 */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): { meta: MetaEntry[]; links: MetaEntry[] } {
  const { title, description, path, type = "website" } = opts;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { property: "og:site_name", content: siteConfig.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.productionUrl}${item.path}`,
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    url: `${siteConfig.productionUrl}${opts.path}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.contact.phones[0],
      email: siteConfig.contact.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abeokuta",
        addressRegion: "Ogun State",
        addressCountry: "NG",
      },
    },
    areaServed: [
      { "@type": "City", name: "Abeokuta" },
      { "@type": "AdministrativeArea", name: "Ogun State" },
    ],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function ldScript(schema: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(schema) };
}
