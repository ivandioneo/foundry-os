# ADR-0003: Development Platform Architecture

- Status: Proposed
- Date: 2026-07-17
- Deciders: CTO (pending review) — drafted by Claude Code per STORY-003
- Related: STORY-003 (#4)

## Context

`CLAUDE.md` §9 already pins the dev-infra stack: "Docker Compose (Postgres, MinIO,
Mailpit). Self-hosted first." STORY-001 deliberately deferred creating the compose
file itself ("no compose file is created in STORY-001 ... it is added when the
database/storage/mail stories require it"). STORY-003 is that story: every
contributor and every AI agent needs the same reproducible local infrastructure —
Postgres for data, MinIO for S3-compatible object storage, Mailpit for local email
testing — without installing or configuring these services by hand, and without
depending on any hosted/managed equivalent (`CLAUDE.md` §7, self-hosting
philosophy).

This ADR covers **infrastructure only**. It does not decide a database schema, an
ORM configuration, an auth strategy, or an API surface — those remain out of scope
per the Story and are deferred to the stories that own them.

## Decision

1. **Docker Compose, at the repository root** (`docker-compose.yml`), the default
   location the `docker compose` CLI expects — no `-f` flag required. Supporting
   configuration (init scripts) lives under `docker/` (`docker/README.md`).
2. **Three services**, matching the pinned stack exactly, nothing more:
   - `postgres` — image `pgvector/pgvector:pg16`. This is plain PostgreSQL 16 with
     the `pgvector` extension binaries pre-installed, fulfilling "PostgreSQL
     (pgvector-ready)" (`CLAUDE.md` §9) without a separate extension-install step.
     A first-boot init script (`docker/postgres/init/001-enable-pgvector.sql`) runs
     `CREATE EXTENSION IF NOT EXISTS vector;` so the extension is active by default.
     This is infrastructure enablement, not a schema — it creates no tables.
   - `minio` — image `minio/minio:...` (pinned release tag), S3-compatible object
     storage, matching `CLAUDE.md` §7's "S3-compatible storage" self-hosting
     principle.
   - `mailpit` — image `axllent/mailpit:...` (pinned release tag), a local SMTP
     server with a web UI, so outbound email can be developed and inspected
     without a real mail provider.
3. **Pinned image tags**, not `:latest`, for reproducible environments across
   contributors and AI agents (`CLAUDE.md` §10, §13 — dependency and reproducibility
   discipline extends to infrastructure images, not just npm packages). Each tag
   was pulled and verified to exist before being committed to the compose file.
4. **One custom bridge network** (`foundry`) so the three services can address each
   other by service name, isolated from the Docker default bridge and from other
   projects' containers on the same host.
5. **Named, persistent volumes** (`postgres_data`, `minio_data`) so `docker compose
   down` (without `-v`) and container restarts do not lose local data. `docker
   compose down -v` remains the explicit, opt-in way to reset state.
6. **All configuration is environment-variable-driven** with sensible local-only
   defaults (`${VAR:-default}` syntax), documented in `.env.example`
   (`CLAUDE.md` §17 — no secrets in the repository; `.env` itself stays gitignored).
   These variables configure the *infrastructure* only; they are deliberately not
   yet consumed by any application code, since no Zod-validated application env
   schema exists until the stories that need these services (Prisma, storage
   client, mail client) are implemented.
7. **Healthchecks** on `postgres` and `minio` so `docker compose ps` and dependent
   tooling can detect readiness rather than assuming a fixed startup delay.

## Alternatives considered

- **Native local installs of Postgres/MinIO/Mailpit** — rejected: reintroduces the
  exact environment drift this story exists to eliminate; every contributor and
  every AI agent would need host-specific setup instructions instead of one
  command.
- **Managed/hosted dev database and storage (e.g., a cloud Postgres or S3 bucket
  for local development)** — rejected: violates self-hosting and vendor-
  independence principles (`CLAUDE.md` §6, §7) for infrastructure that has no need
  to leave the developer's machine.
- **`:latest` image tags** — rejected: non-reproducible; a `latest` pull today can
  silently differ from one next month, undermining "every contributor works
  against the same infrastructure" (this Story's stated business value).
- **Testcontainers or an ORM-managed ephemeral database** — rejected for now: adds
  a dependency and abstraction layer with no current justification at Tier 0
  (`CLAUDE.md` §10, §13 — avoid unnecessary complexity, mirrors the reasoning in
  ADR-0001). Revisit if/when automated integration tests need ephemeral,
  test-scoped infrastructure.
- **Kubernetes or another orchestrator for local dev** — rejected: explicitly out
  of scope for STORY-003 and disproportionate for a Tier 0, single-host,
  solo-maintainer setup (`CLAUDE.md` banner, §6).

## Consequences

- Any contributor or AI agent can bring up the full local infrastructure with
  `docker compose up -d` after copying `.env.example` to `.env` — no manual service
  installation.
- The compose stack has no consumer yet: no Prisma schema, no storage client, no
  mail client. It exists so those later stories have something to build against
  immediately, per incremental delivery (`CLAUDE.md` §6).
- `pgvector` is enabled at the database level from first boot, so a future
  vector-search story does not need to reintroduce extension provisioning.
- Pinned image tags require a deliberate, reviewed bump (not automatic) when a new
  Postgres/MinIO/Mailpit release is wanted — a small maintenance cost traded for
  reproducibility.
- This ADR does not authorize any application code, authentication, API route, or
  Prisma schema; those require their own Stories and, if they introduce new
  architecture, their own ADRs.
