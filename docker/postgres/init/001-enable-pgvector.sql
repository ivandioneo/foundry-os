-- Enables the pgvector extension so the database is pgvector-ready (CLAUDE.md §9)
-- from first boot. This is infrastructure enablement only — no tables, schema, or
-- Prisma models are created here (out of scope for STORY-003).
CREATE EXTENSION IF NOT EXISTS vector;
