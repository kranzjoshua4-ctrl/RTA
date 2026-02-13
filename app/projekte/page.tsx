import { ProjectGrid } from "@/components/sections";
import { getProjects } from "@/lib/data";

export const metadata = { title: "Projekte & Referenzen" };

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <section className="space-y-6"><h1 className="text-3xl font-bold">Projekte & Referenzen</h1><ProjectGrid projects={projects} /></section>;
}
