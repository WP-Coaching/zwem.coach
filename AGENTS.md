# AGENTS.md

## Project Overview

**Zwem Coach Website** is a modern Next.js application built for swimming coaching services. It uses React 19, Next.js 15 (App Router), and Tailwind CSS for styling. The project features a responsive design with interactive elements powered by Framer Motion.

### Key Technologies
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS, Framer Motion
- **Language:** TypeScript
- **Testing:** Playwright (E2E)
- **Performance:** Vercel Analytics & Speed Insights

## Setup Commands

- **Install dependencies:** `npm install`
- **Install Playwright browsers:** `npx playwright install --with-deps`
- **Start development server:** `npm run dev` (uses Turbopack)
- **Build for production:** `npm run build`
- **Run production server:** `npm run start`

## Development Workflow

- **Dev Server:** Use `npm run dev` to start the development server with hot-reloading.
- **Environment Variables:** Check `.env.example` for required environment variables.
- **Component Architecture:**
  - UI components are located in `src/components/`.
  - Static/Config data is in `src/lib/site-config.ts`.
  - Legal content is in `src/lib/legal-content.ts`.
- **Pages:**
  - Homepage: `src/app/page.tsx`
  - Legal: `src/app/algemene-voorwaarden/page.tsx` and `src/app/privacybeleid/page.tsx`.

## Testing Instructions

- **Run all E2E tests:** `npm run test:e2e`
- **Run tests in headed mode:** `npm run test:e2e:headed`
- **Open Playwright UI:** `npm run test:e2e:ui`
- **CI Configuration:** Tests are automatically run on push/PR to `main` via GitHub Actions (`.github/workflows/test.yml`).

## Code Style

- **Linting:** `npm run lint` (ESLint)
- **Formatting:** `npm run format` (Prettier)
- **Tailwind CSS:** Follow semantic token patterns if established in `tailwind.config.js`. Use utility classes directly in components.
- **Types:** Ensure all new components and functions are properly typed with TypeScript.

## Build and Deployment

- **Output:** The build process generates a `.next` folder.
- **Deployment:** Optimized for Vercel. Ensure `npm run build` passes before deployment.
- **CI/CD:** GitHub Actions handles test validation.

## Additional Notes

- **Language:** The primary content of the website is in Dutch.
- **Icons:** Typically handled via React components or standard icon libraries (check `src/components` for specific patterns).
- **Images:** Public assets are in `public/`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
