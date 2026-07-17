# ADR-0001: Omit Turborepo (for now)

- Status: Accepted
- Date: 2026-07-15

## Context

STORY-001 permits Turborepo "only if required." The workspace currently has one
application (`apps/web`) and three small library/config packages with no cross-build
task graph and negligible build times.

## Decision

Do not add Turborepo. Use pnpm workspace features (`pnpm -r`, `--filter`, topological
ordering) to run `build`, `typecheck`, and `dev` across the workspace.

## Alternatives considered

- **Add Turborepo now** — rejected: adds a dependency and configuration surface whose
  caching/orchestration value is not yet justified (CLAUDE.md Dependency Policy, Founder
  Principles: avoid unnecessary complexity).

## Consequences

- Fewer dependencies and less config to maintain.
- Revisit when build times or the task graph grow (multiple apps, shared build steps).
  Adoption is additive and non-breaking.
