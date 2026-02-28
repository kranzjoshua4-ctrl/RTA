import { CookieBanner } from "@/components/cookie-banner";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rta-gmbh.de"),
  title: {
    default: "RTA Industrie- & Anlagenservice GmbH",
    template: "%s | RTA"
  },
  description: "Industrie-, Anlagen- und Rohrleitungsbau mit Schweißtechnik, Montage und Instandhaltung. Werkvertraglich organisiert, dokumentiert und termintreu.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "RTA Industrie- & Anlagenservice GmbH",
    description: "Wir schaffen Verbindungen, die bewegen.",
    url: "https://www.rta-gmbh.de"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RTA Industrie- & Anlagenservice GmbH",
    slogan: "Wir schaffen Verbindungen, die bewegen.",
    email: "info@rta-gmbh.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Am Kümmerling 24-26",
      postalCode: "55294",
      addressLocality: "Bodenheim",
      addressCountry: "DE"
    }
  };

  return (
    <html lang="de">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Header />
        <main className="container-px py-10">{children}</main>
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
