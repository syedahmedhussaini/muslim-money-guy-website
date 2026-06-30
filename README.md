# Vertex — SaaS Marketing Site

A clean, professional marketing site for a generic SaaS product, built with
[TanStack Start](https://tanstack.com/start) and Tailwind CSS v4. Server-rendered,
fully responsive, light/dark mode — and no database or backend services.

## Pages

- **Home** — hero, product preview, logo cloud, features, stats, testimonials
- **Features** — grouped feature grid (Plan · Automate · Measure · Trust)
- **Pricing** — three tiers with a monthly/yearly toggle and FAQ
- **About** — mission, values, and team
- **Contact** — client-side contact form (no backend)

## Develop

```bash
npm install
npm run dev      # http://localhost:3090
```

## Build

```bash
npm run build
npm run check    # lint + format with Biome
```

## Make it yours

All copy lives in [`src/lib/site.ts`](src/lib/site.ts) — brand name, navigation,
features, pricing, FAQs, and testimonials. Edit it there and every page updates.
See [AGENTS.md](AGENTS.md) for the full structure.
