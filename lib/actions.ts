"use server";

import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.string().min(2),
  message: z.string().min(10),
  website: z.string().max(0).optional(),
});

export async function submitContact(formData: FormData) {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    projectType: formData.get("projectType"),
    message: formData.get("message"),
    website: formData.get("website"),
  });

  if (!parsed.success) return { ok: false, message: "Bitte prüfen Sie Ihre Eingaben." };

  const to = process.env.CONTACT_TO_EMAIL || "info@rta-gmbh.de";
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "RTA Website <onboarding@resend.dev>",
      to,
      subject: `Neue Projektanfrage: ${parsed.data.projectType}`,
      text: JSON.stringify(parsed.data, null, 2),
    });
  }

  const webhook = process.env.CRM_WEBHOOK_URL;
  if (webhook) {
    await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(parsed.data) });
  }

  return { ok: true, message: "Vielen Dank. Wir melden uns kurzfristig zurück." };
}
