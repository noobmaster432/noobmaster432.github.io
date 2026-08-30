import { experience } from "@/data/resume";
import Reveal from "../Reveal";
import Section from "../Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02" title="Experience">
      <ol className="relative border-l border-border pl-8 sm:pl-10">
        {experience.map((job, index) => (
          <Reveal
            as="li"
            key={`${job.company}-${job.period}`}
            delay={index * 0.05}
            className="relative pb-12 last:pb-0"
          >
            <span
              aria-hidden="true"
              className={`absolute -left-[calc(2rem+1px)] top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full sm:-left-[calc(2.5rem+1px)] ${
                job.current ? "bg-accent" : "bg-border ring-4 ring-background"
              }`}
            />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-medium">
                {job.role}
                <span className="text-muted"> · </span>
                <span className="text-accent">{job.company}</span>
              </h3>
              <p className="font-mono text-xs text-muted">{job.period}</p>
            </div>

            {/* Capped measure: the resume bullets are long, and the full
                section width would run past a comfortable line length. */}
            <ul className="mt-4 max-w-3xl space-y-2.5">
              {job.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
