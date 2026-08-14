# kenaut.github.io

Personal website of **kenaut** (星野砚秋), built with Vite + Vue 3.

## Features

- Minimal, clean developer-portfolio design — no emoji, no gradients
- Fixed left sidebar with personal info (avatar, nickname, birthday, MBTI, organizations)
- Terminal-inspired aesthetic: monospace accents, italic subtitles, blue accent color
- Dark mode support via `prefers-color-scheme`
- Responsive layout (sidebar stacks on top on mobile)
- Multi-page routing with vue-router:
  - `/` — Home (hero, recent activity, featured works, contact)
  - `/projects` — All projects
- Nav bar with 主页 (Home) and 项目 (Projects) links

## Tech Stack

- [Vite](https://vitejs.dev/)
- [Vue 3](https://vuejs.org/) (`<script setup>` SFC)
- [vue-router](https://router.vuejs.org/) v4

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```
src/
  data/projects.js   # shared project data
  router/index.js    # route config
  views/Home.vue     # home page
  views/Projects.vue # projects page
  App.vue            # root component (router-view)
  style.css          # global styles
```

## Docs

- [INTRO.md](INTRO.md) — personal intro page (profile, projects, contact)

## License

MIT
