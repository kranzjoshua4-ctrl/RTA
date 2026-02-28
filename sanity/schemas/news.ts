import { defineType, defineField } from "sanity";

export const newsType = defineType({
  name: "news",
  title: "News/Insights",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({ name: "excerpt", type: "text" }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "seo", type: "seo" }),
  ],
});
