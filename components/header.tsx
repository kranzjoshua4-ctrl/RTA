import Link from "next/link";

const nav = [
  ["Leistungen", "/leistungen"],
  ["Branchen", "/branchen"],
  ["Projekte", "/projekte"],
  ["Über uns", "/ueber-uns"],
  ["Zertifikate", "/zertifikate-compliance"],
  ["Karriere", "/karriere"],
  ["Kontakt", "/kontakt"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-px flex h-16 items-center justify-between">
        <Link href="/" className="font-bold">RTA Industrie- & Anlagenservice</Link>
        <nav className="hidden gap-5 text-sm lg:flex">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link href="/kontakt" className="rounded bg-brand px-4 py-2 text-sm font-semibold text-white">Projekt anfragen</Link>
      </div>
    </header>
  );
}
