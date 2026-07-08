import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  as: Tag = "section",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  as?: "section" | "div";
}) {
  return (
    <Tag id={id} className={`relative mx-auto max-w-7xl px-6 py-24 md:py-32 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="mb-14 max-w-3xl"
        >
          {eyebrow && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-elevated/70 px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-mute backdrop-blur">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-rose to-lavender" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute md:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </Tag>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
