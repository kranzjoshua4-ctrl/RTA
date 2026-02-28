import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">{service.title}</h1>
      <p>{service.excerpt}</p>
      <div className="rounded-xl border p-5 text-sm text-slate-700">
        <p>
          Diese Leistung wird werkvertraglich organisiert: mit klaren Ergebnissen, Projektverantwortung vor Ort,
          strukturierter Teamführung und lückenarmer Dokumentation.
        </p>
      </div>
    </section>
  );
}
