import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 py-10">
      <div className="container-px grid gap-6 md:grid-cols-3">
        <div>
          <p className="font-semibold">RTA Industrie- & Anlagenservice GmbH</p>
          <p>Am Kümmerling 24-26, 55294 Bodenheim</p>
          <p>info@rta-gmbh.de</p>
        </div>
        <div>
          <p className="font-semibold">Leistungen</p>
          <p>Anlagenbau, Rohrleitungsbau, Schweißtechnik, Instandhaltung</p>
        </div>
        <div className="flex flex-col gap-1">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
