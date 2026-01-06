import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, business, faqs, primaryNavigation, services, siteUrl } from "../lib/site-data";

export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Développeur freelance Paris | Next.js, PHP, JavaScript",
  description:
    "Développeur freelance à Paris spécialisé en Next.js, PHP, JavaScript et intégration HTML/CSS. Sites rapides, SEO local, Core Web Vitals au vert.",
  keywords: [
    "développeur freelance Paris",
    "Next.js freelance Paris",
    "développeur PHP Paris",
    "développeur JavaScript Paris",
    "intégrateur HTML CSS Paris",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Développeur freelance Paris | Next.js, PHP, JavaScript",
    description:
      "Freelance basé à Paris : Next.js, PHP, JavaScript, intégration HTML/CSS, SEO technique et maillage interne optimisé.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Développeur freelance à Paris",
      },
    ],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  legalName: business.legalName,
  image:
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  url: business.url,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    postalCode: business.postalCode,
    addressCountry: business.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  openingHours: business.openingHours,
  priceRange: business.priceRange,
  sameAs: [
    "https://www.linkedin.com",
    "https://www.malt.fr",
    "https://github.com",
  ],
  areaServed: "Paris et Île-de-France",
  serviceOffer: services.map((service) => service.title),
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: business.name,
  url: business.url,
  logo: business.logo,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: business.phone,
    contactType: "customer support",
    areaServed: "FR",
    availableLanguage: ["French", "English"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
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
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <div className="min-h-screen bg-black text-slate-100">
        <header className="border-b border-slate-900/70 bg-gradient-to-b from-slate-950 to-black">
          <nav
            className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-5"
            aria-label="Navigation principale"
          >
            <div className="flex items-center gap-3">
              <div className="text-sm font-semibold tracking-tight text-white">Développeur freelance Paris</div>
              <div className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs text-slate-400">
                Next.js · SEO · Paris
              </div>
            </div>
            <ul className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:shadow-xl"
              href="#contact"
              id="buttons-cta"
            >
              Contact
            </Link>
          </nav>

          <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 pb-14 pt-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-slate-400">
                Next.js · SEO technique · Paris
              </span>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Développeur freelance Paris expert Next.js, PHP, JavaScript
              </h1>
              <p className="text-slate-300">
                J'optimise vos performances web, le SEO local et les conversions grâce à Next.js, PHP moderne et JavaScript robuste.
                Basé à Paris, je livre des sites rapides, indexables et prêts pour le business.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-900/40 transition hover:-translate-y-0.5 hover:shadow-xl"
                  href="#contact"
                  id="buttons-cta"
                >
                  Planifier un appel
                </Link>
                <Link
                  className="rounded-xl border border-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-slate-600"
                  href="/services"
                >
                  Voir les services
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-slate-300">
                {["Core Web Vitals", "Sitemaps & canonicals", "Maillage interne", "ISR & CDN Vercel"].map((label) => (
                  <span
                    key={label}
                    className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-1">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 shadow-xl shadow-slate-900/40">
                <div className="mb-3 flex items-center justify-between text-sm font-semibold text-slate-200">
                  <span>Livrables SEO-ready</span>
                  <span className="text-xs text-slate-400">Prêt à indexer</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {["ISR + données structurées", "Performances mesurées", "Indexation guidée"].map((title, idx) => (
                    <div key={title} className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-sm text-slate-200">
                      <strong className="block text-slate-50">{title}</strong>
                      <p className="mt-1 text-xs text-slate-400">
                        {idx === 0 && "Sitemap, robots, LocalBusiness, FAQ"}
                        {idx === 1 && "LCP & INP optimisés, images WebP/AVIF"}
                        {idx === 2 && "Maillage contextuel, URLs courtes, CTA clairs"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <figure className="overflow-hidden rounded-2xl border border-slate-800 shadow-2xl shadow-slate-900/50">
                <Image
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                  alt="Développeur freelance à Paris travaillant sur un projet Next.js"
                  width={1200}
                  height={630}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="h-full w-full object-cover"
                  priority
                />
              </figure>
            </div>
          </section>
        </header>

        <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-6">
          <article className="space-y-14">
            <section className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-white">Services freelance à Paris : Next.js, PHP, JavaScript, HTML/CSS</h2>
                <p className="text-slate-300">
                  Chaque prestation inclut un audit technique, un plan de maillage interne, des Core Web Vitals optimisés et un
                  suivi Search Console. Pages statiques avec revalidation ISR pour un crawl rapide.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <div key={service.slug} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 shadow-inner shadow-black/20">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{service.description}</p>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                      <Link className="font-semibold text-indigo-200 hover:text-white" href={`/services/${service.slug}`}>
                        Découvrir {service.title.toLowerCase()}
                      </Link>
                      <span className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-400">
                        {service.keywords[0]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-inner shadow-black/20">
                <h2 className="text-xl font-semibold text-white">Pourquoi me choisir comme développeur freelance à Paris</h2>
                <p className="mt-2 text-slate-300">
                  Architectures Next.js pensées pour le SEO : sitemaps dynamiques, canonical propres, pagination crawlable, données
                  structurées complètes et maillage interne contextuel.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>Core Web Vitals optimisés (LCP, CLS, INP) via rendu statique et images WebP.</li>
                  <li>Schémas JSON-LD LocalBusiness, Organization, FAQ et BreadcrumbList.</li>
                  <li>Revalidation incrémentale pour garder des pages fraîches sans sacrifier la vitesse.</li>
                  <li>Maillage interne avec ancres descriptives et URLs courtes, lisibles.</li>
                  <li>Assets servis via CDN Vercel Edge Network et compression Brotli.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-inner shadow-black/20">
                <h2 className="text-xl font-semibold text-white">Étapes de collaboration</h2>
                <ol className="mt-3 space-y-2 pl-4 text-sm text-slate-300 list-decimal">
                  <li>Audit SEO technique et intention locale "Développeur freelance Paris".</li>
                  <li>Architecture Next.js (routes, sitemap, robots, canonicals).</li>
                  <li>Pages services + contenus longue traîne (1500+ mots).</li>
                  <li>Recette Core Web Vitals, accessibilité, indexation Search Console.</li>
                  <li>Suivi hebdomadaire : positions Google.fr, impressions, CTR, leads.</li>
                </ol>
              </div>
            </section>

            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">Blog : conseils pour choisir un développeur freelance à Paris</h2>
                <p className="text-slate-300">
                  Articles optimisés avec H2/H3, maillage interne et FAQ intégrée pour capter le trafic informationnel et réassurer vos prospects.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <Link className="inline-flex rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 font-semibold text-indigo-200 hover:text-white" href="/blog/developpeur-freelance-paris-guide-complet">
                    Guide complet freelance Paris
                  </Link>
                  <Link className="inline-flex rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 font-semibold text-indigo-200 hover:text-white" href="/blog/tarifs-developpeur-freelance-paris">
                    Comprendre les tarifs
                  </Link>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                  <div key={post.slug} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 shadow-inner shadow-black/20">
                    <div className="text-xs text-slate-400">{post.readingTime}</div>
                    <h3 className="mt-2 text-lg font-semibold text-white">{post.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{post.description}</p>
                    <Link className="mt-3 inline-flex text-sm font-semibold text-indigo-200 hover:text-white" href={`/blog/${post.slug}`}>
                      Lire l'article complet
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-black/20">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 md:max-w-xl">
                  <h2 className="text-2xl font-semibold text-white">Contact direct à Paris</h2>
                  <p className="text-slate-300">Décrivez votre besoin Next.js, PHP ou JavaScript. Réponse en 24h.</p>
                </div>
                <dl className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                  <div className="space-y-1">
                    <dt className="text-sm font-semibold text-slate-200">Téléphone</dt>
                    <dd>
                      <a className="text-indigo-200" href="tel:+33612345678">
                        {business.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm font-semibold text-slate-200">Email</dt>
                    <dd>
                      <a className="text-indigo-200" href="mailto:contact@dev-paris.tech">
                        {business.email}
                      </a>
                    </dd>
                  </div>
                  <div className="space-y-1">
                    <dt className="text-sm font-semibold text-slate-200">Adresse</dt>
                    <dd className="text-slate-300">
                      {business.street}, {business.postalCode} {business.city}
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            <section className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">FAQ développeur freelance à Paris</h2>
                <p className="text-slate-300">Réponses rapides aux questions courantes pour sécuriser votre projet.</p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {faqs.map((item) => (
                  <details key={item.question} className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-slate-200">
                    <summary className="cursor-pointer text-sm font-semibold text-white">{item.question}</summary>
                    <p className="mt-2 text-sm text-slate-300">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>
        </main>

        <footer className="border-t border-slate-900/70 bg-black/40">
          <div className="mx-auto w-full max-w-6xl px-6 py-10 text-sm text-slate-400">
            © {new Date().getFullYear()} {business.name} — Développeur freelance Paris. URLs propres, canonicals automatisés et sitemap dynamique.
          </div>
        </footer>
      </div>
    </>
  );
}
