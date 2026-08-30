import { profile, socials } from "@/data/resume";
import Reveal from "../Reveal";
import ResumeLink from "../ResumeLink";
import TerminalPanel from "../TerminalPanel";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pt-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
        <div>
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              {profile.location}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1
              id="hero-heading"
              className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl"
            >
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 font-mono text-sm text-accent sm:text-base">
              {profile.title}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {profile.positioning}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-3">
              <li>
                <ResumeLink className="inline-flex items-center rounded-full border border-accent bg-accent-soft px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background" />
              </li>
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    {...(social.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <TerminalPanel />
      </div>
    </section>
  );
}
