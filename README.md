# Foundry

Institutional memory for discovering, validating, building, and managing software companies.

Governance: see `CLAUDE.md` (Engineering Constitution) and `AGENTS.md` (AI collaboration).

## Requirements

- Node **22.23.1** (`.node-version`) · **pnpm** via Corepack.

## Getting started

```bash
corepack enable
pnpm install
cp .env.example .env      # first time only
docker compose up -d      # postgres, minio, mailpit — see docker/README.md
npx prisma migrate dev    # apply database migrations — first time / after schema changes
pnpm dev                  # start apps/web
```

## Workspace scripts

- `pnpm dev` — run the web app
- `pnpm build` — build all packages and the app
- `pnpm typecheck` — type-check the workspace
- `pnpm lint` — lint the workspace
- `pnpm format` / `pnpm format:check` — Prettier
- `pnpm clean` — remove build artifacts

## Database (Prisma)

Schema: `prisma/schema.prisma`. PostgreSQL connection comes from `DATABASE_URL`
(`.env`, sourced from `.env.example`) — never hardcoded. Prisma is pinned to
**6.19.3**, not the current 7.x major: Prisma 7 requires a separate
driver-adapter package (e.g. `@prisma/adapter-pg`, plus its `pg` peer
dependency) for `PrismaClient` to connect at runtime, which would exceed
STORY-004's "introduce Prisma only" constraint. 6.19.3 connects directly via
`DATABASE_URL` with zero additional packages (CTO decision, STORY-004 / Issue
#5).

```bash
npx prisma migrate dev    # create + apply a migration from schema changes
npx prisma migrate status # check whether the database is in sync
npx prisma studio         # browse data locally
```

## Structure

```
apps/web/            Next.js (App Router) application
packages/config/     shared TS + Prettier config (@foundry/config)
packages/types/      shared types (@foundry/types)
packages/ui/         shared UI utilities (@foundry/ui)
prisma/              Prisma schema & migrations (PostgreSQL)
infrastructure/      IaC / environment definitions (future stories)
docker/              local dev infra (PostgreSQL, MinIO, Mailpit)
scripts/             repo automation
docs/adr/            architecture decision records
```
