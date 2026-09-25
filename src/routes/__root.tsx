import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { siteConfig } from "@/config/site";
import { ldScript } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-start justify-center pt-32 pb-20">
      <p className="eyebrow">Error 404</p>
      <h1 className="display-2 mt-4 text-navy-deep">This page could not be found</h1>
      <p className="lede mt-4 max-w-xl text-muted-foreground">
        The page may have moved. Head back home or get in touch about your borehole project.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="btn btn-primary">Go home</Link>
        <Link to="/contact" className="btn btn-outline">Contact us</Link>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <section className="shell flex min-h-[70vh] flex-col items-start justify-center pt-32 pb-20">
      <h1 className="display-3 text-navy-deep">This page didn't load</h1>
      <p className="mt-3 text-muted-foreground">Something went wrong. Please try again.</p>
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="btn btn-primary"
        >
          Try again
        </button>
        <a href="/" className="btn btn-outline">Go home</a>
      </div>
    </section>
  );
}

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.productionUrl,
  telephone: siteConfig.contact.phones[0],
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abeokuta",
    addressRegion: "Ogun State",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.contact.coordinates.lat,
    longitude: siteConfig.contact.coordinates.lng,
  },
  openingHours: "Mo-Sa 08:00-18:00",
  areaServed: "Ogun State",
  sameAs: Object.values(siteConfig.social),
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: siteConfig.name },
      { name: "theme-color", content: "#0f1f3a" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [ldScript(businessSchema)],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-NG">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded focus:bg-background focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}
