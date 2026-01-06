import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, siteUrl } from "../../lib/site-data";

export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Blog développeur freelance Paris : SEO, Next.js, tarifs",
  description:
    "Articles longue traîne pour choisir un développeur freelance à Paris, comprendre les tarifs et optimiser vos projets Next.js.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Blog développeur freelance Paris : SEO, Next.js, tarifs",
    description:
      "Guides pratiques pour réussir vos projets web avec un développeur freelance à Paris : SEO, Next.js, budget.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
  ],
};

export default function BlogPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-14 pt-8 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-black/20">
        <span className="inline-flex w-fit rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-slate-300">
          Ressources
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
        <h1 className="mt-3 text-3xl font-semibold text-white">Blog développeur freelance à Paris</h1>
        <p className="mt-2 text-slate-300">
          Ressources pour comprendre les tarifs freelances, évaluer la qualité d'un prestataire et optimiser votre site Next.js pour le SEO local.
        </p>
      </header>

      <article className="mt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-inner shadow-black/20"
            >
              <div className="text-xs text-slate-400">{post.readingTime}</div>
              <h2 className="mt-2 text-lg font-semibold text-white">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{post.description}</p>
              <Link
                className="mt-3 inline-flex text-sm font-semibold text-indigo-200 hover:text-white"
                href={`/blog/${post.slug}`}
              >
                Lire l'article complet
              </Link>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}
