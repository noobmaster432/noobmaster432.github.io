# Gyanendra Tiwari — Portfolio

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
    globals.css      Palette tokens, base styles, scroll-reveal CSS
    layout.tsx       Root layout, metadata, pre-paint scripting flag
    page.tsx         Composes the seven page sections
  components/
    Header.tsx       Sticky nav with mobile disclosure menu
    Reveal.tsx       Scroll-triggered fade/slide wrapper
    ResumeLink.tsx   Resume link with a hover/focus preview card
    Section.tsx      Shared section heading + spacing shell
    TerminalPanel.tsx  Shell session that anchors the hero
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
`text-muted`, `bg-surface` and `border-border` resolve to the palette.

**The site is dark only.** The palette follows LeetCode's design tokens, taken
directly — `gray-10` (`#1a1a1a`) for the background, `gray-20` (`#262626`) for
surfaces, `gray-40` (`#3a3a3a`) for borders, `gray-70` (`#b7b7b7`) for muted
text, `gray-100` (`#f5f5f5`) for body text, and `brand-orange` (`#ffa116`) as
the accent.

A light theme existed and was removed: the astronaut and helmet are dark 3D
renders made to sit on a dark ground, and they read badly against a near-white
page. The accent was awkward there too — `#ffa116` manages only 1.96:1 on
near-white, far below the 4.5:1 WCAG AA needs, so light mode had to substitute
`#b45309` and never quite matched the dark palette it was paired with.

Notes for changing it:

- No `dark:` variants are used anywhere, and every colour goes through these
  variables. That is what let the second theme be deleted without touching a
  single component's classes, and it is worth preserving.
- `color-scheme: dark` on `html` renders native UI — scrollbars, the terminal's
  caret, form controls — to match. It is set in CSS rather than by script.
- To change the accent, edit `--accent` and `--accent-soft` in `:root` and keep
  at least 4.5:1 against `--background`.
- Reintroducing a light theme means restoring the `@custom-variant dark` rule, a
  second variable block, the toggle and its pre-paint script — and finding
  illustrations that work on both grounds, which is the part that killed it.

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
| `clear`      | Empty the screen                          |

Up and down arrows recall previous commands.

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
That image is `public/resume-preview.webp`, committed to the repository, so the
card costs one same-origin image with no third-party frame, script or cookie.

It used to be Google Drive's own thumbnail endpoint, fetched and cached by
Next's image optimizer. Static export removed the optimizer, and the browser
cannot pick up the slack: Chrome refuses the direct cross-origin request to
`drive.google.com/thumbnail` with `ERR_BLOCKED_BY_ORB`, so a hotlinked preview
never paints. Committing the image is what makes the card work without a server.

**`href` still points at the live Drive document, so only the preview image can
fall behind.** Regenerate it after changing the PDF:

```bash
curl -sL "https://drive.google.com/thumbnail?id=<FILE_ID>&sz=w1000" -o /tmp/r.png
magick /tmp/r.png -resize 640x -crop 640x512+0+0 +repage -strip /tmp/r-crop.png
cwebp -q 82 /tmp/r-crop.png -o public/resume-preview.webp
```

640x512 is the card's display box (320x256 CSS px) at 2x, and the crop matches
the `object-cover object-top` window, so no pixel is downloaded and then hidden.
That keeps it around 55KB, against 433KB for the full-page PNG from Drive.

Behaviour worth preserving:

- The thumbnail is only requested on first hover or focus, so the ~55KB image
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
- Text and accent colours meet WCAG AA contrast against the background.
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
idiom from the hero — a failed `cat` for the missing page — with a link back
home, so a visitor who lands there is not stranded.

## Illustrations

Two decorative 3D renders live in `public/illustrations/`, used in three places:

| Asset           | Where                                         | Displayed at |
| --------------- | --------------------------------------------- | ------------ |
| `astronaut.webp`| 404 page, and the about section's side column | 380–420px    |
| `helmet.webp`   | Footer sign-off, beside the copyright line    | 96–128px     |

They share a float animation from `src/components/Float.module.css`, which is a
module rather than three copies of the same keyframes. The float is disabled
under `prefers-reduced-motion`.

All of them are decorative, so each carries an empty `alt` and `aria-hidden`,
keeping them out of the accessibility tree. None of them convey information that
is not already in the surrounding text.

The helmet is stored at its native 365px rather than upscaled — the source is
only 365px square, so a larger file would add bytes without adding detail. It is
never displayed above 128px, which leaves enough for a 2x screen.

> **Asset provenance:** the astronaut is LaunchDarkly's `toggle-floating.webp`,
> taken from their own 404 page, and the helmet came from GitHub. Both are
> third-party brand illustrations rather than stock or openly licensed assets,
> and are used here with that understood. Replacing either is a one-file swap —
> drop a new image at the same path and adjust the `width`/`height` props at
> each usage to match its intrinsic size.

## Deployment

The site is deployed to GitHub Pages at
[noobmaster432.github.io](https://noobmaster432.github.io). Every push to `main`
runs `.github/workflows/deploy.yml`, which builds and publishes `out/`.

**One-time setup:** in the repository's Settings → Pages, set **Source** to
**GitHub Actions**. Without that the workflow builds fine and then fails at the
deploy step.

### How it is configured

`next.config.ts` sets `output: "export"`, so `npm run build` writes a
self-contained static site to `out/` instead of a server bundle. Every route
already prerendered, so nothing was lost in the move.

Two consequences are worth knowing before changing anything:

- **No image optimizer.** It is a server feature, so `images.unoptimized` is on
  and every image ships exactly as committed. Anything added to `public/` has to
  be compressed by hand — see the WebP sizes noted under Projects and
  Illustrations. This is also why the resume preview is a local file.
- **No `basePath`.** The repository is named `noobmaster432.github.io`, so Pages
  serves it from the domain root and root-relative asset paths resolve. Renaming
  the repository turns it into a project site served from `/<repo>/`, which
  needs `basePath` and `assetPrefix` set to match or every asset 404s.

`app/not-found.tsx` is exported as `out/404.html`, which Pages serves for any
unmatched path — the custom 404 works on a static host with no routing config.

`public/.nojekyll` stops Jekyll from stripping `_next/`, whose leading
underscore it would otherwise treat as private. The Actions deployment does not
run Jekyll, so it is currently redundant, but it is what keeps the site from
silently losing all CSS and JS if Pages is ever switched to serving from a
branch.

### Deploying elsewhere

The export is plain files, so any static host works. To go back to a Node host
such as Vercel and regain the image optimizer, drop `output` and `unoptimized`
from `next.config.ts`.
