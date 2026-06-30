# Protomon Labs

Infrastructure for the genome. Platforms, standards, and tools for genomic discovery at scale.

A computational genomics infrastructure lab website built with **Astro**, **React**, and **Tailwind CSS**.

## Design System

### Brand Identity

Protomon Labs is a computational genomics research group. The brand is:

- **Modern & technical** — clean, precise, confident
- **Scientific yet approachable** — rigorous methods communicated with clarity
- **Bold & minimal** — big typography, generous whitespace, intentional restraint

### Logo

The logo is a **boxy tiny robot** — minimal, geometric, with right angles and clean lines.

| Asset | Path | Usage |
|---|---|---|
| SVG | `/logo.svg` | Header, footer, hero context |
| SVG favicon | `/favicon.svg` | Browser tab icon |
| ICO | `/favicon.ico` | Legacy favicon (16×16, 32×32, 48×48) |
| PNG 96×96 | `/favicon-96.png` | Large favicon |
| PNG 512×512 | `/logo-512.png` | Social cards, Open Graph |
| PNG 180×180 | `/apple-touch-icon.png` | iOS home screen |

The robot logo should always be rendered as an `<img>` tag referencing the SVG file with `filter:brightness(10)` when used on dark backgrounds.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `cobalt-700` | `#5b21b6` | Primary actions, buttons, header "Protomon", logo fill |
| `cobalt-600` | `#6d28d9` | Section labels, mid-tone accents |
| `cobalt-500` | `#8b5cf6` | Hover states, secondary accents |
| `cobalt-100` | `#ede9fe` | Icon containers, subtlest purple backgrounds |
| `cobalt-50` | `#f5f3ff` | Tag backgrounds, hover tints |
| `stone-900` | `#292524` | Primary headings |
| `stone-800` | `#292524` | Header "Labs" text |
| `stone-600` | `#57534e` | Body text, secondary text |
| `stone-400` | `#a8a29e` | Muted text (dates, metadata) |
| `stone-200` | `#e7e5e4` | Borders, dividers |
| `stone-100` | `#f5f5f4` | Section backgrounds |
| `stone-50` | `#fafaf9` | Alt section backgrounds |

### Typography

- **Headings**: `Syne` — geometric, bold, distinctive. Weights: 700, 800.
- **Body**: `IBM Plex Sans` — clean, highly readable. Weights: 300, 400, 500, 600, 700.
- **Code**: `IBM Plex Mono` — monospace for technical content. Weights: 400, 500.
- **Gradient text**: Use `.gradient-text` (cobalt-700 → cobalt-500 → cobalt-400) for emphasis on hero headings.

### Spacing & Layout

- Max content width: `max-w-6xl` (1152px)
- Hero section padding: `min-h-screen` with flex centering + 80px header spacer
- Section padding: `py-20` or `py-24` or `py-32`
- Card padding: `p-6` (via `.card` class)
- Card gaps: `gap-5`
- Responsive breakpoints: Tailwind default (sm: 640px, md: 768px, lg: 1024px)

### Component Classes

| Class | Description |
|---|---|
| `.card` | White `rounded-xl` card with `border-stone-200` + subtle shadow |
| `.card:hover` | Elevates 3px with darker purple border glow |
| `.tag` | Small rounded-full purple pill (topics, categories) |
| `.btn-p` | Dark purple filled button with glow hover |
| `.btn-s` | Outlined button with purple border hover |
| `.sl` | Uppercase section label with decorative line before text |
| `.gradient-text` | Purple gradient text (cobalt-700 → cobalt-500 → cobalt-400) |
| `.gradient-orb` | Large blurred purple circle for hero depth |
| `.gradient-orb-lg` | Extra-large blurred purple circle |
| `.reveal` | Scroll-triggered fade-up animation (via IntersectionObserver) |
| `.divider-gradient` | Horizontal gradient line section divider |
| `.animate-up` | Entry animation (fade + translate) with delay variants d1-d5 |
| `.bg-subtle-grid` | Subtle purple grid pattern background |
| `.bg-grid` | Subtle neutral grid pattern |
| `.bg-dots` | Subtle dot pattern |

### Page Structure

Every page follows the same structure:
1. **Hero header**: `bg-subtle-grid` with purple gradient (`#fafaf9 → #ede9fe`) + section label + heading
2. **Content sections**: Alternating between white `bg-white` and `bg-stone-50` backgrounds
3. **Footer**: `bg-stone-50` with purple accent hover states on links

### SVG in Astro Templates

SVG icons must be inlined as **JSX elements directly in the template**, not as string variables.

## Development

```bash
npm install
npm run dev
npm run build    # outputs to dist/
npm run preview
npm run lint
```

## Build Output

- Static site output to `dist/`
- 11 pages: Home, About, Projects, Blog (index + 2 posts), Contact, Privacy, Terms, Modern Slavery, Open Source
- Sitemap auto-generated via `@astrojs/sitemap`
- Deploy target: Cloudflare Pages (static, no Workers/adapters needed)