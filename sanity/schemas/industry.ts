import { defineType, defineField } from "sanity";

export const industryType = defineType({
  name: "industry",
  title: "Industries",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "typicalServices", type: "array", of: [{ type: "string" }]}),
    defineField({ name: "cta", type: "string" }),
    defineField({ name: "seo", type: "seo" }),
  ],
});
