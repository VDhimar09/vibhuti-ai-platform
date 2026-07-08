import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Section, Reveal } from "@/components/section";
import { GradientBlobs, Sparkle } from "@/components/decor";
import { ContactCard } from "@/components/contact-card";
import { ContactForm } from "@/components/contact-form";
import { contact, contactChannels, contactCopy } from "@/content/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vibhuti Dhimar" },
      { name: "description", content: contactCopy.intro },
      { property: "og:title", content: "Contact — Vibhuti Dhimar" },
      { property: "og:description", content: contactCopy.intro },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: "Contact — Vibhuti Dhimar" },
      { name: "twitter:description", content: contactCopy.intro },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="relative">
      <GradientBlobs />
      <Section
        eyebrow="Contact"
        title={
          <>
            Let's <span className="italic gradient-text">Connect</span>.
          </>
        }
        subtitle={contactCopy.intro}
      />

      <Section className="!pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {contactChannels.map((c, i) => (
            <ContactCard key={c.id} channel={c} index={i} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow={contactCopy.formEyebrow}
        title={
          <>
            Start a <span className="italic gradient-text">conversation</span>.
          </>
        }
        className="!pt-0"
      >
        <Reveal>
          <ContactForm />
        </Reveal>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-border bg-gradient-to-br from-rose/10 via-elevated to-lavender/12 p-12 text-center shadow-luxe md:p-20">
            <Sparkle className="absolute left-10 top-10 text-rose" size={16} />
            <Sparkle className="absolute right-14 top-16 text-lavender" size={12} delay={1} />
            <Sparkle className="absolute bottom-14 left-1/3 text-blush" size={18} delay={2} />
            <h3 className="mx-auto max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Prefer <span className="italic gradient-text">email</span>?
            </h3>
            <p className="mx-auto mt-5 max-w-xl text-mute md:text-lg">
              Drop a line directly and I'll get back to you personally.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-rose to-violet px-7 py-3.5 text-sm font-medium text-white shadow-luxe transition hover:brightness-110"
              aria-label={`Email ${contact.email}`}
            >
              {contact.email} <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
