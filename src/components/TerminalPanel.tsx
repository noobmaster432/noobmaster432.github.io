"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";
import styles from "./Terminal.module.css";
import { banner, runCommand, type Line } from "./terminalCommands";

const START_DELAY = 0.35;
const STEP = 0.09;

const toneClass: Record<Line["tone"], string> = {
  command: "text-foreground",
  accent: "text-accent",
  output: "text-muted",
  error: "text-foreground",
  blank: "",
};

function applyTheme() {
  const root = document.documentElement;
  const next = root.classList.contains("dark") ? "light" : "dark";
  root.classList.toggle("dark", next === "dark");
  root.style.colorScheme = next;
  try {
    window.localStorage.setItem("theme", next);
  } catch {
    // Storage can be blocked; the switch still applies for this visit.
  }
}

export default function TerminalPanel() {
  const [history, setHistory] = useState<Line[]>([]);
  const [showBanner, setShowBanner] = useState(true);
  const [value, setValue] = useState("");
  const [recall, setRecall] = useState<string[]>([]);
  const [recallIndex, setRecallIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = scrollRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [history]);

  function submit(event: FormEvent) {
    event.preventDefault();
    const entered = value.trim();
    setValue("");
    setRecallIndex(-1);

    if (!entered) {
      setHistory((prev) => [...prev, { tone: "command", text: "" }]);
      return;
    }

    setRecall((prev) => [entered, ...prev].slice(0, 30));
    const result = runCommand(entered);

    if (result.clear) {
      setHistory([]);
      setShowBanner(false);
    } else {
      setHistory((prev) => [
        ...prev,
        { tone: "command", text: entered },
        ...result.lines,
        { tone: "blank" },
      ]);
    }

    if (result.toggleTheme) applyTheme();
    if (result.openUrl) {
      window.open(result.openUrl, "_blank", "noopener,noreferrer");
    }
    if (result.scrollTo) {
      document.getElementById(result.scrollTo)?.scrollIntoView();
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!recall.length) return;
      const next = Math.min(recallIndex + 1, recall.length - 1);
      setRecallIndex(next);
      setValue(recall[next]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = recallIndex - 1;
      if (next < 0) {
        setRecallIndex(-1);
        setValue("");
        return;
      }
      setRecallIndex(next);
      setValue(recall[next]);
    }
  }

  /** Clicking dead space in the shell should land the caret in the prompt. */
  function focusPrompt() {
    if (window.getSelection()?.toString()) return;
    inputRef.current?.focus();
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface transition-colors focus-within:border-accent">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </span>
        <p className="ml-2 truncate font-mono text-[0.7rem] text-muted">
          gyanendra@portfolio — zsh
        </p>
      </div>

      <div
        ref={scrollRef}
        onClick={focusPrompt}
        className="h-[330px] overflow-y-auto p-4 font-mono text-[0.72rem] leading-6 sm:h-[370px] sm:p-5 sm:text-[0.78rem] sm:leading-7"
      >
        {showBanner ? (
          <div>
            {banner.map((line, index) => (
              <TerminalLine
                key={`banner-${index}`}
                line={line}
                className={styles.line}
                style={{ animationDelay: `${START_DELAY + index * STEP}s` }}
              />
            ))}
          </div>
        ) : null}

        <div role="log" aria-live="polite" aria-label="Terminal output">
          {history.map((line, index) => (
            <TerminalLine key={`history-${index}`} line={line} />
          ))}
        </div>

        <form onSubmit={submit} className={`${styles.inputRow} items-baseline`}>
          <label htmlFor="terminal-input" className="sr-only">
            Terminal command
          </label>
          <span aria-hidden="true" className="shrink-0 text-accent">
            $&nbsp;
          </span>
          <input
            id="terminal-input"
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            aria-describedby="terminal-hint"
            className="w-full min-w-0 bg-transparent text-foreground caret-accent outline-none"
          />
        </form>

        <p id="terminal-hint" className="sr-only">
          Type help and press Enter to list the available commands. Use the up
          and down arrow keys to recall previous commands.
        </p>
      </div>
    </div>
  );
}

function TerminalLine({
  line,
  className,
  style,
}: {
  line: Line;
  className?: string;
  style?: React.CSSProperties;
}) {
  if (line.tone === "blank") {
    return (
      <div className={className} style={style}>
        &nbsp;
      </div>
    );
  }

  return (
    <div
      className={`${className ?? ""} whitespace-pre-wrap break-words`}
      style={style}
    >
      {line.tone === "command" ? (
        <span aria-hidden="true" className="text-accent">
          ${" "}
        </span>
      ) : null}
      {line.tone === "error" ? (
        <span className="text-accent">! </span>
      ) : null}
      <span className={toneClass[line.tone]}>{line.text}</span>
    </div>
  );
}
