import { IndustryGrid } from "@/components/sections";
import { getIndustries } from "@/lib/data";

export const metadata = { title: "Branchen" };

export default async function IndustriesPage() {
  const industries = await getIndustries();
  return <section className="space-y-6"><h1 className="text-3xl font-bold">Branchen</h1><p>RTA ist in Energie, Prozessindustrie und Produktionsumgebungen einsetzbar.</p><IndustryGrid industries={industries} /></section>;
}
