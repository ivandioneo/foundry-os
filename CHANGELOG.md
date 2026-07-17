# Changelog

All notable changes to this project are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/);
versioning follows [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Repository foundation: docs structure, ADR template, GitHub issue/PR templates,
  VS Code workspace config, EditorConfig, Git attributes, Node version pin,
  engine configuration, contribution/security/conduct policies.
- Engineering operating system: product roadmap, Epic and Story templates, AI
  development workflow, Definition of Ready, and release process documentation
  (STORY-002). ADR template extended with a `Related` field for Story/Epic
  traceability.
- Local development infrastructure: Docker Compose for PostgreSQL (pgvector-ready),
  MinIO, and Mailpit, with an isolated network, persistent volumes, and
  `.env.example` (STORY-003). ADR-0003 (Proposed) records the decision.
- Persistence layer foundation: Prisma schema with a `User` model, initial
  migration, and `DATABASE_URL`-driven PostgreSQL connection (STORY-004). Pinned
  to Prisma 6.19.3 (CTO decision) rather than the current 7.x major, which would
  require an additional driver-adapter package to connect at runtime.
