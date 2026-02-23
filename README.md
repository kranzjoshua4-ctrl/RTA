# RTA Industrie- & Anlagenservice Website

Moderne B2B Website auf Basis von **Next.js App Router + TypeScript + TailwindCSS + Sanity CMS**.

## Features
- SEO-ready (Metadata, OpenGraph, `sitemap.xml`, `robots.txt`, JSON-LD Organization)
- CMS-gestützte Bereiche: Services, Branchen, Projekte, Zertifikate, Jobs, Pages, News
- Detailseiten für Leistungen und Projekte über Slugs
- Kontaktformular via Server Actions mit Resend + optionalem CRM Webhook + optionalem Datei-Upload
- Cookie Banner (minimal, EU-konform als Basis)
- Responsive UI, sticky Header, CTA-Fokus
- Sanity Studio unter `/studio`

## Setup lokal
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Sanity konfigurieren
1. Sanity Projekt anlegen (`sanity init`) und Project-ID in `.env.local` setzen.
2. Studio läuft im gleichen Next-Projekt unter `http://localhost:3000/studio`.
3. Schemas befinden sich in `sanity/schemas/*`.

## Seed-Daten einspielen
```bash
npm run seed
```

Erfordert `SANITY_API_TOKEN` mit Schreibrechten.

## Deployment (Vercel)
- Projekt mit Vercel verbinden
- Alle Variablen aus `.env.example` in Vercel setzen
- Build Command: `npm run build`
- Output: Next.js Standard

## Formulare
Kontaktformular (`/kontakt`) sendet:
- E-Mail via Resend, wenn `RESEND_API_KEY` gesetzt
- Optional POST an `CRM_WEBHOOK_URL`

Honeypot-Feld ist aktiv (`website`).

Optionaler Datei-Upload im Kontaktformular ist möglich (Größenlimit über `MAX_UPLOAD_MB`, Standard: 5MB).

## Hinweis zu Rechtstexten
`/impressum` und `/datenschutz` sind strukturierte Platzhalter und müssen vor Livegang juristisch finalisiert werden.
