import { Reveal } from "@/components/section";
import { ArrowUpRight } from "lucide-react";
import type { ContactChannel } from "@/types";

const toneGradient: Record<ContactChannel["tone"], string> = {
  rose: "from-rose to-blush",
  lavender: "from-lavender to-violet",
};

/**
 * Individual contact channel card. Renders as either an anchor (when
 * `channel.href` exists) or a plain div (e.g. Location).
 */
export function ContactCard({
  channel,
  index = 0,
}: {
  channel: ContactChannel;
  index?: number;
}) {
  const Icon = channel.icon;

  const body = (
    <div className="group flex items-start gap-5 rounded-3xl border border-border bg-gradient-to-br from-elevated to-blush/10 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-rose/40 hover:shadow-luxe">
      <div
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${toneGradient[channel.tone]} text-white shadow-soft`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
      </div>
      <div className="flex-1">
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-mute">
          {channel.label}
        </div>
        <div className="mt-1 font-display text-xl text-ink break-all">{channel.value}</div>
      </div>
      {channel.href && (
        <ArrowUpRight
          className="h-4 w-4 text-mute transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-rose"
          aria-hidden
        />
      )}
    </div>
  );

  return (
    <Reveal delay={index * 0.06}>
      {channel.href ? (
        <a
          href={channel.href}
          target={channel.external ? "_blank" : undefined}
          rel={channel.external ? "noopener noreferrer" : undefined}
          aria-label={`${channel.label}: ${channel.value}`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-3xl"
        >
          {body}
        </a>
      ) : (
        body
      )}
    </Reveal>
  );
}
