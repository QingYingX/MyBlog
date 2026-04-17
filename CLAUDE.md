# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Chinese personal blog built on Astro 6, evolved from `astro-erudite`. Static site generation with MDX content, Tailwind CSS 4, and a few React components. Deployed at https://blog.099311.xyz.

## Commands

Package manager: **npm** (lockfile is `package-lock.json`; `bun.lock` is also present but npm is canonical per README). Node 22+.

- `npm run dev` — dev server on port **39393** (configured in `astro.config.ts`, not the Astro default 4321).
- `npm run build` — runs `astro check` (type check) then `astro build`. Use this to validate types.
- `npm run preview` — preview built site.
- `npm run start` — `astro preview --host 0.0.0.0` (used by the Docker image).
- `npm run prettier` — format `.ts/.tsx/.css/.astro`.
- Docker: `docker compose up -d --build` (also port 39393).

No test suite is configured.

## Architecture

### Config split
Two config files with distinct roles — don't conflate them:
- `src/config.ts` — site-level runtime config: `SITE` (title, description, href, pagination), `NAV_LINKS`, `SOCIAL_LINKS`, `THEME_TOGGLE`, `CURSOR`, `COMMENTS` (Twikoo), `ICON_MAP`. This is the first place to look when changing site behavior/appearance.
- `src/content.config.ts` — content collection schemas only (`blog`, `authors`, `projects` via `astro:content` + Zod).
- `astro.config.ts` — integrations, markdown pipeline (Expressive Code + Shiki dual theming via `[data-theme="light|dark"]` selector, KaTeX, remark-math, remark-emoji), and the dev server port.

Path alias: `@/*` → `src/*`.

### Content model
Content lives in `src/content/{blog,authors,projects}/`. Blog posts are folders with `index.mdx` so co-located assets work.

**Subposts**: a post whose id contains `/` (e.g. `series-name/part-1`) is treated as a subpost of the folder `series-name`. `src/lib/data-utils.ts` centralizes this: `isSubpost`, `getParentId`, `getSubpostsForParent`, plus list/navigation helpers. `getAllPosts()` excludes subposts and drafts; `getAllPostsAndSubposts()` includes subposts. When adding features that enumerate posts, pick the right helper — don't call `getCollection('blog')` directly unless you also replicate the draft/subpost filtering.

### Routing
- `src/pages/blog/[...id].astro` — single post route, handles both top-level posts and subposts.
- `src/pages/blog/[...page].astro` — paginated blog index using `SITE.postsPerPage`.
- `src/pages/tags/`, `src/pages/authors/` — derived index pages.
- `rss.xml.ts`, `robots.txt.ts`, `404.astro`, `about.astro`, `photos.astro`, `index.astro`.

### Theming & UX
- Dark/light theme is driven by a `data-theme` attribute on `<html>`; Expressive Code and Shiki are both configured to key off this selector so code blocks swap themes in sync with the site (see `themeCssSelector` in `astro.config.ts`).
- View Transitions are used across navigation; global scripts (theme toggle, cursor dot, Twikoo) must survive page swaps — relevant components live in `src/components/head.astro`, `theme-toggle.astro`, `cursor.astro`, `comments.astro`.
- Cursor dot and theme-toggle animation are tunable via `CURSOR` and `THEME_TOGGLE` in `src/config.ts`.

### Comments
Twikoo integration. Styles are loaded from `COMMENTS.styleUrl` in the global `<head>` so they persist across client-side navigation. `COMMENTS.enabled` is the kill-switch; `defaultEnabled` sets the per-post default (override per-post with `comments: false` in frontmatter). The configured `serverUrl` points at a LAN Docker instance (`192.168.10.21:40063`) — expect this to be unreachable outside the author's network.
