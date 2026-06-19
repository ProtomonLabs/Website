# AGENTS.md

## Project: Protomon Labs Website

Astro + React + Tailwind CSS static site for a computational genomics research lab.

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
- `npm run build` — Build for production
- `npm run preview` — Preview production build

### Design System

- **Fonts**: Syne (headings) + DM Sans (body) — loaded via Google Fonts in `global.css`
- **Colors**: cobalt (indigo), ocean (blue), ember (warm accent) — see `tailwind.config.mjs`
- **Components class system**: `.card`, `.tag`, `.btn-primary`, `.btn-secondary`, `.section-label`, `.gradient-text`, `.prose-article`
- **Backgrounds**: `.bg-grid`, `.bg-dots` utility classes for subtle texture

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

### Content

- Landing page hero: "Decoding the genome, one variant at a time"
- About: Researcher bio focused on non-coding variant interpretation
- Projects: Grid of active/completed research projects
- Blog: MDX posts (annotation pipeline tutorial, non-coding GWAS fine-mapping)
- Contact: Form + contact info
