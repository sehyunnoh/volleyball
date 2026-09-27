# Volleyball Handbook

A mobile-first, installable (PWA) reference of volleyball skills, organized by
category and difficulty level. Each skill has a short explanation, key points,
and one hand-picked YouTube video.

Built for a dad who never learned volleyball, and his two kids — the sibling
project to [Hoops Handbook](https://sehyunnoh.github.io/basketball/).

**Live site:** https://sehyunnoh.github.io/volleyball/ _(deploys from `main`)_

## Status

Shipped. All three phases complete: **81 skills** across all nine categories,
each with levels 1-3 filled in. Every video was verified to exist and embed
via the YouTube oEmbed endpoint before being committed. Deployed to GitHub
Pages, verified in Google Search Console with a sitemap submitted, and
checked on a real phone: mobile layout, PWA install, offline reading, and
dark mode all confirmed working.

See [intent.md](./intent.md) for goals, scope, and content structure, and
[plan.md](./plan.md) for how this was ported from the basketball project.

## Stack

Vite + React + TypeScript + Tailwind CSS, deployed to GitHub Pages by Actions.
No backend and no accounts — static content only. The one external call is
[GoatCounter](https://www.goatcounter.com), a cookie-less page counter that
stores no personal data; `src/lib/analytics.ts` counts each hash route itself,
because GoatCounter's own script only fires once per page load. Site code:
[volleyball.goatcounter.com](https://volleyball.goatcounter.com/).

## Design

Same reference-book look as basketball — Zilla Slab for names, IBM Plex Sans
for everything else, ruled entries instead of cards — but with **Court Blue**
(`#1e5aa8` light / `#5b9bf5` dark) as the one point colour instead of
basketball's burnt orange, so the two sites read as siblings, not clones. Both
fonts are self-hosted under `public/fonts/` so the shell still reads offline.

Every colour comes from a semantic token in `src/index.css`
(`--c-ink`, `--c-rule`, `--c-accent`, …). Dark mode redefines those values in
one media query — there is no `dark:` variant anywhere in the components.
Level is shown as a three-segment meter rather than a colour.

The PWA/app icons (`public/icons/`, `public/apple-touch-icon.png`,
`public/favicon.svg`) follow the same construction as basketball's — a dark
ink background, a gradient sphere, and simple seam lines — just in Court Blue
with a volleyball's curved-panel seams instead of a basketball's meridians.

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
npm run lint
```

## Adding a skill

Everything lives in `src/data/` — no screen needs to change.

1. Open the category file, e.g. `src/data/skills/serving.ts`.
2. Append a `Skill` object. TypeScript enforces the required fields; in dev the
   console warns about broken cross-links, over-long summaries, and key point
   counts outside 3–5.
3. Pick the video by hand. The rules are in intent.md §5.5: it must *explain*
   the skill, be child-appropriate, and credit the channel. Verify the id loads
   and is embeddable before committing it.

## Adding a category

1. The nine categories are already declared in `src/data/categories.ts`.
2. Create `src/data/skills/<category>.ts` and add it to the `SKILLS` array in
   `src/data/index.ts`.

That is the whole change — a category with no skills never appears on a screen,
and one with skills appears everywhere automatically.

## Notes on the deployment

GitHub Pages serves this from the `/volleyball/` sub-path, so the Vite `base`,
the manifest `start_url`/`scope`, and the service worker scope all agree on it
(`vite.config.ts`). Routing uses a hash router so deep links and refreshes work
without a server-side rewrite.

The service worker uses `registerType: 'autoUpdate'`, so a new deploy replaces
the cached app shell on the next visit. If you are testing locally and see a
stale build, unregister the worker in DevTools → Application.
