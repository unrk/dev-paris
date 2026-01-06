import type { Metadata } from "next";
import Link from "next/link";
import { services, siteUrl } from "../../lib/site-data";

export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Services freelance à Paris : Next.js, PHP, JavaScript, HTML/CSS",
  description:
    "Catalogue des services freelance à Paris : Next.js, PHP, JavaScript, intégration HTML/CSS avec SEO technique et performances web.",
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Services freelance à Paris : Next.js, PHP, JavaScript, HTML/CSS",
    description:
      "Développement Next.js, PHP, JavaScript et intégration HTML/CSS à Paris avec SEO technique, ISR et Core Web Vitals optimisés.",
    url: `${siteUrl}/services`,
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Services freelance à Paris",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${siteUrl}/services`,
    },
  ],
};

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-14 pt-8 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-black/20">
      
        <span className="inline-flex w-fit rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-slate-300">
          Catalogue des offres
        </span>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            href="/"
            id="buttons-cta"
          >
            Retour à l'accueil
          </Link>
        </div>
        <h1 className="mt-3 text-3xl font-semibold text-white">Services freelance à Paris</h1>
        <p className="mt-2 text-slate-300">
          Solutions sur-mesure pour vos sites et applications : Next.js, PHP, JavaScript et intégration HTML/CSS. Pages statiques avec
          revalidation pour un crawl rapide et des performances Core Web Vitals maîtrisées.
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link className="inline-flex rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 font-semibold text-indigo-200 hover:text-white" href="/blog/developpeur-freelance-paris-guide-complet">
            Guide : choisir un freelance
          </Link>
          <Link className="inline-flex rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 font-semibold text-indigo-200 hover:text-white" href="/blog/tarifs-developpeur-freelance-paris">
            Comprendre les tarifs
          </Link>
        </div>
        
      </header>

      <article id="services" className="mt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-inner shadow-black/20"
            >
              <div className="text-xs text-slate-400">{service.keywords[0]}</div>
              <h2 className="mt-2 text-lg font-semibold text-white">{service.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{service.description}</p>
              <p className="mt-2 text-xs text-slate-400">Mots-clés cibles : {service.keywords.join(", ")}</p>
              <Link
                className="mt-3 inline-flex text-sm font-semibold text-indigo-200 hover:text-white"
                href={`/services/${service.slug}`}
              >
                Voir le détail du service
              </Link>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}
