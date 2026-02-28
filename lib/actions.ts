"use server";

import { z } from "zod";
import { Resend } from "resend";
import type { ActionState } from "@/lib/types";

const schema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.string().min(2),
  message: z.string().min(10),
  website: z.string().max(0).optional(),
});

const MAX_UPLOAD_MB = Number(process.env.MAX_UPLOAD_MB ?? "5");

export async function submitContact(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const payload = {
    name: String(formData.get("name") ?? ""),
    company: String(formData.get("company") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    projectType: String(formData.get("projectType") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
  };

  const parsed = schema.safeParse(payload);
  if (!parsed.success) return { ok: false, message: "Bitte prüfen Sie Ihre Eingaben." };

  const file = formData.get("attachment");
  let attachmentInfo = "Kein Anhang";

  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_UPLOAD_MB * 1024 * 1024) {
      return { ok: false, message: `Datei zu groß (max. ${MAX_UPLOAD_MB} MB).` };
    }
    attachmentInfo = `${file.name} (${Math.ceil(file.size / 1024)} KB)`;
  }

  const to = process.env.CONTACT_TO_EMAIL || "info@rta-gmbh.de";
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    const resend = new Resend(apiKey);
    const attachments = file instanceof File && file.size > 0
      ? [{ filename: file.name, content: Buffer.from(await file.arrayBuffer()) }]
      : undefined;

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "RTA Website <onboarding@resend.dev>",
      to,
      subject: `Neue Projektanfrage: ${parsed.data.projectType}`,
      text: `${JSON.stringify(parsed.data, null, 2)}\n\nAnhang: ${attachmentInfo}`,
      attachments,
    });
  }

  const webhook = process.env.CRM_WEBHOOK_URL;
  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...parsed.data, attachment: attachmentInfo }),
    });
  }

  return { ok: true, message: "Vielen Dank. Wir melden uns kurzfristig zurück." };
}
