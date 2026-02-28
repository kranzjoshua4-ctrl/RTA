import { defineType, defineField } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", type: "text", validation: (r) => r.required() }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "icon", type: "string" }),
    defineField({ name: "keywords", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "seo", type: "seo" }),
  ],
});
