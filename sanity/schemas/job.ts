import { defineType, defineField } from "sanity";

export const jobType = defineType({
  name: "job",
  title: "Jobs",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "type", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "requirements", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "benefits", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "applyEmail", type: "string" }),
  ],
});
