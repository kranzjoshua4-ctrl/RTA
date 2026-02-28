import { defineType, defineField } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projects/References",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "client", type: "string" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "period", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "services", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "images", type: "array", of: [{ type: "image" }] }),
    defineField({ name: "tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "seo", type: "seo" }),
  ],
});
