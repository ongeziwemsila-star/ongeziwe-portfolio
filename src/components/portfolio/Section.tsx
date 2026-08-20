import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tinted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tinted?: boolean;
}) {
  return (
    <section id={id} className={tinted ? "bg-gradient-soft py-20 sm:py-24" : "py-20 sm:py-24"}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
        {intro ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground shadow-card">
      {children}
    </span>
  );
}