import { useId, useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { submitContactMessage } from "@/services/contact";
import { contactCopy } from "@/content/contact";
import type { ContactPayload } from "@/types";

type Status = "idle" | "submitting" | "sent" | "error";

const EMPTY: ContactPayload = { name: "", email: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const errorId = useId();

  const update = <K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setStatus("submitting");
    const result = await submitContactMessage(form);
    if (result.ok) {
      setStatus("sent");
      setForm(EMPTY);
    } else {
      setStatus("error");
      setError(result.error);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-describedby={error ? errorId : undefined}
      className="rounded-[32px] border border-border bg-gradient-to-br from-elevated to-blush/10 p-8 shadow-luxe backdrop-blur md:p-12"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field
          id="contact-name"
          label="Name"
          value={form.name}
          onChange={(v) => update("name", v)}
          placeholder="Your name"
          maxLength={100}
          autoComplete="name"
          required
        />
        <Field
          id="contact-email"
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
          placeholder="you@company.com"
          maxLength={200}
          autoComplete="email"
          required
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="contact-message"
          className="mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-mute"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={6}
          maxLength={2000}
          required
          placeholder="Tell me a little about what you're working on…"
          className="w-full resize-none rounded-2xl border border-border bg-surface/70 px-4 py-3 text-sm text-ink placeholder:text-mute/60 outline-none transition focus:border-rose/50 focus:bg-elevated focus:ring-2 focus:ring-rose/15"
        />
      </div>

      <div aria-live="polite" className="min-h-0">
        {error && (
          <div
            id={errorId}
            role="alert"
            className="mt-5 rounded-2xl border border-rose/30 bg-rose/5 px-4 py-3 text-sm text-rose"
          >
            {error}
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-rose to-violet px-7 py-3.5 text-sm font-medium text-white shadow-luxe transition hover:brightness-110 disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
          <Send className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
        </button>
        <div aria-live="polite" role="status" className="min-h-0">
          {status === "sent" && (
            <span className="inline-flex items-center gap-2 text-sm text-sage">
              <CheckCircle2 className="h-4 w-4" aria-hidden /> {contactCopy.successMessage}
            </span>
          )}
        </div>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  maxLength,
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-mute"
      >
        {label}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 text-sm text-ink placeholder:text-mute/60 outline-none transition focus:border-rose/50 focus:bg-elevated focus:ring-2 focus:ring-rose/15"
      />
    </div>
  );
}
