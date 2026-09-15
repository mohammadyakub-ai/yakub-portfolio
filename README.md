# Mohammad Yakub — Portfolio

A personal landing page built with Vite 8, React 19, TypeScript, Tailwind CSS v4 (CSS-first config), and Motion.

## Stack
- Vite 8 + React 19 + TypeScript
- Tailwind CSS v4 (no `tailwind.config.js` — theme tokens live in `src/index.css` via `@theme`)
- `motion` (`motion/react`) for animation
- `lucide-react` for icons

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build
```

## Structure
```
src/
  data/          site + project content (edit here to update copy)
  components/    Nav, Hero, Stats, About, Projects, Research, Contact, Footer
  index.css      Tailwind v4 theme tokens (colors, fonts)
public/          profile photo + project screenshots
```

## Customizing
- Update personal info, links, and target roles in `src/data/site.ts`.
- Update or add projects in `src/data/projects.ts`. Projects without an `image`
  render as a dark metrics panel instead of a screenshot.
- Colors are defined once as CSS variables in `src/index.css` under `@theme`.
