# Protomon Labs

Decoding the genome, one variant at a time.

A computational genomics research lab website built with **Astro**, **React**, and **Tailwind CSS**.

## Design Guidelines

### Brand Identity

Protomon Labs is a computational genomics research group. The brand is:

- **Modern & technical** — clean, precise, confident
- **Scientific yet approachable** — rigorous methods communicated with clarity
- **Bold & minimal** — big typography, generous whitespace, intentional restraint

### Logo

The logo is a **boxy tiny robot** — minimal, geometric, with right angles and clean lines.

| Asset | Path | Usage |
|---|---|---|
| SVG | `/logo.svg` | Header, Footer, hero context |
| SVG favicon | `/favicon.svg` | Browser tab icon |
| PNG 32×32 | `/favicon-32.png` | Legacy favicon |
| PNG 512×512 | `/logo-512.png` | Social cards, Open Graph |
| PNG 180×180 | `/apple-touch-icon.png` | iOS home screen |

The robot logo should always be rendered as an `<img>` tag referencing the SVG file:

```html
<img src="/logo.svg" alt="Protomon Labs" class="w-9 h-9" />
```

Do not use inline SVG strings or raw `<svg>` markup for the logo.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `cobalt-600` | `#4f46e5` | Primary actions, links, logo color |
| `cobalt-50` | `#eef2ff` | Subtle backgrounds, tag fills |
| `ocean-600` | `#0284c7` | Secondary accent |
| `ocean-900` | `#0c4a6e` | Primary text color |
| `ocean-50` | `#f0f9ff` | Hero page backgrounds |
| `ember-400` | `#fb923c` | Warm accent (gradient highlights) |
| `surface` | `#f8fafc` | Page background |
| `surface-dark` | `#f1f5f9` | Alternating section background |

### Typography

- **Headings**: `Syne` — geometric, bold, distinctive. Weights: 600, 700, 800.
- **Body**: `Inter` — clean, highly readable. Weights: 400, 500, 600.
- **Gradient text**: Use `.gradient-text` (cobalt→ocean→cobalt) or `.gradient-text-warm` (ocean→cobalt→ember) for emphasis on section headers.

### Spacing & Layout

- Max content width: `max-w-7xl` (1280px)
- Section padding: `py-28` (112px)
- Card padding: `p-7` or `p-8`
- Card gaps: `gap-5` or `gap-6`
- Responsive breakpoints: Tailwind default (sm: 640px, md: 768px, lg: 1024px)

### Components

| Class | Description |
|---|---|
| `.card` | White rounded-2xl card with border + shadow |
| `.card:hover` | Elevates with cobalt glow border |
| `.tag` | Small pill badge (used for topics, categories) |
| `.btn-primary` | Cobalt filled button with glow hover |
| `.btn-secondary` | Outlined button with border hover |
| `.section-label` | Uppercase label with line accent before text |
| `.glow-line` | Horizontal gradient line divider |
| `.bg-grid` | Subtle grid pattern background |
| `.bg-dots` | Subtle dot pattern background |

### SVG in Astro Templates

SVG icons must be inlined as **JSX elements directly in the template**, not as string variables:

```astro
<!-- CORRECT: SVG element in template -->
<div class="w-6 h-6 text-cobalt-600">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M3 3v18h18" />
    <path d="M7 16l4-8 4 4 4-6" />
  </svg>
</div>

<!-- INCORRECT: SVG as HTML string — will not render -->
<div>{iconStringVariable}</div>
```

### Header

- Fixed position with `backdrop-blur-xl`
- Logo on left, navigation on right
- Active page is visually indicated (no active state for demo)
- Contact button is a filled cobalt button (primary CTA)
- Mobile: hamburger menu with slide-down overlay

### Footer

- Dark `ocean-900` background with grid overlay
- Logo (white via `brightness-[10]` filter)
- Three columns: description, page links, social links
- Glow line divider above copyright

### Blog

- Blog posts use MDX (`.mdx`) with frontmatter: `title`, `description`, `pubDate`, `tags`
- Content is styled via `.prose-article` class in `global.css`
- Code blocks get dark `ocean-900` background
- Fine to use HTML, React components, and JSX within MDX

## Development

```bash
npm install
npm run dev
npm run build    # outputs to dist/
npm run preview
```
