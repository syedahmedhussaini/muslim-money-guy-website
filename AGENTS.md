# Vertex Marketing Site — Agent Guide

A professional marketing site for a generic SaaS product, built on TanStack
Start. **Static content only — no database, no backend services, no auth.**
Every page is server-rendered and styled with Tailwind CSS v4.

## Stack

| Concern | Choice | Where |
| --- | --- | --- |
| Framework | TanStack Start (React 19, SSR, Vite) | `src/routes/`, `vite.config.ts` |
| Routing | TanStack Router, file-based | `src/routes/` → `src/routeTree.gen.ts` (generated — never edit) |
| Styling | Tailwind CSS v4 + design tokens | `src/styles.css` (semantic vars: `--background`, `--primary`, …) |
| UI primitives | shadcn-style (Radix + Tailwind) | `src/components/ui/` |
| Icons | lucide-react | — |
| Theming | next-themes (light/dark/system) | `src/components/theme-provider.tsx`, `mode-toggle.tsx` |
| Toasts | sonner | `src/components/ui/sonner.tsx` |
| Content/data | plain TS modules | `src/lib/site.ts` |
| Lint/format | Biome | `biome.json` |

## Commands

```bash
npm install
npm run dev      # dev server on :3090
npm run build    # production build
npm run check    # Biome lint + format
```

## Pages

`/` home · `/features` · `/pricing` · `/about` · `/contact`. A 404 lives in
`src/routes/__root.tsx` (`notFoundComponent`).

## Core rules

- **Content is data.** Headlines, features, pricing tiers, FAQs, and
  testimonials all live in `src/lib/site.ts`. Edit copy there; pages map over
  it. Change the brand name/email/domain in the `site` object once.
- **Routes are files** under `src/routes/`. `pricing.tsx` → `/pricing`. The
  route tree regenerates on dev; also via `npm run generate-routes`. Never edit
  `src/routeTree.gen.ts`.
- **Navigate with `<Link to="...">`** from `@tanstack/react-router`, never
  `<a href>` for internal routes — links are type-checked.
- **Build UI from `src/components/ui/`.** Compose those primitives; don't
  hand-roll buttons/inputs/cards. Use `cn()` from `#/lib/utils` to merge
  classes, and semantic tokens (`bg-background`, `text-muted-foreground`,
  `text-primary`, …) so light/dark both work. The brand accent is `--primary`
  (indigo) plus Tailwind's `indigo-*` for gradients.
- **No backend.** There is no database or API. The contact form is
  client-only — it validates and shows a toast. If you need real submission,
  add a server route (`api.contact.ts` with `server.handlers`) — but keep the
  template's no-services default unless asked.
- Run `npm run check` before considering a change done.

## How to add a page

New file in `src/routes/` with `createFileRoute`, add the path to the `nav`
array in `src/lib/site.ts` (Header and Footer both read it), and reuse
`PageHeader` / `CTASection` from `src/components/sections/`.
