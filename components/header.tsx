import Link from "next/link";
import { getIndustries, getServices } from "@/lib/data";

const nav = [
  ["Projekte", "/projekte"],
  ["Über uns", "/ueber-uns"],
  ["Zertifikate", "/zertifikate-compliance"],
  ["Karriere", "/karriere"],
  ["Kontakt", "/kontakt"],
] as const;

export async function Header() {
  const [services, industries] = await Promise.all([getServices(), getIndustries()]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-px flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-bold">RTA Industrie- & Anlagenservice</Link>
        <nav className="hidden items-center gap-6 text-sm lg:flex">
          <div className="group relative">
            <button className="font-medium">Leistungen</button>
            <div className="invisible absolute left-0 top-8 w-80 rounded-xl border bg-white p-4 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {services.slice(0, 8).map((s) => <Link key={s.slug} href={`/leistungen/${s.slug}`} className="block rounded px-3 py-2 hover:bg-slate-50">{s.title}</Link>)}
            </div>
          </div>

          <div className="group relative">
            <button className="font-medium">Branchen</button>
            <div className="invisible absolute left-0 top-8 w-80 rounded-xl border bg-white p-4 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {industries.slice(0, 8).map((i) => <Link key={i.slug} href="/branchen" className="block rounded px-3 py-2 hover:bg-slate-50">{i.title}</Link>)}
            </div>
          </div>

          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link href="/kontakt" className="rounded bg-brand px-4 py-2 text-sm font-semibold text-white">Projekt anfragen</Link>
      </div>
    </header>
  );
}
