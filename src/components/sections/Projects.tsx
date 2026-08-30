import Image from "next/image";
import { projects } from "@/data/resume";
import Reveal from "../Reveal";
import Section from "../Section";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03" title="Projects">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            as="li"
            key={project.name}
            delay={index * 0.07}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition duration-200 hover:-translate-y-1 hover:border-accent focus-within:border-accent"
          >
            <div className="border-b border-border bg-accent-soft p-3">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={1280}
                height={624}
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                className="aspect-16/10 w-full rounded-lg object-cover object-top"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              {/*
                The anchor sits on the title so its accessible name is the
                project, while the `after` overlay makes the whole card
                clickable without nesting anything inside a link.
              */}
              <h3 className="text-lg font-medium">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
                >
                  {project.name}
                  <span className="sr-only">
                    {" "}
                    — view the source on GitHub (opens in a new tab)
                  </span>
                  <span
                    aria-hidden="true"
                    className="ml-1.5 inline-block text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </a>
              </h3>
              <p className="mt-1 font-mono text-xs text-accent">{project.tagline}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul
                aria-label={`${project.name} tech stack`}
                className="mt-6 flex flex-wrap gap-2"
              >
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border px-2 py-1 font-mono text-[0.7rem] text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
