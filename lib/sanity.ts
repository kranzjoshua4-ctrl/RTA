import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-08-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: unknown) => builder.image(source);

export const sanityEnabled = Boolean(projectId);
