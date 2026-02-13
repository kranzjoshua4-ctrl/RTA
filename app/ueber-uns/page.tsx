export const metadata = { title: "Über uns" };

export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Über uns</h1>
      <p>RTA ist Partner für Industrie-, Anlagen-, Tank- und Rohrleitungsbau. Wir liefern praxisorientierte Lösungen mit klaren Zuständigkeiten, strukturierter Teamführung und belastbarer Dokumentation.</p>
      <p>Unsere Teams sind national und international einsetzbar: von Montage und Bauleitung bis Instandhaltung, Koordination und Abnahmebegleitung.</p>
      <div className="rounded-2xl border p-6"><h2 className="text-xl font-semibold">Rollen im Einsatz</h2><p className="mt-2">Projektleiter, Bauleiter, Obermonteure, Monteure, Vorrichter und spezialisierte Schweißteams. Projektbezogene Nachweise (z. B. A1, Limosa, SCC, arbeitsmedizinische Bescheinigungen) sind verfügbar und stellbar.</p></div>
    </section>
  );
}
