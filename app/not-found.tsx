import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-start justify-center gap-4 px-6 py-10 text-slate-100">
      <p className="text-sm font-semibold text-slate-400">404</p>
      <h1 className="text-3xl font-semibold text-white">Page introuvable</h1>
      <p className="text-slate-300">
        La page que vous cherchez n’existe pas ou a été déplacée.
      </p>
      <div className="flex flex-wrap gap-3 text-sm">
        <Link className="rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-2 font-semibold text-indigo-200 hover:text-white" href="/">
          Retour à l’accueil
        </Link>
        <Link className="rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-2 font-semibold text-indigo-200 hover:text-white" href="/services">
          Voir les services
        </Link>
      </div>
    </main>
  );
}
