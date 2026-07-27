# Vibhuti Dhimar — Portfolio

Personal portfolio site for Vibhuti Dhimar, an AI Product Engineer building AI-powered products that help people make better decisions.

**Live site:** [vibhuti-ai-platform.vercel.app](https://vibhuti-ai-platform.vercel.app)

## Featured projects

- **[Potential](https://vibhuti-ai-platform.vercel.app/projects)** — An AI-assisted interviewing platform that helps interviewers collect trustworthy evidence about candidate capability through structured evidence collection, adaptive follow-up questions and explainable reflection reports, while keeping humans in control of every hiring decision.
- **PharmaChain** — An enterprise copilot for clinical supply chains, covering AI procurement, inventory intelligence, warehouse capacity planning and an executive copilot for supply chain decisions.
- **Operational AI Hub** — An AI-powered enterprise operational intelligence platform for monitoring operations, identifying risks, coordinating AI-assisted decisions and automating operational workflows.

## Tech stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (file-based routing via TanStack Router) + React 19
- **Styling:** Tailwind CSS 4
- **UI primitives:** Radix UI
- **Animation:** Framer Motion
- **Validation:** Zod
- **Icons:** Lucide
- **Build tool:** Vite
- **Language:** TypeScript

## Getting started

```bash
npm install
npm run dev
```

The dev server prints its local URL on start (Vite picks the next free port starting at `8080` if that's already in use).

### Other scripts

```bash
npm run build       # production build
npm run build:dev    # development-mode build
npm run preview      # preview a production build locally
npm run lint         # run ESLint
npm run format       # run Prettier
```

## Project structure

```
src/
  routes/       # file-based routes (TanStack Router) — one file per page
  content/      # page/section copy and data, kept UI-agnostic
  components/   # shared UI components
  hooks/        # custom React hooks
  lib/          # utilities
  services/     # external service integrations
public/
  images/       # per-project screenshots, organised by project slug
```

Route files under `src/routes/` are auto-mapped to URL paths by the TanStack Router Vite plugin, which regenerates `src/routeTree.gen.ts` — that file is generated and should not be hand-edited.

## Deployment

The site is connected to [Lovable](https://lovable.dev) and deploys to [Vercel](https://vercel.com). Pushes to `main` sync back to the Lovable editor and (if connected) trigger a Vercel redeploy.
