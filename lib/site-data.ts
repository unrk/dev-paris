export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://dev-freelance-paris.vercel.app").replace(/\/$/, "");

export const business = {
  name: "Développeur freelance Paris",
  legalName: "Développeur freelance Paris",
  street: "35 Rue du Louvre",
  postalCode: "75002",
  city: "Paris",
  country: "France",
  phone: "+33 6 12 34 56 78",
  email: "contact@dev-freelance-paris.com",
  url: siteUrl,
  logo: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=400&q=60",
  priceRange: "€€",
  geo: { lat: 48.866667, lng: 2.333333 },
  openingHours: ["Mo-Fr 09:00-19:00", "Sa 10:00-14:00"],
};

export const services = [
  {
    slug: "developpeur-nextjs-paris",
    title: "Développeur Next.js freelance à Paris",
    h1: "Développeur Next.js freelance à Paris pour vos applications web rapides",
    description:
      "Création d'applications Next.js ultra-performantes, optimisées SEO et Core Web Vitals pour les entreprises parisiennes.",
    keywords: [
      "développeur Next.js Paris",
      "freelance Next.js",
      "application web performante",
      "SEO technique Next.js",
    ],
  },
  {
    slug: "developpeur-php-paris",
    title: "Développeur PHP freelance à Paris",
    h1: "Développeur PHP freelance à Paris pour vos sites robustes",
    description:
      "Développement PHP moderne (Symfony, Laravel) avec sécurité, scalabilité et intégrations tierces pour les PME parisiennes.",
    keywords: ["développeur PHP Paris", "freelance PHP", "Symfony", "Laravel"],
  },
  {
    slug: "developpeur-javascript-paris",
    title: "Développeur JavaScript freelance à Paris",
    h1: "Développeur JavaScript freelance à Paris pour vos interfaces dynamiques",
    description:
      "Front-end réactif, performances et accessibilité grâce à JavaScript moderne, React et TypeScript.",
    keywords: ["développeur JavaScript Paris", "freelance JS", "React", "TypeScript"],
  },
  {
    slug: "integration-html-css-paris",
    title: "Intégrateur HTML/CSS freelance à Paris",
    h1: "Intégrateur HTML/CSS freelance à Paris pour des interfaces propres",
    description:
      "Intégration HTML5/CSS3 pixel-perfect, responsive et accessible pour vos landing pages et sites vitrines.",
    keywords: ["intégrateur HTML CSS Paris", "freelance front-end", "accessibilité web"],
  },
];

export const blogPosts = [
  {
    slug: "developpeur-freelance-paris-guide-complet",
    title: "Développeur freelance à Paris : guide complet pour choisir le bon profil",
    description:
      "Comment sélectionner un développeur freelance à Paris, optimiser votre projet web et sécuriser délais, budget et SEO.",
    h1: "Développeur freelance à Paris : le guide complet pour réussir votre projet web",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2024-09-15T09:00:00Z",
    updatedAt: "2024-10-10T09:00:00Z",
    keywords: [
      "développeur freelance Paris",
      "choisir développeur freelance",
      "tarif développeur Paris",
      "Next.js freelance",
    ],
    readingTime: "12 minutes",
  },
  {
    slug: "tarifs-developpeur-freelance-paris",
    title: "Tarifs d'un développeur freelance à Paris : ce qu'il faut savoir",
    description:
      "Comprendre les tarifs d'un développeur freelance à Paris, les modèles de facturation et comment optimiser votre budget.",
    h1: "Tarifs d'un développeur freelance à Paris : modèles, budget et ROI",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2024-08-20T09:00:00Z",
    updatedAt: "2024-09-05T09:00:00Z",
    keywords: [
      "tarifs développeur freelance Paris",
      "budget projet web",
      "freelance Next.js Paris",
      "coût développeur",
    ],
    readingTime: "10 minutes",
  },
];

export const faqs = [
  {
    question: "Pourquoi choisir un développeur freelance à Paris pour un projet Next.js ?",
    answer:
      "Un freelance Next.js à Paris combine proximité, réactivité et maîtrise des Core Web Vitals pour livrer un site rapide, indexable et optimisé SEO local.",
  },
  {
    question: "Quel délai pour livrer une landing page SEO optimisée ?",
    answer:
      "Entre 10 et 15 jours incluant audit sémantique, maquettage HTML, intégration Next.js, tests de performance et mise en production sur Vercel.",
  },
  {
    question: "Proposez-vous la maintenance et les optimisations continues ?",
    answer:
      "Oui, via des forfaits de TMA mensuels couvrant mises à jour, suivi Search Console, optimisation continue du maillage interne et des Core Web Vitals.",
  },
];

export const primaryNavigation = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];
