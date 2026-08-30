"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { resumeFile } from "@/data/resume";

type Side = "bottom" | "top";

type Props = {
  /** Classes for the anchor, so it can match whichever section it sits in. */
  className?: string;
  /** Preferred side for the card; it flips if that side would run off-screen. */
  placement?: Side;
};

const OPEN_DELAY = 120;
const CLOSE_DELAY = 80;
/** Matches the `mt-3` / `mb-3` gap between the link and the card. */
const GAP = 12;

/**
 * Keep the card on the preferred side unless it would spill out of the
 * viewport there and the opposite side has room.
 */
function resolveSide(
  preferred: Side,
  link: HTMLAnchorElement | null,
  card: HTMLSpanElement | null,
): Side {
  if (!link || !card) return preferred;

  const rect = link.getBoundingClientRect();
  const height = card.offsetHeight + GAP;
  const fitsBelow = rect.bottom + height <= window.innerHeight;
  const fitsAbove = rect.top - height >= 0;

  if (preferred === "bottom" && !fitsBelow && fitsAbove) return "top";
  if (preferred === "top" && !fitsAbove && fitsBelow) return "bottom";
  return preferred;
}

/**
 * Link to the resume PDF with a hover/focus preview of its first page.
 *
 * The preview is decorative: it is `aria-hidden` and duplicates nothing the
 * link text doesn't already say, so screen reader and touch users simply get
 * a normal link.
 */
export default function ResumeLink({
  className = "",
  placement = "bottom",
}: Props) {
  const [open, setOpen] = useState(false);
  /** The thumbnail is ~200KB, so it is only fetched once someone reaches for it. */
  const [requested, setRequested] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [side, setSide] = useState<Side>(placement);
  const timer = useRef<number | undefined>(undefined);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const cardRef = useRef<HTMLSpanElement>(null);

  const schedule = useCallback(
    (next: boolean, delay: number) => {
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        if (next) {
          setRequested(true);
          setSide(resolveSide(placement, linkRef.current, cardRef.current));
        }
        setOpen(next);
      }, delay);
    },
    [placement],
  );

  useEffect(() => () => window.clearTimeout(timer.current), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") schedule(false, 0);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, schedule]);

  // On touch a tap opens the PDF outright, so there is nothing to preview.
  const handlePointerEnter = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== "mouse") return;
    schedule(true, OPEN_DELAY);
  };

  return (
    <span className="relative inline-block">
      <a
        ref={linkRef}
        href={resumeFile.href}
        target="_blank"
        rel="noopener noreferrer"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={() => schedule(false, CLOSE_DELAY)}
        onFocus={() => schedule(true, 0)}
        onBlur={() => schedule(false, 0)}
        className={className}
      >
        {resumeFile.label}
        <span className="sr-only"> (PDF, opens in a new tab)</span>
      </a>

      <span
        ref={cardRef}
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 z-40 w-64 overflow-hidden rounded-xl border border-border bg-surface shadow-2xl transition duration-150 sm:w-80 ${
          side === "top" ? "bottom-full mb-3" : "top-full mt-3"
        } ${
          open
            ? "visible translate-y-0 opacity-100"
            : `invisible opacity-0 ${
                side === "top" ? "translate-y-1" : "-translate-y-1"
              }`
        }`}
      >
        {/* A window onto the top of page one — the full page would be too tall
            to sit inside the viewport, and too small to read at this width. */}
        <span className="relative block h-52 w-full overflow-hidden bg-background sm:h-64">
          {requested ? (
            <Image
              src={resumeFile.previewSrc}
              alt=""
              fill
              sizes="(min-width: 640px) 320px, 256px"
              className={`object-cover object-top transition-opacity duration-200 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setLoaded(true)}
            />
          ) : null}
          <span className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-surface to-transparent" />
        </span>

        <span className="block border-t border-border px-3 py-2 font-mono text-[0.7rem] text-muted">
          {loaded ? "Click to open the full PDF" : "Loading preview…"}
        </span>
      </span>
    </span>
  );
}
