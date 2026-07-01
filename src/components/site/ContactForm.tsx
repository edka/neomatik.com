import { useState } from "react";
import { site } from "@/content/site";

type Kind = "booking" | "press" | "management" | "general";

export function ContactForm() {
  const [kind, setKind] = useState<Kind>("booking");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endpoint = site.formspreeEndpoint;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!endpoint) {
      setError(
        "The form isn't wired up yet. Please email us directly using the addresses on this page.",
      );
      return;
    }

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSent(true);
      else setError("Something went wrong. Please try email instead.");
    } catch {
      setError("Network error. Please try email instead.");
    }
  }

  if (sent) {
    return (
      <div className="glass rounded-sm p-8 text-center">
        <div className="font-display text-2xl">Message received.</div>
        <p className="mt-2 text-sm text-muted-foreground">
          We'll get back to you within a few business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass rounded-sm p-6 md:p-8">
      <div className="grid gap-4">
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Inquiry
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(["booking", "press", "management", "general"] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKind(k)}
                className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.15em] transition-colors ${
                  kind === k
                    ? "border-violet bg-violet text-white"
                    : "border-hairline text-muted-foreground hover:text-foreground"
                }`}
              >
                {k}
              </button>
            ))}
          </div>
          <input type="hidden" name="_subject" value={`Neomatik — ${kind} inquiry`} />
          <input type="hidden" name="inquiry_type" value={kind} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
        </div>
        <Field label="Organization" name="organization" />
        <Field label="Message" name="message" required multiline />

        {error && <div className="text-sm text-destructive">{error}</div>}

        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="text-xs text-muted-foreground">
            Or email directly:{" "}
            <a href={`mailto:${site.email[kind === "general" ? "management" : kind]}`} className="text-foreground hover:text-violet">
              {site.email[kind === "general" ? "management" : kind]}
            </a>
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-glow"
          >
            Send message <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  multiline = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
}) {
  const shared =
    "mt-2 block w-full rounded-sm border border-hairline bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-violet";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
        {required && <span className="text-violet"> *</span>}
      </span>
      {multiline ? (
        <textarea name={name} required={required} rows={5} className={shared} />
      ) : (
        <input type={type} name={name} required={required} className={shared} />
      )}
    </label>
  );
}
