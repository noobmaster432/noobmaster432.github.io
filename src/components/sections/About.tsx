import Image from "next/image";
import styles from "../Float.module.css";
import { education, profile } from "@/data/resume";
import Reveal from "../Reveal";
import Section from "../Section";

export default function About() {
  return (
    <Section id="about" eyebrow="01" title="About">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
            <p className="mt-6 border-l-2 border-accent pl-4 text-base italic leading-relaxed text-muted">
              {profile.personalNote}
            </p>
          </Reveal>

          {/* Capped, so the card keeps its shape in the wider column. */}
          <Reveal delay={0.1}>
            <div className="mt-10 max-w-xl rounded-xl border border-border bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Education
              </h3>

              {/*
                Split across the card rather than stacked, so the four short
                values use the width instead of leaving half of it empty.
              */}
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <div>
                  <p className="font-medium">{education.degree}</p>
                  <p className="mt-1 text-sm text-muted">{education.institution}</p>
                </div>
                <div className="sm:text-right">
                  <p className="font-mono text-xs text-muted">{education.period}</p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {education.detail}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Decorative only. */}
        <Reveal delay={0.15} className="flex items-center justify-center">
          <Image
            src="/illustrations/astronaut.webp"
            alt=""
            aria-hidden="true"
            width={1004}
            height={918}
            sizes="(min-width: 768px) 380px, 260px"
            className={`${styles.float} w-60 max-w-full sm:w-72 md:w-full md:max-w-[380px]`}
          />
        </Reveal>
      </div>
    </Section>
  );
}
