# Dhrithi MV — Portfolio

A production-ready personal portfolio for **Dhrithi MV**, built with Next.js (App Router) and Tailwind CSS.

## Project Overview

**Role classification:** AI / ML Engineer (with a strong Data Engineering / Analytics secondary track)
**Seniority:** Early-career / rising talent — third-year CS (AI & ML) undergraduate with two relevant internships (AI Engineering @ Talencia Global, Machine Learning @ CodeAlpha), production-adjacent experience (agentic workflows, vector databases, embeddings, LLM APIs), plus a parallel analytics track (SQL, ETL, Power BI, Tableau).

**Why this classification:** The most recent and highest-signal experience — the Talencia Global RADIX internship — centers on agentic retrieval workflows, vector databases, and embeddings for AI-based research and semantic intelligence, alongside OpenAI/Gemini API usage. That's core AI/ML engineering work, not pure data analysis. Her data engineering and BI skills (MySQL, ETL, Power BI, AWS Data Engineering certification) are real and prominent enough to keep as a visible secondary strength rather than hide them, so the site is positioned as *"AI/ML engineer who also builds the data infrastructure underneath the models"* — a combination that reads as more senior/complete than either track alone.

**Design direction:** Structured, GitHub/terminal-inspired dark UI (with a fully working light mode) built around one signature element — an animated data pipeline diagram (`raw data → embeddings → model.eval() → decision`) that recurs across the hero and section dividers. Monospace type is used for structural/data labels (nav, tags, metrics, timestamps) while a geometric display face carries the headlines, reinforcing an "engineering spec sheet" feel appropriate for an AI/data role. Two accent colors are used deliberately, not one: teal for "model/AI" elements, amber for "data" elements, echoing the two skill tracks throughout — never mixed decoratively.

## Sections

- **Hero** — positioning statement + animated pipeline diagram + quick-scan stats
- **About** — one-paragraph narrative + fact sheet
- **Featured Work** — 2 flagship projects (Misinfo Shield, Restaurant Operations System) with pipeline-style metrics
- **Experience** — reverse-chronological timeline (internships + leadership roles)
- **Stack** — grouped skill badges (AI/ML, Data & Analytics, Languages, Tools) + certifications
- **Contact** — direct links (email, phone, LinkedIn, GitHub)

## Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [Tailwind CSS 3](https://tailwindcss.com/) — CSS-variable-driven theme (instant, full light/dark toggle)
- TypeScript
- `next/font` for self-hosted Google Fonts (Space Grotesk, Inter, JetBrains Mono) — no external font requests at runtime
- Zero external services, zero environment variables, zero API keys required

## Local Setup

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Assembles all sections
│   └── globals.css      # Design tokens (CSS variables) + base styles
├── components/
│   ├── Nav.tsx           # Sticky nav + theme toggle + mobile menu
│   ├── Hero.tsx          # Hero + signature pipeline diagram
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── PipelineDivider.tsx
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Customizing Content

All copy lives inline in the components under `components/` as small, typed data arrays at the top of each file (`PROJECTS`, `ROLES`, `GROUPS`, `LINKS`, etc.) — update those arrays to change content without touching layout markup.

## Accessibility

- Visible, on-brand keyboard focus states (`:focus-visible`)
- `prefers-reduced-motion` respected — all animation is disabled for users who request it
- Color pairs re-tuned per theme (not just inverted) to hold contrast in both dark and light mode
