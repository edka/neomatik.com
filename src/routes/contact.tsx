import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/ContactForm";
import { Seo } from "@/components/site/Seo";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const contacts = [
    { label: "Booking", email: site.email.booking, note: "Live performances, DJ sets, festivals." },
    { label: "Press", email: site.email.press, note: "Interviews, features, promo requests." },
    { label: "Management", email: site.email.management, note: "Collaborations & long-term projects." },
  ];

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Neomatik — bookings, press, management, and general inquiries."
        path="/contact"
      />
      <section className="pt-32 md:pt-44 pb-16 spotlight">
        <div className="container-x max-w-4xl">
          <div className="text-xs uppercase tracking-[0.3em] text-violet">Contact</div>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Get in touch.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            For the fastest response, email directly. Otherwise, the form below routes to
            the right inbox.
          </p>
        </div>
      </section>

      <section className="border-t border-hairline py-16 md:py-24">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="space-y-8">
              {contacts.map((c) => (
                <div key={c.label} className="border-b border-hairline pb-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-violet">
                    {c.label}
                  </div>
                  <a
                    href={`mailto:${c.email}`}
                    className="mt-2 block font-display text-2xl tracking-tight hover:text-violet"
                  >
                    {c.email}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
