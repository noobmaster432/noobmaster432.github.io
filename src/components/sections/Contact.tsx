import Image from "next/image";
import styles from "../Float.module.css";
import { profile, socials } from "@/data/resume";
import AskPanel from "../AskPanel";
import Reveal from "../Reveal";
import ResumeLink from "../ResumeLink";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          <div>
            <Reveal>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                06
              </p>
              <h2
                id="contact-heading"
                className="text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                Get in touch
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                Open to conversations about engineering roles, interesting
                systems, or anything in between.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <a
                href={`mailto:${profile.email}`}
                className="mt-8 inline-block break-all text-xl font-medium tracking-tight text-accent underline decoration-border underline-offset-8 transition-colors hover:decoration-accent sm:text-2xl"
              >
                {profile.email}
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <nav aria-label="Resume and social links" className="mt-10">
                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                  <li>
                    <ResumeLink
                      placement="top"
                      className="text-sm text-accent transition-colors hover:text-foreground"
                    />
                  </li>
                  {socials
                    .filter((social) => social.label !== "Email")
                    .map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted transition-colors hover:text-accent"
                        >
                          {social.label}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </li>
                    ))}
                </ul>
              </nav>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <AskPanel />
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 flex items-center justify-between gap-6 border-t border-border pt-8">
            <p className="font-mono text-xs text-muted">
              © {year} {profile.name} · {profile.location}
            </p>

            {/* Decorative only — signs the page off against the about astronaut. */}
            <Image
              src="/illustrations/helmet.webp"
              alt=""
              aria-hidden="true"
              width={365}
              height={365}
              sizes="(min-width: 640px) 128px, 96px"
              className={`${styles.float} w-24 shrink-0 sm:w-32`}
            />
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
