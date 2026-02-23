import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/data";

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-sm text-slate-600">{project.location} · {project.period}</p>
      <p>{project.description}</p>
      <p className="rounded-xl border p-4 text-sm text-slate-700">Schwerpunkt: termintreue Umsetzung, Sicherheitsfokus und saubere Projektdokumentation.</p>
    </section>
  );
}
