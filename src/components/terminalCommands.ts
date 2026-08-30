import {
  achievements,
  certification,
  education,
  experience,
  navLinks,
  profile,
  projects,
  resumeFile,
  skillGroups,
  socials,
} from "@/data/resume";

export type Tone = "command" | "output" | "accent" | "error" | "blank";

export type Line = {
  tone: Tone;
  text?: string;
};

export type CommandResult = {
  lines: Line[];
  /** Wipe the scrollback instead of appending. */
  clear?: boolean;
  /** Id of a section to scroll into view. */
  scrollTo?: string;
  toggleTheme?: boolean;
  /** Url to open in a new tab. */
  openUrl?: string;
};

const out = (text: string): Line => ({ tone: "output", text });
const accent = (text: string): Line => ({ tone: "accent", text });
const blank = (): Line => ({ tone: "blank" });

const sectionIds = ["about", "experience", "projects", "skills", "achievements", "contact"];

const helpRows: [string, string][] = [
  ["about", "summary"],
  ["experience", "roles"],
  ["projects", "builds"],
  ["skills", "stack"],
  ["achievements", "ratings"],
  ["resume", "open the pdf"],
  ["contact", "email + links"],
  ["goto <id>", "jump to section"],
  ["theme", "dark / light"],
  ["clear", "reset screen"],
  ["help", "this list"],
];

function helpLines(): Line[] {
  const width = Math.max(...helpRows.map(([name]) => name.length)) + 2;
  return [
    accent("Available commands"),
    ...helpRows.map(([name, description]) =>
      out(`  ${name.padEnd(width)}${description}`),
    ),
  ];
}

function aboutLines(): Line[] {
  return [
    accent(`${profile.name} — ${profile.title}`),
    out(profile.location),
    blank(),
    out(profile.summary),
    blank(),
    out(profile.personalNote),
    blank(),
    out(`${education.degree}, ${education.institution}`),
    out(`${education.period} · ${education.detail}`),
  ];
}

function experienceLines(): Line[] {
  return experience.flatMap((job, index) => [
    ...(index > 0 ? [blank()] : []),
    accent(`${job.role} · ${job.company}`),
    out(job.period),
    ...job.highlights.map((highlight) => out(`  · ${highlight}`)),
  ]);
}

function projectLines(): Line[] {
  return projects.flatMap((project, index) => [
    ...(index > 0 ? [blank()] : []),
    accent(`${project.name} — ${project.tagline}`),
    out(`  ${project.description}`),
    out(`  ${project.stack.join(" · ")}`),
  ]);
}

function skillLines(): Line[] {
  return skillGroups.flatMap((group, index) => [
    ...(index > 0 ? [blank()] : []),
    accent(group.title),
    out(`  ${group.skills.join(" · ")}`),
  ]);
}

function achievementLines(): Line[] {
  return [
    ...achievements.map((item) => out(`  ${item.value.padEnd(8)}${item.label}`)),
    blank(),
    accent(certification),
  ];
}

function contactLines(): Line[] {
  return [
    accent(profile.email),
    blank(),
    ...socials
      .filter((social) => social.label !== "Email")
      .map((social) => out(`  ${social.label.padEnd(10)}${social.href}`)),
  ];
}

function gotoCommand(target?: string): CommandResult {
  if (!target) {
    return {
      lines: [
        { tone: "error", text: "goto: needs a section" },
        out(`available: ${sectionIds.join(", ")}`),
      ],
    };
  }

  const match = sectionIds.find((id) => id === target.toLowerCase());
  if (!match) {
    return {
      lines: [
        { tone: "error", text: `goto: no section named "${target}"` },
        out(`available: ${sectionIds.join(", ")}`),
      ],
    };
  }

  return { lines: [out(`scrolling to ${match}…`)], scrollTo: match };
}

export function runCommand(raw: string): CommandResult {
  const [name, ...args] = raw.trim().split(/\s+/);
  const command = name.toLowerCase();

  switch (command) {
    case "help":
      return { lines: helpLines() };
    case "whoami":
      return {
        lines: [accent(profile.name), out(profile.title)],
      };
    case "about":
      return { lines: aboutLines() };
    case "experience":
      return { lines: experienceLines() };
    case "projects":
      return { lines: projectLines() };
    case "skills":
      return { lines: skillLines() };
    case "achievements":
      return { lines: achievementLines() };
    case "resume":
      // The url is printed too, in case the new tab gets blocked.
      return {
        lines: [out("opening resume.pdf…"), out(resumeFile.href)],
        openUrl: resumeFile.href,
      };
    case "contact":
      return { lines: contactLines() };
    case "ls":
      return { lines: [out(navLinks.map((link) => link.label.toLowerCase()).join("  "))] };
    case "goto":
      return gotoCommand(args[0]);
    case "theme":
      return { lines: [out("switching theme…")], toggleTheme: true };
    case "clear":
      return { lines: [], clear: true };
    default:
      return {
        lines: [
          {
            tone: "error",
            text: `command not found: ${command}`,
          },
          out("type `help` for the list"),
        ],
      };
  }
}

export const banner: Line[] = [
  { tone: "command", text: "whoami" },
  accent(profile.name),
  out(profile.title),
  blank(),
  { tone: "command", text: "cat stack.txt" },
  out("Python · TypeScript · FastAPI"),
  out("React · Next.js · RAG · LangGraph"),
  out("Kubernetes · Docker · AWS"),
  blank(),
  out("Type `help` to explore, or just start typing."),
];
