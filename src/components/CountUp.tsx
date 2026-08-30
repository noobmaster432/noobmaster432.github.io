"use client";

import { useEffect, useRef } from "react";

const DURATION = 900;

/**
 * Counts up to the value when it scrolls into view.
 *
 * The final value is what renders on the server, and the animation only ever
 * rewrites the text node afterwards, so the correct number is on screen even if
 * scripting never runs.
 */
export default function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return;

    const target = Number(match[1]);
    const suffix = match[2];

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.disconnect();

          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / DURATION, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            if (progress < 1) {
              node.textContent = `${Math.round(target * eased)}${suffix}`;
              requestAnimationFrame(step);
            } else {
              node.textContent = value;
            }
          };

          node.textContent = `0${suffix}`;
          requestAnimationFrame(step);
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
