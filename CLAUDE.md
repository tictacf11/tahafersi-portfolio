# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Taha Fersi's personal portfolio: a static Vue 2 + TypeScript SPA (Vue CLI 4.5 / webpack 4, Less), deployed to GitHub Pages at `https://tictacf11.github.io/tahafersi-portfolio`. It started as a copy of the open-source `schouffy/gamedev-portfolio` template (README.md, `Footer.vue:4` credit); the first 7 commits in history are the upstream author's, the site's own history starts 2023-12-11. README.md's "How to use" section still describes the template and is accurate for the content/style workflow.

## Commands

```
npm install        # node_modules is not present in a fresh checkout
npm run serve      # dev server, publicPath "/"
npm run build      # -> dist/, publicPath "/tahafersi-portfolio/" (vue.config.js:2-4)
npm run lint       # vue-cli-service lint
```

- `npm run lint` **rewrites files in place** (vue-cli's lint auto-fixes by default); use `npx vue-cli-service lint --no-fix` to only report.
- There is no test suite: no test script or test deps in `package.json`, and the `tests/**` glob in `tsconfig.json` matches nothing.
- Untested on this machine: Node here is v22 and webpack 4 usually needs `NODE_OPTIONS=--openssl-legacy-provider` on Node ≥ 17. I have not run a build; treat that as a hypothesis if the build dies with `ERR_OSSL_EVP_UNSUPPORTED`.
- `.env` is tracked and holds site metadata only. The sole readers are `public/index.html:12-17` (`VUE_APP_TITLE`, `VUE_APP_DESCRIPTION`, `VUE_APP_OGDESCRIPTION`, `VUE_APP_PRODUCTION_URL`). Restart `serve` after editing it (README.md:24).

## Branches: read before committing or deploying

| branch | what it is |
|---|---|
| `dev` | **The working branch** (tip `c7b6db5`, 2024-08-15). Strictly ahead of `main` by 7 commits. Only `dev` has `vue.config.js` (the production `publicPath`), `deploy.sh`, `.gitattributes`, the PNG→WebP conversion, `iconTempUrl` placeholders and image preloading. |
| `main` | **Stale** (`547e0b7`, 2024-02-22), yet it is `origin/HEAD`, i.e. GitHub's default branch. A build from `main` has no production `publicPath` override and the old `ProjectData` constructor. Do not build or branch from it. |
| `gh-pages` | **Build output only**, unrelated history (no merge-base with `main`/`dev`): `index.html`, `js/`, `css/`, plus a copy of `public/` (`d/`, `img/`, `favicon.ico`). 13 commits, each a new hashed build. Never edit by hand, never merge. |

`deploy.sh` builds, runs `git init` inside `dist/`, and **force-pushes** to `gh-pages` over SSH (`deploy.sh:6-23`). As written that collapses the branch to one commit, yet `gh-pages` has 13, so recent deploys were evidently not done with it as written. Confirm the real procedure with the user before deploying; a deploy replaces the live site.

## Architecture

**Shell and routing.** `main.ts` mounts `App.vue` (`Header`, a fading `<router-view>`, `Footer`). `router/index.ts` uses vue-router's default **hash mode** (no `mode` set, lines 44-46), so URLs are `/#/resume` and GitHub Pages needs no SPA fallback. Every route is lazy-loaded under the same `webpackChunkName: "about"`, so they land in one chunk. Unknown paths redirect to `/404`.

**Two kinds of content.**
- *Static copy lives in the view templates*: `About.vue`, `Resume.vue`, `Contact.vue`, the nav in `Header.vue`. Editing site text means editing these directly.
- *Project pages are data-driven*: `src/data/GameProjectsData.ts` (`/game-projects`) and `OtherProjectsData.ts` (`/other-projects`) each default-export an array of `new ProjectData(...)`. `ProjectsList.vue` renders the grid; clicking a tile opens `ProjectDetailsOverlay.vue`, which injects `htmlDescription` with `v-html` (line 10).

**`ProjectData` constructor is positional** (`ProjectData.ts:11`): `(id, name, iconUrl, html, accentColor = "#000000", iconTempUrl = "", isHigh = false, isWide = false)`. The booleans come last, so setting `isWide` means passing `""` and `false` first (see `OtherProjectsData.ts:27`). `isHigh`/`isWide` make a tile span 2 rows/columns in the 3-column grid (≥ 620px, `ProjectsList.vue:109-129`). Array order is display order. `id` is used as `:key` and DOM id (`ProjectsList.vue:5`), so keep it unique; existing ids are not sequential (`project-12` precedes `project-11`; `project-10` is commented out).

**Assets bypass webpack.** Everything is under `public/` and referenced as plain relative strings (`img/projects/<slug>/...`) in templates and inside the HTML strings of the data files. Nothing checks them at build time, so a wrong path is a runtime 404. They resolve against the page base, which is why the hash-mode router and relative paths go together.

**Heavy-thumbnail loading has two parts that must be kept in step:**
1. Animated thumbnails (`iconUrl`) are heavy WebPs (up to ≈ 5.4 MB, e.g. `space/SpaceWar-thumb.webp`); a tiny static `*-first_frame.webp` is passed as `iconTempUrl` and painted behind it while it loads (`ProjectsList.vue:7-11`). `ka/ka-thumb.webp` (0.4 MB) was made from a GIF with Pillow in a venv (animated WebP, quality 70, `method=6`; first frame quality 60). This machine has no ffmpeg, cwebp or ImageMagick, and the `convert` on PATH is Windows' disk converter, not ImageMagick.
2. `App.vue:38-74` (`preloadImagesBasedOnRoute`) hard-codes, per route, which images to preload. A new project's thumbnail should be added to the matching list (README.md:32).

**Project-description CSS is global on purpose.** Classes used inside description HTML (`.paragraph`, `.center`, `iframe.youtube`, `.phone-screenshot`, `.pc-screenshot`, `.notice`) are defined in `src/css/projects.less`, nested under `.dialog-content` and imported unscoped by `App.vue:87`. `v-html` content is not reached by `<style scoped>`, so a new class used in a description must be added there (README.md:29). Theme colours are the four variables in `src/css/variables.less`.

**The CV exists in several independent copies.** `Resume.vue` renders it as HTML, and links two standalone PDFs by exact filename (`Resume.vue:15-16`): `public/d/Taha Fersi ENG.pdf` and `public/d/Taha Fersi FR.pdf`. Replacing a PDF means keeping that filename or editing the links. "Years of experience" and the current role are also hard-coded separately in `About.vue:7,14` and `Resume.vue:7,12,29-47`; keep them in step.

## Leftovers from the template (verified in source, harmless, don't "fix" in passing)

- `ProjectsList.vue:7` tests `project.staticImageUrl`, a field `ProjectData` does not have (its only occurrence in either branch's source). The `v-if` is therefore always true and the `v-else` at line 12 is dead; the working placeholder logic is `iconTempUrl`.
- `router/index.ts:3` imports `../views/Home.vue`, a file that has never existed on any branch; the import is unused.
- `App.vue:4` links `@/assets/projects/projects.css`, but `src/assets/` has never existed. The real stylesheet is `css/projects.less`.
- `App.vue:40,72` leave `console.log` debug output in.
- `public/d/some-file.pdf` is an unreferenced empty file.
- `.gitignore` excludes `SpaceWar.gif` / `bs.gif` and `.gitattributes` has an LFS rule for `SpaceWar.gif`, but no `.gif` is tracked on any branch; thumbnails are WebP now.
- `Footer.vue:4` credits the upstream template; README.md:45 asks to keep that link.
- Font Awesome 4.7 and the Karla font come from CDN `<link>`s in `public/index.html:9-10`, not npm; the `fa fa-*` icons in `Resume.vue`, `Contact.vue` and the overlay close button depend on them.
