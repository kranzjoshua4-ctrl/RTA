import { getCertificates } from "@/lib/data";

export const metadata = { title: "Zertifikate & Compliance" };

export default async function CompliancePage() {
  const certificates = await getCertificates();
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Zertifikate & Compliance</h1>
      <div className="grid gap-4 md:grid-cols-2">{certificates.map((item) => <article key={item.title} className="rounded-2xl border p-5"><h2 className="font-semibold">{item.title}</h2><p className="mt-2 text-sm">{item.description}</p>{item.validity && <p className="mt-2 text-sm font-medium text-brand">{item.validity}</p>}</article>)}</div>
    </section>
  );
}
