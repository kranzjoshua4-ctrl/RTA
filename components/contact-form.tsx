"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContact } from "@/lib/actions";

const initialState = { ok: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button className="rounded bg-brand px-5 py-3 font-semibold text-white" disabled={pending}>{pending ? "Sende..." : "Projekt anfragen"}</button>;
}

export function ContactForm() {
  const [state, action] = useFormState(submitContact as never, initialState);

  return (
    <form action={action} className="grid gap-4 rounded-2xl border border-slate-200 p-6">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 md:grid-cols-2">
        <input name="name" placeholder="Name" className="rounded border p-3" required />
        <input name="company" placeholder="Firma" className="rounded border p-3" required />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input type="email" name="email" placeholder="E-Mail" className="rounded border p-3" required />
        <input name="phone" placeholder="Telefon (optional)" className="rounded border p-3" />
      </div>
      <input name="projectType" placeholder="Projektart" className="rounded border p-3" required />
      <textarea name="message" placeholder="Nachricht" className="min-h-36 rounded border p-3" required />
      <SubmitButton />
      {state.message && <p className={state.ok ? "text-green-700" : "text-red-700"}>{state.message}</p>}
    </form>
  );
}
