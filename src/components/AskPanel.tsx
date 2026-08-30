"use client";

import { useEffect, useState } from "react";
import { asks } from "./askAnswers";

const WORD_MS = 26;

export default function AskPanel() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [run, setRun] = useState(0);
  const [shown, setShown] = useState(0);

  const active = asks.find((ask) => ask.id === activeId) ?? null;
  const words = active ? active.answer.split(" ") : [];
  const streaming = Boolean(active) && shown < words.length;

  useEffect(() => {
    if (!activeId) return;
    const target = asks.find((ask) => ask.id === activeId);
    if (!target) return;

    const total = target.answer.split(" ").length;
    const timer = window.setInterval(() => {
      setShown((count) => {
        if (count >= total) {
          window.clearInterval(timer);
          return count;
        }
        return count + 1;
      });
    }, WORD_MS);

    return () => window.clearInterval(timer);
  }, [activeId, run]);

  function ask(id: string) {
    const target = asks.find((item) => item.id === id);
    if (!target) return;

    // Deciding here rather than in the effect keeps the reveal instant for
    // anyone who has asked for reduced motion.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setActiveId(id);
    setShown(reduce ? target.answer.split(" ").length : 0);
    setRun((value) => value + 1);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-border px-5 py-3">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
          ask
        </p>
        <p className="flex items-center gap-2 font-mono text-[0.7rem] text-muted">
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${
              streaming ? "animate-pulse bg-accent" : "bg-border"
            }`}
          />
          {streaming ? "responding" : "idle"}
        </p>
      </div>

      <div className="p-5">
        <ul className="flex flex-wrap gap-2">
          {asks.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => ask(item.id)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-3 py-1.5 text-left text-xs transition-colors ${
                    isActive
                      ? "border-accent text-accent"
                      : "border-border text-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {item.question}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-5 min-h-32 border-t border-border pt-5 sm:min-h-36">
          {active ? (
            <>
              <p
                aria-hidden="true"
                className="text-sm leading-relaxed text-muted"
              >
                {words.slice(0, shown).join(" ")}
                {streaming ? (
                  <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-accent" />
                ) : null}
              </p>
              {/* Announced once, when the answer is complete. */}
              <p className="sr-only" aria-live="polite">
                {streaming ? "" : active.answer}
              </p>
            </>
          ) : (
            <p className="text-sm leading-relaxed text-muted">
              Pick a question and I&rsquo;ll answer it here.
            </p>
          )}
        </div>

        <p className="mt-5 font-mono text-[0.7rem] leading-relaxed text-muted">
          Scripted answers written from my resume — not a live model.
        </p>
      </div>
    </div>
  );
}
