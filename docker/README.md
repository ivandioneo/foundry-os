# docker/

Local development infrastructure (PostgreSQL, MinIO, Mailpit) via Docker Compose
(STORY-003). The compose file itself lives at the repository root
(`../docker-compose.yml`, the default location `docker compose` expects); this
directory holds supporting configuration.

Architecture and rationale: `docs/adr/0003-development-platform-architecture.md`.

## Contents

- `postgres/init/` — SQL run once, on first container start, via Postgres's
  `docker-entrypoint-initdb.d` mechanism. Currently enables the `pgvector`
  extension so the database is pgvector-ready (`CLAUDE.md` §9) from boot. No
  tables, schema, or Prisma models are defined here — that is a later story's
  scope.

## Usage

```bash
cp .env.example .env      # first time only
docker compose config     # validate the compose file
docker compose up -d      # start postgres, minio, mailpit
docker compose ps         # check status
docker compose down       # stop (add -v to also delete volumes/data)
```

## Services

| Service | Purpose | Default host port(s) |
|---|---|---|
| `postgres` | Primary database, pgvector-ready | `5432` |
| `minio` | S3-compatible object storage | `9000` (API), `9001` (console) |
| `mailpit` | Local SMTP + web UI for email testing | `1025` (SMTP), `8025` (UI) |

All services run on an isolated Docker network (`foundry`) and persist data in
named volumes (`postgres_data`, `minio_data`) so state survives `docker compose
down` (without `-v`) and container restarts.

Connection variables are documented in `../.env.example`. This is local
development infrastructure only — not a production deployment
(`infrastructure/README.md` covers that, separately, when it is scoped).
