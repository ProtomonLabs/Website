# AGENTS.md

## Project: Protomon Labs Website

Astro + React + Tailwind CSS static site for a computational genomics research lab.

Repository-specific guidance for AI coding agents.

---

## Core Behavior

- **Think before coding**: State assumptions explicitly. If ambiguous, ask.
- **Prefer simplest change**: Minimum code needed. No speculative abstractions.
- **Make surgical edits**: Touch only relevant files. Match existing style.
- **Work goal-first**: For non-trivial tasks, define a verify-oriented plan.

---

## Autonomy Boundaries

### Safe to do without asking

- Read files and inspect codebase
- Run lint, tests, builds
- Edit code directly related to the request
- Update docs required by code change

### Ask before doing

- Editing CI workflows
- Creating barrel exports

### Never do

- Modify lockfiles by hand

---

## Protected Files

- `package-lock.json` — only via tooling

---

## Commit Checklist

Before commit, verify:

- [ ] `npm run build` passes

---
### Content

- Landing page hero: "Infrastructure for the genome"
- About: Lab bio focused on building genomic infrastructure
- Projects: Grid of active/completed infrastructure projects
- Blog: MDX posts (annotation infrastructure, non-coding GWAS infrastructure)
- Contact: Form + contact info


### Tech Stack

- **Framework**: Astro 5 (static site generation)
- **UI**: React 19 (interactive components: contact form)
- **Styling**: Tailwind CSS 3 + custom CSS components
- **Content**: MDX blog posts via Astro Content Collections
- **Build**: `npm run build` → outputs to `dist/`

### Directory Structure

```
src/
  components/       — Header, Footer, ResearchFocus, ProjectCard, BlogCard, ContactForm
  layouts/          — BaseLayout.astro (shared head/fonts/meta)
  pages/            — index, about, projects, blog/, contact
  content/blog/     — MDX blog posts
  styles/           — global.css (Tailwind + custom component classes)
public/             — Static assets (logo, favicon, PNGs)
```

### Key Commands

- `npm run dev` — Start dev server
- `npm run build` — Build for production (11 pages, ~1.4s, outputs to `dist/`)
- `npm run preview` — Preview production build
- `npm run lint` — ESLint

### Cloudflare Workers (Builds) Deployment

The project is deployed via **Cloudflare Workers Builds** (not Pages). In **Workers & Pages** → project → **Settings** → **Build**:

- **Build command**: `npm run build`
- **Deploy command**: `npm run deploy` (runs `astro build && wrangler deploy`)
- **Root directory**: *(leave blank)*

Per Cloudflare docs: https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/

`wrangler.jsonc` configures static assets deployment from `./dist` with no Worker code (no `_worker.js` generated since no Cloudflare adapter is used):

```json
{
  "name": "protomon-website",
  "compatibility_date": "2026-06-30",
  "assets": { "directory": "./dist" }
}
```

`wrangler` is a devDependency — `npx wrangler deploy` uses the version pinned in `package.json`.

### Design System

- **Fonts**: Syne (headings) + IBM Plex Sans (body) + IBM Plex Mono (code) — loaded via Google Fonts in `global.css` and `<link>` preconnects in `BaseLayout.astro`
- **Colors**: cobalt palette mapped to purple/violet values (cobalt-600: #6d28d9, cobalt-700: #5b21b6 primary) — see `tailwind.config.mjs`
- **Components class system**: `.card`, `.tag`, `.btn-p`, `.btn-s`, `.sl` (section label), `.gradient-text`, `.gradient-orb`, `.reveal`, `.divider-gradient`, `.animate-up`, `.prose`
- **Backgrounds**: `.bg-subtle-grid`, `.bg-grid`, `.bg-dots` utility classes for subtle texture

### SVG Issue Fix

When rendering SVG strings as HTML in Astro templates, always use inline SVG elements directly in the template rather than string interpolation. String interpolation with `{variable}` renders as HTML-escaped text, not actual SVG elements. Example fix:

```astro
<!-- BAD — renders as escaped text -->
<div>{svgString}</div>

<!-- GOOD — inline SVG elements in template -->
<svg class="w-6 h-6" viewBox="0 0 24 24">...</svg>
```

### Logo

The boxy robot logo (`public/logo.svg`) is a minimal geometric SVG of a tiny robot with:
- Antenna (line + circle)
- Square head with rounded corners
- Two pixel eyes
- Mouth slit
- Rectangular body
- Stubby arms
- Two tiny legs


