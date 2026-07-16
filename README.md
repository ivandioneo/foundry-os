# Foundry

Institutional memory for discovering, validating, building, and managing software companies.

Governance: see `CLAUDE.md` (Engineering Constitution) and `AGENTS.md` (AI collaboration).

## Requirements

- Node **22.23.1** (`.node-version`) · **pnpm** via Corepack.

## Getting started

```bash
corepack enable
pnpm install
pnpm dev        # start apps/web
```

## Workspace scripts

- `pnpm dev` — run the web app
- `pnpm build` — build all packages and the app
- `pnpm typecheck` — type-check the workspace
- `pnpm lint` — lint the workspace
- `pnpm format` / `pnpm format:check` — Prettier
- `pnpm clean` — remove build artifacts

## Structure

```
apps/web/            Next.js (App Router) application
packages/config/     shared TS + Prettier config (@foundry/config)
packages/types/      shared types (@foundry/types)
packages/ui/         shared UI utilities (@foundry/ui)
infrastructure/      IaC / environment definitions (future stories)
docker/              local dev infra (future stories)
scripts/             repo automation
docs/adr/            architecture decision records
```
