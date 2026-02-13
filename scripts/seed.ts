import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-08-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const docs = [
  { _id: "service-anlagenbau", _type: "service", title: "Anlagenbau & Industriemontage", slug: { _type: "slug", current: "anlagenbau-industriemontage" }, excerpt: "Montage komplexer Industrieanlagen mit klaren Verantwortlichkeiten." },
  { _id: "service-rohrleitungsbau", _type: "service", title: "Industrierohrleitungsbau", slug: { _type: "slug", current: "industrierohrleitungsbau" }, excerpt: "Passgenaue Rohrleitungssysteme für Energie- und Prozessanlagen." },
  { _id: "industry-kraftwerke", _type: "industry", title: "Kraftwerke", slug: { _type: "slug", current: "kraftwerke" }, description: "Rohrleitungs- und Wartungsleistungen im laufenden Betrieb und im Stillstand." },
  { _id: "industry-raffinerien", _type: "industry", title: "Raffinerien & Petrochemie", slug: { _type: "slug", current: "raffinerien-petrochemie" }, description: "Sicherheitsorientierte Umsetzung bei hohen regulatorischen Anforderungen." },
  { _id: "project-1", _type: "project", title: "Stillstandsprojekt Energiepark", slug: { _type: "slug", current: "stillstandsprojekt-energiepark" }, location: "Süddeutschland", period: "Q3 2024", description: "Koordination von Schweißteams und Vorrichtern inklusive Dokumentation." },
  { _id: "project-2", _type: "project", title: "Rohrleitungsmodernisierung Prozessanlage", slug: { _type: "slug", current: "rohrleitungsmodernisierung-prozessanlage" }, location: "NRW", period: "2023-2024", description: "Austausch kritischer Leitungsabschnitte während geplanter Abschaltung." },
  { _id: "cert-1", _type: "certificate", title: "SGU / SCC** (SCC-VAZ 2021)", description: "Sicherheits- und Gesundheitsschutzmanagement für Kontraktoren.", validity: "Gültig bis 01/2027" },
  { _id: "cert-2", _type: "certificate", title: "Betriebshaftpflichtversicherung", description: "Umfangreicher Versicherungsschutz vorhanden." },
  { _id: "job-1", _type: "job", title: "Schweißer (WIG / WIG-MAG)", location: "Deutschlandweit", type: "Vollzeit", description: "Einsatz in Industrieprojekten mit Fokus auf Qualität und Sicherheit.", applyEmail: "info@rta-gmbh.de" },
  { _id: "job-2", _type: "job", title: "Bauleiter / Projektleiter", location: "Bodenheim + Projektstandorte", type: "Vollzeit", description: "Koordination von Teams, Terminen und Dokumentationsanforderungen.", applyEmail: "info@rta-gmbh.de" }
];

async function run() {
  for (const doc of docs) {
    await client.createOrReplace(doc);
  }
  console.log(`Seeded ${docs.length} documents`);
}

run();
