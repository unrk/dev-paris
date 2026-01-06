import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { services, siteUrl } from "../../../lib/site-data";

export const revalidate = 43200;

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    return {};
  }

  const canonical = `${siteUrl}/services/${service.slug}`;

  return {
    title: `${service.title} | Développeur freelance Paris`,
    description: service.description,
    alternates: { canonical },
    keywords: service.keywords,
    openGraph: {
      title: `${service.title} | Développeur freelance Paris`,
      description: service.description,
      url: canonical,
      type: "article",
      images: [
        {
          url: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteUrl}/services/${service.slug}`,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    url: `${siteUrl}/services/${service.slug}`,
    description: service.description,
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    areaServed: "Paris",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        price: "Sur devis",
      },
    },
    provider: {
      "@type": "LocalBusiness",
      name: "Développeur freelance Paris",
      url: siteUrl,
    },
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-6 pb-14 pt-8 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <header className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-black/20">
        <span className="inline-flex w-fit rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-slate-300">
          Service
        </span>
        <h1 className="text-3xl font-semibold text-white">{service.h1}</h1>
        <p className="text-slate-300">{service.description}</p>
        <p className="text-xs text-slate-400">Mots-clés ciblés : {service.keywords.join(", ")}</p>
        <div className="mt-2 rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-sm text-slate-200">
          <h2 className="text-base font-semibold text-white">Preuves et réassurance</h2>
          <ul className="mt-2 space-y-1 text-slate-300 list-disc pl-4">
            <li>Scores Lighthouse + 90 (Performance & Accessibilité) sur les dernières refontes.</li>
            <li>Délais garantis et suivi Search Console hebdomadaire.</li>
            <li>Maillage interne contextualisé + schémas JSON-LD complets.</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            href="#processus"
          >
            Voir le processus
          </Link>
          <Link
            className="rounded-xl border border-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-slate-600"
            href="/services"
          >
            Retour aux services
          </Link>
          <Link
            className="rounded-xl border border-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-slate-600"
            href="/"
          >
            Retour à l'accueil
          </Link>
        </div>
      </header>

      <article className="mt-8 space-y-6">
        <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-inner shadow-black/20">
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
            alt="Développeur freelance Next.js à Paris en train de coder"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1200}
            height={630}
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={false}
          />
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-black/20">
          <h2 id="processus" className="text-xl font-semibold text-white">Processus en 5 étapes</h2>
          <ol className="mt-3 space-y-2 pl-4 text-sm text-slate-300 list-decimal">
            <li>Audit SEO et performance de votre existant.</li>
            <li>Architecture Next.js et découpage des pages pour le crawl.</li>
            <li>Intégration HTML5 sémantique et maillage interne contextuel.</li>
            <li>Optimisation des Core Web Vitals et des images WebP.</li>
            <li>Recette, mise en production Vercel et suivi Search Console.</li>
          </ol>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-black/20">
          <h2 className="text-xl font-semibold text-white">Livrables</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc pl-4">
            <li>Pages statiques ISR avec canonicals automatiques.</li>
            <li>Sitemap.xml, robots.txt, données structurées JSON-LD complètes.</li>
            <li>Plan de maillage interne + ancres optimisées.</li>
            <li>Rapport Core Web Vitals et recommandations CRO.</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-black/20">
          <h2 className="text-xl font-semibold text-white">Résultats attendus</h2>
          <p className="mt-2 text-slate-300">
            Positionnement sur "Développeur freelance Paris" et requêtes associées, amélioration du temps de chargement, et hausse du taux
            de conversion grâce à un parcours clair et rapide.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-black/20">
          <h2 className="text-xl font-semibold text-white">Appel à l'action</h2>
          <p className="mt-2 text-slate-300">Discutons de votre besoin : réponse en moins de 24h.</p>
          <Link
            className="mt-3 inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            href="/"
          >
            Retour à l'accueil
          </Link>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-black/20">
          <h2 className="text-xl font-semibold text-white">Ressources associées</h2>
          <p className="mt-2 text-slate-300">Découvrez les articles qui détaillent l'approche et les tarifs pour les projets parisiens.</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link className="inline-flex rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 font-semibold text-indigo-200 hover:text-white" href="/blog/developpeur-freelance-paris-guide-complet">
              Guide complet développeur freelance
            </Link>
            <Link className="inline-flex rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 font-semibold text-indigo-200 hover:text-white" href="/blog/tarifs-developpeur-freelance-paris">
              Comprendre les tarifs
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
