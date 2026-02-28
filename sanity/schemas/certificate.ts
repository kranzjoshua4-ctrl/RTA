import { defineType, defineField } from "sanity";

export const certificateType = defineType({
  name: "certificate",
  title: "Certificates/Compliance",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "validity", type: "string" }),
    defineField({ name: "document", type: "file" }),
  ],
});
