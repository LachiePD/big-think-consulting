# Big Think Consulting

Website for Big Think Consulting — a strategy and management consulting firm. Built with Next.js 15, Tailwind CSS, and Shadcn UI. Exports as a fully static site.

## Tech Stack

- **Framework**: Next.js 15 (static export)
- **Styling**: Tailwind CSS 4.0
- **Components**: Shadcn UI
- **Dark mode**: next-themes

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building

Generate the static site into `out/`:

```bash
npm run build
```

The `out/` directory can be deployed to any static host — Vercel, Netlify, Cloudflare Pages, S3, GitHub Pages, etc.

## Project Structure

```
app/
  layout.tsx      # Root layout and SEO metadata
  page.tsx        # Home page
components/
  hero.tsx        # Hero section
  features.tsx    # Services section
  pricing.tsx     # Pricing tiers
  faq.tsx         # FAQ accordion
  testimonial.tsx # Client testimonials carousel
  footer.tsx      # Footer
  navbar/         # Navigation bar and menu
public/           # Static assets
```

## Content

All user-facing content lives directly in the component files as data arrays at the top of each file — no CMS or external data source. To update copy, edit the relevant component.
