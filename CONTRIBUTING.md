# Contributing to Foundry

Thanks for contributing. This repository optimizes for **ten-year maintainability**,
not short-term speed.

## Prerequisites

- Node **22.23.1** (see `.node-version`; use `fnm`/`nvm`).
- pnpm ≥ 9 (via Corepack).

## Branching

Branch from `main` using a typed prefix:
`feature/…`, `fix/…`, `refactor/…`, `security/…`, `docs/…`, `test/…`.

`main` is protected — no direct commits.

## Commits

Follow **Conventional Commits**: `feat:`, `fix:`, `docs:`, `refactor:`,
`security:`, `test:`, `build:`, `ci:`. Explain **why**, not only what.

## Pull requests

- Every PR requires review and passing checks.
- Use the PR template checklist.
- Record significant decisions as an ADR (`docs/adr/`).

## Working on a Story

New work starts as a Story (`docs/engineering/STORY_TEMPLATE.md`) that satisfies
`docs/engineering/DEFINITION_OF_READY.md` before implementation begins. Implementation
follows `docs/engineering/AI_DEVELOPMENT_WORKFLOW.md`. Releases follow
`docs/engineering/RELEASE_PROCESS.md`.

## Definition of Done (Tier 0)

Code complete · typed · lints/format pass · reversible · self-reviewed · docs/ADR updated where relevant.
