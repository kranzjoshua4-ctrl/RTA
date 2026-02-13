import { defineType, defineField } from "sanity";
import { seoType } from "./seo";

export const pageType = defineType({
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "sections", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "seo", type: "seo" }),
  ],
  preview: { select: { title: "title" } },
});
