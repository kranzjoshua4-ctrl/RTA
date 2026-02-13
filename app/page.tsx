import { MotionFade } from "@/components/motion-fade";
import Link from "next/link";
import { CtaBand, IndustryGrid, ProjectGrid, ServiceGrid } from "@/components/sections";
import { getIndustries, getProjects, getServices } from "@/lib/data";

export default async function HomePage() {
  const [services, industries, projects] = await Promise.all([getServices(), getIndustries(), getProjects()]);

  return (
    <div className="space-y-16">
      <section className="rounded-3xl bg-slate-900 p-10 text-white">
        <p className="text-sm uppercase tracking-wide text-slate-300">RTA Industrie- & Anlagenservice GmbH</p>
        <h1 className="mt-4 text-4xl font-bold">Industrie- & Anlagenservice. Präzise. Sicher. Termintreu.</h1>
        <p className="mt-4 max-w-3xl text-slate-200">RTA realisiert Montage, Rohrleitungsbau und Schweißtechnik – mit klaren Leistungspaketen, Projektverantwortung und sauberer Dokumentation.</p>
        <div className="mt-6 flex gap-3">
          <Link className="rounded bg-brand px-4 py-2 font-semibold" href="/kontakt">Projekt anfragen</Link>
          <Link className="rounded border border-white px-4 py-2" href="/leistungen">Leistungen ansehen</Link>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-4">
        {[
          "Werkvertraglich organisiert",
          "International einsetzbare Teams",
          "Dokumentation & Koordination",
          "24/7 erreichbar"
        ].map((item) => <div key={item} className="rounded-xl border p-4 text-sm font-medium">{item}</div>)}
      </section>

      <MotionFade><section><h2 className="mb-4 text-2xl font-bold">Leistungen</h2><ServiceGrid services={services.slice(0, 6)} /></section></MotionFade>
      <section><h2 className="mb-4 text-2xl font-bold">Branchen</h2><IndustryGrid industries={industries} /></section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">So arbeiten wir</h2>
        <div className="grid gap-4 md:grid-cols-4">{["Analyse & Planung", "Teamaufstellung & Koordination", "Umsetzung & Qualitätssicherung", "Dokumentation & Übergabe"].map((step, i) => <div key={step} className="rounded-2xl border p-4"><p className="text-xs text-brand">Schritt {i + 1}</p><p className="font-semibold">{step}</p></div>)}</div>
      </section>

      <section className="rounded-2xl border p-6">
        <h2 className="text-2xl font-bold">Zertifikate & Compliance</h2>
        <p className="mt-2">SGU / SCC** (SCC-VAZ 2021) gültig bis 01/2027 · BG-Mitgliedschaft vorhanden · Umfangreicher Versicherungsschutz vorhanden.</p>
      </section>

      <section><h2 className="mb-4 text-2xl font-bold">Referenzprojekte</h2><ProjectGrid projects={projects.slice(0, 3)} /></section>
      <CtaBand />
    </div>
  );
}
