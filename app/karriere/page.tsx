import { getJobs } from "@/lib/data";

export const metadata = { title: "Karriere" };

export default async function CareerPage() {
  const jobs = await getJobs();
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Karriere</h1>
      <p>Wir suchen Monteure, Vorrichter, Schweißer (WIG/WIG-MAG) sowie Bauleiter/Projektleiter.</p>
      <div className="grid gap-4">{jobs.map((job) => <article key={job.title} className="rounded-2xl border p-6"><h2 className="text-xl font-semibold">{job.title}</h2><p className="text-sm text-slate-600">{job.location} · {job.type}</p><p className="mt-2">{job.description}</p><p className="mt-3 text-sm">Benefits: Langfristige Projekte, klare Einsatzplanung, Weiterbildung, modernes Arbeitsschutz- und Qualitätsverständnis.</p><a className="mt-4 inline-block text-brand" href={`mailto:${job.applyEmail || "info@rta-gmbh.de"}`}>Jetzt bewerben</a></article>)}</div>
    </section>
  );
}
