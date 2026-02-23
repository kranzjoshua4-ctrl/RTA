import { sanityClient, sanityEnabled } from "./sanity";
import { Certificate, Industry, Job, Project, Service } from "./types";

const fallbackServices: Service[] = [
  { title: "Anlagenbau & Industriemontage", slug: "anlagenbau-industriemontage", excerpt: "Montage komplexer Industrieanlagen mit klaren Verantwortlichkeiten." },
  { title: "Industrierohrleitungsbau", slug: "industrierohrleitungsbau", excerpt: "Passgenaue Rohrleitungssysteme für Energie- und Prozessanlagen." },
  { title: "Schweißtechnik", slug: "schweisstechnik", excerpt: "WIG, WIG/MAG, Hochdruck, Edelstahl sowie Duplex/Lean Duplex." },
  { title: "Wartung, Inspektion, Instandhaltung", slug: "wartung-instandhaltung", excerpt: "Planbare Verfügbarkeit und minimierte Ausfallzeiten." },
  { title: "Inbetriebnahme & Stillstände", slug: "inbetriebnahme-stillstand", excerpt: "Strukturierte Umsetzung in kritischen Zeitfenstern." },
  { title: "Technische Dokumentation", slug: "technische-dokumentation", excerpt: "Nachvollziehbare Unterlagen für Audit- und Betreiberanforderungen." }
];

const fallbackIndustries: Industry[] = [
  { title: "Kraftwerke", slug: "kraftwerke", description: "Rohrleitungs- und Wartungsleistungen im laufenden Betrieb und im Stillstand." },
  { title: "Raffinerien & Petrochemie", slug: "raffinerien-petrochemie", description: "Sicherheitsorientierte Umsetzung bei hohen regulatorischen Anforderungen." },
  { title: "Chemie / Pharma", slug: "chemie-pharma", description: "Hygienische, präzise und dokumentierte Montageprozesse." }
];

const fallbackProjects: Project[] = [
  { title: "Stillstandsprojekt Energiepark", slug: "stillstandsprojekt-energiepark", location: "Süddeutschland", period: "Q3 2024", description: "Koordination von Schweißteams und Vorrichtern inklusive Dokumentation." },
  { title: "Rohrleitungsmodernisierung Prozessanlage", slug: "rohrleitungsmodernisierung-prozessanlage", location: "NRW", period: "2023–2024", description: "Austausch kritischer Leitungsabschnitte während geplanter Abschaltung." }
];

const fallbackCertificates: Certificate[] = [
  { title: "SGU / SCC** (SCC-VAZ 2021)", description: "Sicherheits- und Gesundheitsschutzmanagement für Kontraktoren.", validity: "Gültig bis 01/2027" },
  { title: "Mitgliedschaft Berufsgenossenschaft", description: "BG-Mitgliedschaft vorhanden." },
  { title: "Betriebshaftpflichtversicherung", description: "Umfangreicher Versicherungsschutz vorhanden." }
];

const fallbackJobs: Job[] = [
  { title: "Schweißer (WIG / WIG-MAG)", location: "Deutschlandweit", type: "Vollzeit", description: "Einsatz in Industrieprojekten mit Fokus auf Qualität und Sicherheit.", benefits: ["Langfristige Projekte", "Klare Einsatzplanung", "Weiterbildung"] },
  { title: "Bauleiter / Projektleiter", location: "Bodenheim + Projektstandorte", type: "Vollzeit", description: "Koordination von Teams, Terminen und Dokumentationsanforderungen." }
];

async function query<T>(groq: string, fallback: T, params?: Record<string, string>): Promise<T> {
  if (!sanityEnabled) return fallback;
  try {
    return await sanityClient.fetch(groq, params);
  } catch {
    return fallback;
  }
}

export const getServices = () => query<Service[]>(`*[_type == "service"] | order(title asc){title, "slug": slug.current, excerpt, body, keywords}`, fallbackServices);
export const getServiceBySlug = (slug: string) => query<Service | null>(`*[_type == "service" && slug.current == $slug][0]{title, "slug": slug.current, excerpt, body, keywords}`, fallbackServices.find((s) => s.slug === slug) ?? null, { slug });

export const getIndustries = () => query<Industry[]>(`*[_type == "industry"] | order(title asc){title, "slug": slug.current, description, typicalServices}`, fallbackIndustries);

export const getProjects = () => query<Project[]>(`*[_type == "project"] | order(_createdAt desc){title, "slug": slug.current, location, period, description, services}`, fallbackProjects);
export const getProjectBySlug = (slug: string) => query<Project | null>(`*[_type == "project" && slug.current == $slug][0]{title, "slug": slug.current, location, period, description, services}`, fallbackProjects.find((p) => p.slug === slug) ?? null, { slug });

export const getCertificates = () => query<Certificate[]>(`*[_type == "certificate"] | order(_createdAt desc){title, description, validity}`, fallbackCertificates);
export const getJobs = () => query<Job[]>(`*[_type == "job"] | order(_createdAt desc){title, location, type, description, requirements, benefits, applyEmail}`, fallbackJobs);
