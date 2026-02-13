import { ContactForm } from "@/components/contact-form";

export const metadata = { title: "Kontakt" };

export default function ContactPage() {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div>
        <h1 className="text-3xl font-bold">Kontakt</h1>
        <p className="mt-3">RTA Industrie- & Anlagenservice GmbH<br/>Am Kümmerling 24-26, 55294 Bodenheim<br/>info@rta-gmbh.de</p>
        <p className="mt-3 text-sm text-slate-600">Telefonnummer optional per CMS.</p>
      </div>
      <ContactForm />
    </section>
  );
}
