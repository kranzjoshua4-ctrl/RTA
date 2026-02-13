import Link from "next/link";
import { Service, Industry, Project } from "@/lib/types";

export function ServiceGrid({ services }: { services: Service[] }) {
  return <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map((s) => <article key={s.slug} className="rounded-2xl border p-5"><h3 className="font-semibold">{s.title}</h3><p className="mt-2 text-sm text-slate-600">{s.excerpt}</p></article>)}</div>;
}

export function IndustryGrid({ industries }: { industries: Industry[] }) {
  return <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{industries.map((i) => <article key={i.slug} className="rounded-2xl border p-5"><h3 className="font-semibold">{i.title}</h3><p className="mt-2 text-sm text-slate-600">{i.description}</p></article>)}</div>;
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return <div className="grid gap-4 md:grid-cols-2">{projects.map((p) => <article key={p.slug} className="rounded-2xl border p-5"><h3 className="font-semibold">{p.title}</h3><p className="text-sm text-slate-600">{p.location} · {p.period}</p><p className="mt-2 text-sm">{p.description}</p></article>)}</div>;
}

export function CtaBand() {
  return (
    <section className="rounded-2xl bg-brand p-8 text-white">
      <h3 className="text-2xl font-bold">Sie planen ein Industrieprojekt?</h3>
      <p className="mt-2">Wir setzen definierte Leistungspakete termintreu und dokumentiert um.</p>
      <Link href="/kontakt" className="mt-4 inline-block rounded bg-white px-4 py-2 font-semibold text-brand">Rückruf anfordern</Link>
    </section>
  );
}
