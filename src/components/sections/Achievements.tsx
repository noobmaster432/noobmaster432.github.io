import { achievements, certification } from "@/data/resume";
import CountUp from "../CountUp";
import Reveal from "../Reveal";
import Section from "../Section";

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="05" title="Achievements">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
        {achievements.map((achievement, index) => (
          <Reveal
            key={achievement.label}
            delay={index * 0.05}
            className="flex flex-col-reverse bg-surface p-6"
          >
            {/* Reversed so the value reads first visually while the markup keeps dt before dd. */}
            <dt className="mt-2 text-xs text-muted">{achievement.label}</dt>
            <dd>
              <CountUp
                value={achievement.value}
                className="block text-2xl font-semibold tracking-tight text-accent tabular-nums sm:text-3xl"
              />
            </dd>
          </Reveal>
        ))}
      </dl>

      <Reveal delay={0.2}>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {certification}
        </p>
      </Reveal>
    </Section>
  );
}
