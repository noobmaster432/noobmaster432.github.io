# Gyanendra Kumar Tiwari — Portfolio

A single-page, responsive personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS. Static content only: no backend, no database, no API routes.

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

## Getting started

```bash
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | What it does                                  |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start the development server                  |
| `npm run build` | Produce an optimised production build         |
| `npm start`     | Serve the production build (run `build` first) |
| `npm run lint`  | Run ESLint                                    |

## Project structure

```
src/
  app/
    globals.css      Theme tokens, base styles, scroll-reveal CSS
    layout.tsx       Root layout, metadata, pre-paint theme script
    page.tsx         Composes the seven page sections
  components/
    Header.tsx       Sticky nav with mobile disclosure menu
    Reveal.tsx       Scroll-triggered fade/slide wrapper
    ResumeLink.tsx   Resume link with a hover/focus preview card
    Section.tsx      Shared section heading + spacing shell
    TerminalPanel.tsx  Shell session that anchors the hero
    ThemeToggle.tsx  Dark/light switch
    sections/        Hero, About, Experience, Projects, Skills,
                     Achievements, Contact
  data/
    resume.ts        All site content
```

## Editing content

Every piece of copy on the site — name, summary, roles, bullet points, projects,
skills, stats, links — lives in `src/data/resume.ts`. Change it there and the
page updates; the components hold no hard-coded content.

## Theming

Tailwind v4 is configured in CSS rather than a `tailwind.config.js`. Colour
tokens are declared as CSS custom properties in `src/app/globals.css` and
exposed to Tailwind through the `@theme inline` block, so utilities like
`text-muted`, `bg-surface` and `border-border` resolve to the right value in
either theme.

The palette follows LeetCode's design tokens. Dark mode uses their values
directly — `gray-10` (`#1a1a1a`) for the background, `gray-20` (`#262626`) for
surfaces, `gray-40` (`#3a3a3a`) for borders, `gray-70` (`#b7b7b7`) for muted
text, `gray-100` (`#f5f5f5`) for body text, and `brand-orange` (`#ffa116`) as
the accent.

Light mode keeps its own neutrals and darkens the accent to `#b45309`. LeetCode's
`#ffa116` only reaches 1.96:1 against a near-white background, far below the
4.5:1 WCAG AA needs for text, so it cannot be reused as-is.

- Dark is the default. Light is opt-in via the header toggle.
- The choice persists in `localStorage` under the `theme` key.
- A small inline script in `layout.tsx` applies the stored theme before first
  paint, so reloading in light mode never flashes dark.
- To change the accent colour, edit `--accent` and `--accent-soft` in both the
  `:root` and `.dark` blocks. Keep a contrast ratio of at least 4.5:1 against
  the background.

## Animations

Sections fade and slide in as they scroll into view. This is implemented with
CSS transitions plus an `IntersectionObserver` in `Reveal.tsx`. The hidden
starting state is scoped to a `js` class that the layout script adds, which
means the page renders fully visible when JavaScript is unavailable instead of
showing blank space. `prefers-reduced-motion: reduce` disables the movement
entirely.

## The hero terminal

The hero pairs the usual heading block with a working shell
(`TerminalPanel.tsx`). Visitors can click it and type. The opening banner fades
in line by line via CSS animation, which runs without JavaScript and stops under
`prefers-reduced-motion`.

Commands live in `terminalCommands.ts` and all read from `src/data/resume.ts`,
so they stay in sync with the rest of the page:

| Command      | Result                                    |
| ------------ | ----------------------------------------- |
| `help`       | List every command                        |
| `whoami`     | Name and title                            |
| `about`      | Summary and education                     |
| `experience` | Roles with their highlights               |
| `projects`   | Projects and their stacks                 |
| `skills`     | Skills by group                           |
| `achievements` | Ratings and certification               |
| `contact`    | Email and profile links                   |
| `resume`     | Open the resume PDF in a new tab          |
| `ls`         | List the page sections                    |
| `goto <id>`  | Scroll the page to a section              |
| `theme`      | Toggle dark and light                     |
| `clear`      | Empty the screen                          |

Up and down arrows recall previous commands. `theme` drives the same `dark`
class as the header toggle, so the two stay in agreement.

Notes if you extend it:

- The prompt is hidden until the layout script adds the `js` class, so no dead
  input box appears when JavaScript is unavailable.
- Output uses `whitespace-pre-wrap`, so long lines wrap instead of overflowing.
  Column-aligned output (the `help` table) should stay under about 34
  characters to survive a 320px screen.
- The scroll area has a fixed height so running a command never resizes the
  hero and shifts the page underneath the reader.
- The output region is a `role="log"` with `aria-live="polite"`, so new results
  are announced. Focus is never stolen on load; clicking the shell focuses the
  prompt, and the whole panel shows an accent border while focused.

## Resume link and hover preview

`ResumeLink.tsx` appears twice — as the lead pill in the hero and in the footer
link row — and the terminal's `resume` command opens the same file. All three
read `resumeFile` in `src/data/resume.ts`, so swapping the PDF is a one-line
change.

Hovering or keyboard-focusing the link opens a card showing the top of page one.
The image is Google Drive's own rendered thumbnail
(`drive.google.com/thumbnail?id=…`), not an embedded `/preview` iframe, so the
card costs one image with no third-party script or cookies. `next.config.ts`
allows that host so Next's image optimizer fetches and caches it server-side
rather than having the browser hotlink Drive.

**The Drive file must stay shared as "anyone with the link".** If it is switched
back to private the thumbnail 404s and the card renders empty — the link itself
still works, but the preview silently stops.

Behaviour worth preserving:

- The thumbnail is only requested on first hover or focus, so the ~200KB image
  never lands in the initial page load.
- The card is `aria-hidden` and duplicates nothing the link text doesn't say, so
  screen readers just get a link. `Escape` dismisses it.
- Hover is ignored for non-mouse pointers, since a tap already opens the PDF.
- The card flips above the link when there isn't room below it, which is what
  keeps it on screen in the footer and in short laptop windows.
- It shows a fixed window onto the top of the page rather than the whole sheet:
  a full A4 scaled to 320px is both too tall for the viewport and too small to
  read.

## Skills toolbelt

Skills render as an agent-style toolbelt: each group is a namespace and each
skill is a chip. Chips sit dimmed until the panel scrolls into view, then light
up one after another via a staggered CSS transition (`--tool-delay` per chip,
rules in `globals.css`). It reuses the same `data-revealed` hook as the scroll
reveals, so there is no extra JavaScript, and the `.js` gate means the chips
render fully lit when scripting is unavailable.

## Contact ask panel

`AskPanel.tsx` renders preset questions whose answers stream in word by word.

**The answers are scripted, not generated.** They live in `askAnswers.ts` and
only restate what is already on the resume. The panel says so on screen, and
that label should stay if you edit it — it is the difference between a UI
flourish and implying a live model.

Details worth preserving:

- The answer area has a minimum height, so streaming never resizes the footer.
- The streamed text is `aria-hidden`; a visually hidden `aria-live` region
  publishes the finished answer once, instead of announcing every word.
- Reduced-motion preference is checked when a question is clicked, and the full
  answer appears immediately rather than streaming.

## Accessibility notes

- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`, with each
  section tied to its heading via `aria-labelledby`.
- A "Skip to content" link is the first focusable element.
- Visible focus rings on every interactive element; the mobile menu closes on
  `Escape`.
- Text and accent colours meet WCAG AA contrast in both themes.
- Decorative dots and icons are `aria-hidden`; external links announce that they
  open in a new tab.

## Projects

**Every project on the page has a real screenshot, and that is the rule for
adding one.** `Project.image` is a required field, so a project without a shot
will not type-check. This mirrors the previous portfolio, which also only
featured the three projects it had images for.

The three screenshots were recovered from the previous portfolio's
`public/assets/` and compressed into `public/projects/`:

| Project    | Source PNG | Stored WebP |
| ---------- | ---------- | ----------- |
| FilmFiesta | 2.8 MB     | 82 KB       |
| BuzzNet    | 135 KB     | 29 KB       |
| Nivaas     | 111 KB     | 24 KB       |

All three are 1280px wide. The card renders at most 360 CSS px, so a larger
source is wasted bytes. They are cropped to `aspect-16/10` with `object-top`,
which keeps each app's header and primary content in frame.

To add another project, drop a compressed screenshot in `public/projects/`, then
add an entry to `projects` in `src/data/resume.ts` with an `image: { src, alt }`
whose `alt` describes what the screenshot actually shows. `Projects.tsx` needs no
change.

Whisper and Project Pilot are deliberately absent. No screenshot of either
exists to recover — their Vercel demos return 402, the Wayback Machine holds no
snapshot, neither README embeds an image, and both need their own database and
API credentials to run locally. They can be added back once someone captures a
screenshot.

Each card links to its repository under `github.com/noobmaster432`, set as `repo`
in `src/data/resume.ts`. The anchor sits on the project title so its accessible
name is the project, and an `after:absolute after:inset-0` overlay stretches the
hit area across the whole card — that keeps one tab stop per card instead of
wrapping the stack chips inside a link.

Note that the site links `noobmaster432` (no hyphen), which is the account
holding these repos. The separate `noobmaster-432` account has no public
repositories, so linking it would send visitors to an empty profile.

**No live-demo links.** The old portfolio had demo URLs for all of these, but
every one of them now returns `402 DEPLOYMENT_DISABLED` — the Vercel account
serving them is disabled, including `noobmaster432.vercel.app`. If those come
back, add a `demo` field alongside `repo` rather than reinstating dead links.

## Icons

`src/app/icon.png` and `src/app/apple-icon.png` are built from the "G" monogram
used by the previous portfolio, composited onto the dark background colour at
512px and 180px. The original was a white glyph on transparency, which would
have been invisible against a light browser tab. Next.js picks these up from
their filenames — there is no `<link>` tag to maintain, and the default
`favicon.ico` from `create-next-app` was removed so it cannot win precedence.

## The 404 page

`src/app/not-found.tsx` renders for any unmatched route. It reuses the terminal
idiom from the hero — a failed `cat` for the missing page — alongside a floating
astronaut illustration, with a link back home and the theme toggle so a visitor
who lands there is not stranded.

The float is a CSS keyframe in `not-found.module.css` and is disabled under
`prefers-reduced-motion`. The illustration is decorative, so it carries an empty
`alt` and `aria-hidden`, which keeps it out of the accessibility tree.

> **Asset provenance:** `public/not-found/astronaut.webp` is LaunchDarkly's
> `toggle-floating.webp`, taken from their own 404 page. It is their brand
> illustration rather than a stock or openly licensed asset, and it is used here
> with that understood. Replacing it is a one-file swap — drop a new image at the
> same path and adjust the `width`/`height` props to match its intrinsic size.

## Deployment

The page is fully static and prerenders at build time, so it can be deployed to
any static or Node host. On Vercel, importing the repository requires no extra
configuration.
