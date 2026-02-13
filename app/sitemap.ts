import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/leistungen", "/branchen", "/projekte", "/ueber-uns", "/zertifikate-compliance", "/karriere", "/kontakt", "/impressum", "/datenschutz"];
  return routes.map((route) => ({ url: `https://www.rta-gmbh.de${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : 0.7 }));
}
