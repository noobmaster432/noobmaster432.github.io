import type { CSSProperties } from "react";
import { skillGroups } from "@/data/resume";
import Reveal from "../Reveal";
import Section from "../Section";

const namespace = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, "")
    .trim()
    .replace(/\s+/g, "-");

/** Running order across every group drives the stagger. */
let order = 0;
const groups = skillGroups.map((group) => ({
  title: group.title,
  skills: group.skills.map((skill) => ({ skill, order: order++ })),
}));

const toolCount = order;

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04" title="Skills">
      <Reveal>
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-border px-5 py-3">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
              toolbelt
            </p>
            <p className="flex items-center gap-2 font-mono text-[0.7rem] text-muted">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              {toolCount} tools ready
            </p>
          </div>

          <div className="divide-y divide-border">
            {groups.map((group) => (
              <div
                key={group.title}
                className="flex flex-col gap-3 p-5 sm:flex-row sm:gap-6"
              >
                <h3 className="w-44 shrink-0 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent">
                  {namespace(group.title)}/
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map(({ skill, order: index }) => (
                    <li
                      key={skill}
                      data-tool=""
                      style={
                        {
                          "--tool-delay": `${200 + index * 55}ms`,
                        } as CSSProperties
                      }
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[0.72rem] text-muted"
                    >
                      <span
                        data-tool-dot=""
                        aria-hidden="true"
                        className="h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
