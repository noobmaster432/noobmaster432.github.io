import { education, profile } from "@/data/resume";
import Reveal from "../Reveal";
import Section from "../Section";

export default function About() {
  return (
    <Section id="about" eyebrow="01" title="About">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
          <p className="mt-6 border-l-2 border-accent pl-4 text-base italic leading-relaxed text-muted">
            {profile.personalNote}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Education
            </h3>
            <p className="mt-4 font-medium">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">{education.institution}</p>
            <p className="mt-3 font-mono text-xs text-muted">
              {education.period} · {education.detail}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
