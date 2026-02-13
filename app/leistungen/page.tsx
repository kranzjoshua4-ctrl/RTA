import { ServiceGrid } from "@/components/sections";
import { getServices } from "@/lib/data";

export const metadata = { title: "Leistungen" };

export default async function ServicesPage() {
  const services = await getServices();
  return <section className="space-y-6"><h1 className="text-3xl font-bold">Leistungen</h1><p>Klar definierte Leistungspakete von Montage bis Instandhaltung.</p><ServiceGrid services={services} /></section>;
}
