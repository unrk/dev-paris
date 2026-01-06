import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, siteUrl } from "../../../lib/site-data";

export const revalidate = 43200;

const articleBodies: Record<
  string,
  {
    intro: string;
    sections: { title: string; content: string[] }[];
    conclusion: string;
    faq: { q: string; a: string }[];
  }
> = {
  "developpeur-freelance-paris-guide-complet": {
    intro:
      "Choisir un développeur freelance à Paris ne se limite pas au prix : il faut aligner expertise technique, capacité à livrer vite et qualité SEO pour que vos pages se positionnent sur Google.fr. Ce guide complet détaille la méthode que j'utilise pour sécuriser vos livrables, maîtriser les délais et garantir un site rapide, indexable et rentable.",
    sections: [
      {
        title: "Comprendre l'intention de recherche locale",
        content: [
          "Le mot-clé \"Développeur freelance Paris\" porte une intention double : trouver un profil technique et vérifier sa proximité géographique. Google attend donc des signaux locaux (adresse, téléphone, horaires), du contenu expert et un maillage interne cohérent. La page d'accueil doit cibler l'intention principale, tandis que des pages services couvrent les besoins connexes (Next.js, PHP, JavaScript, intégration HTML/CSS).",
          "Pour renforcer cette intention, j'intègre systématiquement un schéma LocalBusiness, une adresse structurée et un numéro cliquable. Le contenu mentionne des quartiers, des cas clients parisiens et des délais adaptés au fuseau horaire local.",
          "Les signaux de réassurance sont capitaux : mentions des arrondissements couverts, exemples d'interventions (refonte d'un site de cabinet d'avocats à Opéra, mise à niveau Core Web Vitals pour un e-commerce du Marais), et preuves de suivi (courbes GSC).",
        ],
      },
      {
        title: "Architecture Next.js pensée pour le SEO",
        content: [
          "Next.js permet de servir des pages statiques avec revalidation (ISR) : Googlebot crawl des pages ultra-rapides tout en recevant des versions fraîches lorsqu'un contenu change. J'organise les routes comme suit : / (accueil optimisée), /services (liste), /services/[slug] (détail), /blog (hub éditorial), /blog/[slug] (articles 1500+ mots), /sitemap.xml et /robots.txt pour guider le crawl.",
          "Chaque page déclare un canonical propre, des balises Open Graph et un JSON-LD adapté (Article, FAQ, BreadcrumbList). Les ancres internes sont descriptives (par exemple \"développeur Next.js à Paris\" plutôt que \"cliquez ici\").",
          "Je privilégie une profondeur de clic faible : l'utilisateur et Google doivent atteindre tout service en deux clics. Les pages blog renvoient vers les pages money via des encarts contextuels, ce qui répartit le PageRank interne et accélère l'indexation des pages récentes.",
        ],
      },
      {
        title: "Core Web Vitals et performances",
        content: [
          "Le trio LCP, INP et CLS conditionne votre positionnement. Je minimise le JavaScript côté client grâce au rendu statique, au code-splitting natif et au lazy-loading des images via next/image (formats AVIF/WebP). Le LCP est maîtrisé avec un visuel principal léger et préchargé, et le CLS est évité en réservant les espaces d'image via width/height. L'INP est amélioré en limitant les scripts tiers et en privilégiant les composants légers.",
          "Sur Vercel, la compression Brotli et le CDN Edge réduisent la latence en Île-de-France. Un cache long sur les assets statiques et une revalidation planifiée gardent la fraîcheur du contenu sans casser les performances.",
          "Je mesure l'INP réel via field data (CrUX) et non uniquement en lab. Les optimisations sont priorisées selon l'impact business : réduction du JavaScript inutile, suppression des polices bloquantes, et simplification des interactions au-dessus de la ligne de flottaison.",
        ],
      },
      {
        title: "Processus de collaboration",
        content: [
          "1) Audit : j'analyse votre existant, la Search Console et vos positions actuelles. 2) Cadrage sémantique : mapping mots-clés, intention et structure H1/H2/H3. 3) Production : intégration HTML5 sémantique, données structurées, maillage interne. 4) Recette : tests Lighthouse, WebPageTest, et validation indexation. 5) Mise en prod Vercel : DNS, HTTPS, monitoring et plan de suivi hebdomadaire.",
          "Chaque étape est documentée : vous recevez un backlog clair, des captures de performance et un plan d'action pour les optimisations futures (schema enrichi, nouveaux contenus, netlinking local).",
          "Une fois en ligne, je surveille l'évolution de l'indexation et des signaux CWV. Si Googlebot réduit la fréquence de crawl, j'ajoute des liens internes depuis les pages fortes et je rafraîchis les FAQ pour signaler du contenu nouveau.",
        ],
      },
      {
        title: "Preuves et éléments de réassurance",
        content: [
          "Les sites que je livre obtiennent systématiquement plus de 90 sur Lighthouse Performance et Accessibilité. Les logs de crawl montrent une couverture stable et des temps de réponse bas. Les FAQ intégrées réduisent le Pogo-sticking et augmentent le temps passé. Les pages services remontent sur des requêtes longue traîne (ex : \"développeur Next.js freelance Paris tarif\", \"intégrateur HTML CSS Paris freelance\").",
          "Je propose un suivi mensuel : rapport positions Google.fr, impressions/clics Search Console, conversions et plan de maillage interne.",
          "Les quick wins sont listés dès le premier mois : compression supplémentaire des images, enrichissement des FAQ, ajout de schémas HowTo lorsque pertinent, et création de hubs thématiques pour capter des requêtes périphériques.",
        ],
      },
      {
        title: "Checklist technique avant mise en ligne",
        content: [
          "- Vérifier les canonicals sur chaque page, y compris les services et les articles.\n- Contrôler les statuts HTTP (200 sur les pages importantes, 404 sur les pages supprimées).\n- Inspecter le sitemap.xml dans Search Console et valider l'absence d'URLs orphelines.\n- Tester le robots.txt pour s'assurer que les pages utiles ne sont pas bloquées.\n- Passer Lighthouse en mode mobile et mesurer LCP/INP/CLS sur le device cible.",
          "Cette checklist réduit les risques de lancement : elle évite le contenu dupliqué, garantit l'indexabilité et sécurise les signaux Core Web Vitals dès le jour 1.",
        ],
      },
      {
        title: "Plan d'action 30 jours pour ranker à Paris",
        content: [
          "Semaine 1 : publier l'accueil, les services et le premier article 1500+ mots. Soumettre le sitemap, connecter la Search Console et surveiller les erreurs d'exploration. Optimiser le LCP (visuel léger, preconnect CDN).",
          "Semaine 2 : enrichir les FAQ, ajouter des liens internes contextuels depuis l'accueil vers chaque service, mesurer les CWV réels via CrUX. Rafraîchir les meta descriptions pour améliorer le CTR.",
          "Semaine 3 : publier un second article longue traîne, lancer un mini-plan de netlinking local (annuaires de qualité, partenariats parisiens), ajouter des preuves sociales (avis, logos clients).",
          "Semaine 4 : analyser les positions, renforcer le maillage vers les pages sous-performantes, optimiser les ancres et ajouter de nouvelles sections (études de cas, checklists) pour augmenter la profondeur de contenu.",
        ],
      },
    ],
    conclusion:
      "En combinant architecture Next.js statique, données structurées complètes et maillage interne contextuel, vous maximisez vos chances de dominer la SERP sur \"Développeur freelance Paris\". Contactez-moi pour auditer votre site et démarrer en moins de 24h.",
    faq: [
      {
        q: "Combien de temps pour voir des résultats SEO ?",
        a: "Sur un site neuf, les premières impressions apparaissent sous 2 à 3 semaines une fois la Search Console configurée et le sitemap soumis. Les premières positions se stabilisent généralement entre 6 et 10 semaines, selon la concurrence et le netlinking.",
      },
      {
        q: "Travailles-tu uniquement sur Paris ?",
        a: "Je privilégie les clients à Paris et en Île-de-France pour les ateliers en présentiel, mais je peux intervenir à distance pour les structures francophones qui ciblent le marché parisien.",
      },
    ],
  },
  "tarifs-developpeur-freelance-paris": {
    intro:
      "Comprendre les tarifs d'un développeur freelance à Paris aide à sécuriser votre budget et à comparer des profils. Les prix varient selon la stack (Next.js, PHP, JS), la complexité, les délais et le niveau d'expertise. Voici une grille claire et des conseils pour optimiser votre ROI.",
    sections: [
      {
        title: "Facteurs qui influencent le tarif",
        content: [
          "1) Stack et séniorité : un freelance Next.js senior facture plus qu'un intégrateur HTML débutant, car il gère performance, SEO et architecture. 2) Complexité : migration vers Next.js, refonte headless, ou API sur mesure coûtent plus qu'une landing page. 3) Délais : un go-live sous 10 jours implique une surcharge pour priorisation. 4) Prestation continue : TMA et optimisation SEO mensuelle sont souvent forfaitisées.",
          "Les tarifs parisiens intègrent aussi le coût de la vie et la demande locale : la fourchette journalière pour un profil confirmé oscille entre 450€ et 750€ HT, tandis qu'un expert très demandé peut dépasser 900€ HT pour des missions critiques.",
          "Ajoutez à cela le périmètre de responsabilité : un freelance qui pilote l'analytics, le SEO, la performance et la sécurité prend une part de risque plus élevée qu'un simple intégrateur et facture en conséquence.",
        ],
      },
      {
        title: "Modèles de facturation efficaces",
        content: [
          "- Forfait cadré : idéal pour une landing page SEO, avec un périmètre figé, un planning et des livrables précis (sitemap, schémas, maillage).\n- Régie (TJ) : pertinent pour des sprints agiles ou de la R&D.\n- Retainer mensuel : parfait pour la TMA, les optimisations Core Web Vitals, la production de contenus 1500+ mots et le suivi Search Console.",
          "J'alterne souvent forfait + retainer : build initial puis optimisation continue. Cela sécurise la vitesse, l'indexation et l'acquisition.",
          "Un contrat hybride permet aussi d'intégrer des jalons de qualité : LCP sous 2,5s, INP < 200ms, sitemap validé, et nombre d'URLs indexées en hausse.",
        ],
      },
      {
        title: "Comment optimiser votre budget",
        content: [
          "Priorisez les pages à forte intention business : accueil, services ciblés et pages tarifs. Lancez ensuite les articles longue traîne. Utilisez la revalidation ISR pour publier vite et affiner après coup. Centralisez les analytics (GSC, Plausible) pour mesurer le ROI et couper les fonctionnalités non utilisées.",
          "Demandez systématiquement : un plan de maillage interne, un fichier de tracking des mots-clés, un rapport Core Web Vitals et un backlog d'optimisation. Ces livrables évitent les coûts cachés et accélèrent les itérations.",
          "Évitez les dérives fonctionnelles en verrouillant un MVP clair. Chaque ajout doit être justifié par un gain de conversion ou de SEO mesurable.",
        ],
      },
      {
        title: "Exemples de packages",
        content: [
          "- Pack lancement (2 semaines) : 1 homepage optimisée, 3 pages services, 1 article 1500+ mots, sitemap/robots, schémas JSON-LD, suivi GSC.\n- Pack croissance (4 semaines) : ajout de 3 articles longue traîne, optimisation du maillage interne, tests A/B sur les CTA, compression images.\n- Pack TMA mensuelle : monitoring positions, refresh de contenus, optimisation Core Web Vitals, ajout de FAQ, mises à jour Next.js.",
          "Chaque pack inclut un point hebdomadaire et un rapport synthétique. Les prix sont ajustés selon la complexité (API, CMS headless, multilingue).",
          "Un pack peut intégrer du netlinking local (annuaires pro, partenariats parisiens) et des optimisations CRO (scénarios de tests, heatmaps) pour maximiser les conversions sans surcoût technique.",
        ],
      },
      {
        title: "Négocier sans sacrifier la qualité",
        content: [
          "Clarifiez le périmètre et acceptez de phaser les fonctionnalités. Gardez la performance et le SEO comme non-négociables. Choisissez un freelance qui livre du code documenté, des données structurées et un plan de maintenance. Vérifiez les références locales et les exemples de SERP obtenues (positions sur \"développeur Next.js Paris\", \"freelance PHP Paris\").",
          "Un bon indicateur : la capacité du freelance à fournir un plan de contenu 8 semaines, des KPI de suivi et des optimisations proactives basées sur vos journaux de crawl et GSC.",
          "Demandez un plan de rollback et des points de contrôle : tests de régression, sauvegardes avant déploiement, monitoring post-prod. Cela réduit les risques et prouve le sérieux du freelance.",
        ],
      },
      {
        title: "Grille indicative par livrable",
        content: [
          "- Landing page SEO complète (H1/H2/H3, FAQ, schémas, maillage) : 1 500€ à 2 500€ selon complexité.\n- Page service supplémentaire : 600€ à 900€.\n- Article 1500+ mots optimisé : 450€ à 650€.\n- Mise en place sitemap/robots + suivi GSC : 250€ à 400€.\n- Pack Core Web Vitals (analyse + optimisation) : 900€ à 1 400€.",
          "Ces ordres de grandeur aident à cadrer vos appels d'offres. Ils peuvent varier selon l'état de votre codebase et la présence d'un design system.",
        ],
      },
      {
        title: "Roadmap budgétaire sur 60 jours",
        content: [
          "Jour 0-10 : cadrage, choix du modèle (forfait ou hybride), livraison de l'architecture et des premiers wireframes. Paiement d'un acompte pour sécuriser le planning.",
          "Jour 11-25 : développement et mise en ligne des pages prioritaires (accueil, services), intégration des schémas et du sitemap. Vérification des CWV et ajustements rapides.",
          "Jour 26-45 : production des articles longue traîne, optimisation du maillage interne, mise en place des suivis GSC et analytics, tests A/B sur les CTA.",
          "Jour 46-60 : consolidation (rafraîchissement de contenu, ajout de FAQ, netlinking local), bilan budgétaire et ajustement du retainer pour la phase de croissance.",
        ],
      },
    ],
    conclusion:
      "Un budget maîtrisé repose sur un périmètre clair, un modèle de facturation adapté et des livrables SEO tangibles (sitemaps, schémas, Core Web Vitals). En travaillant avec un développeur freelance à Paris spécialisé en Next.js, vous réduisez les risques techniques et gagnez en visibilité locale.",
    faq: [
      {
        q: "Peut-on mixer forfait et régie ?",
        a: "Oui, c'est même efficace : un forfait pour la livraison initiale, puis une régie ou un retainer pour les optimisations continues et les évolutions.",
      },
      {
        q: "Les prix incluent-ils l'hébergement ?",
        a: "L'hébergement Vercel Starter est inclus pour des volumes raisonnables. Les plans Pro/Enterprise sont facturés au coût réel après validation.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((item) => item.slug === params.slug);
  const body = post ? articleBodies[post.slug] : undefined;

  if (!post || !body) {
    return {};
  }

  const canonical = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      type: "article",
      images: post.image ? [{ url: post.image, width: 1200, height: 630, alt: post.title }] : undefined,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
    },
  };
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  const body = post ? articleBodies[post.slug] : undefined;

  if (!post || !body) {
    notFound();
  }

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
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.h1 ?? post.title,
    description: post.description,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: "Développeur freelance Paris",
    },
    publisher: {
      "@type": "Organization",
      name: "Développeur freelance Paris",
      logo: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=400&q=60",
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: body.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main className="mx-auto w-full max-w-4xl px-6 pb-14 pt-8 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="space-y-8">
        <header className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-black/20">
          <div className="text-xs text-slate-400">{post.readingTime}</div>
          <h1 className="text-3xl font-semibold text-white">{post.h1 ?? post.title}</h1>
          <p className="text-slate-300">{post.description}</p>
        </header>

        <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-inner shadow-black/20">
          <section>
            <p className="text-slate-300">{body.intro}</p>
          </section>
          {body.sections.map((section) => (
            <section key={section.title} className="space-y-2">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              {section.content.map((paragraph) => (
                <p key={paragraph.substring(0, 40)} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200">
            <h3 className="text-base font-semibold text-white">Aller plus loin</h3>
            <p className="mt-2 text-slate-300">
              Vous cherchez un accompagnement concret ? Consultez le service Next.js pour un plan d'action clé en main et retournez à
              l'accueil pour découvrir l'offre complète.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 font-semibold text-indigo-200 hover:text-white" href="/services/developpeur-nextjs-paris">
                Voir le service Next.js
              </Link>
              <Link className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 font-semibold text-indigo-200 hover:text-white" href="/">
                Retour à l'accueil
              </Link>
            </div>
          </section>
        </div>

        <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-black/20">
          <h2 className="text-xl font-semibold text-white">FAQ</h2>
          {body.faq.map((item) => (
            <details key={item.q} className="rounded-lg border border-slate-800 bg-slate-900/70 p-3 text-slate-200">
              <summary className="cursor-pointer text-sm font-semibold text-white">{item.q}</summary>
              <p className="mt-2 text-sm text-slate-300">{item.a}</p>
            </details>
          ))}
        </section>

        <section className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-black/20">
          <h2 className="text-xl font-semibold text-white">Conclusion</h2>
          <p className="text-slate-300">{body.conclusion}</p>
        </section>

        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner shadow-black/20">
          <p className="text-sm text-slate-300">
            Besoin d'un développeur freelance à Paris ?
            <Link className="font-semibold text-indigo-200 hover:text-white" href="/">
              {" "}Retour à l'accueil
            </Link>{" "}
            ou
            <Link className="font-semibold text-indigo-200 hover:text-white" href="/services">
              {" "}découvrez les services.
            </Link>
          </p>
        </footer>
      </article>
    </main>
  );
}
