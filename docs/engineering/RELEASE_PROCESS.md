# Release Process

Status: **Tier 0 — manual process.** No CI/CD exists yet
(`docs/engineering/ci-requirements.md`); this document describes the release
process as it must be followed today, and where automation will attach once a
CI/CD Story is approved and implemented. This document does not implement CI/CD.

## Versioning

Foundry follows [Semantic Versioning](https://semver.org/) as declared in
`CHANGELOG.md`. Pre-1.0, breaking changes may occur in minor versions; this is
expected at Tier 0 and will tighten once the product has real users.

## Branching and merging

Per `CONTRIBUTING.md` and `CLAUDE.md` §19:

- `main` is protected — no direct commits, no history rewrites.
- Every change ships via a reviewed PR from a typed branch (`feature/`, `fix/`,
  `refactor/`, `security/`, `docs/`, `test/`).
- Conventional Commits are enforced by commitlint.

## Pre-release checklist (manual, until CI/CD exists)

Before merging a Story's PR to `main`:

1. The verification commands specified by the Story have been run and pass
   (typically `pnpm install`, `pnpm lint`, `pnpm typecheck`, `pnpm build`, plus
   tests where applicable) — `CLAUDE.md` §23.
2. Documentation and ADRs affected by the change are updated (`CLAUDE.md` §14).
3. `CHANGELOG.md` has an entry under `[Unreleased]`, in Keep a Changelog format.
4. The PR checklist (`.github/PULL_REQUEST_TEMPLATE.md`) is complete.
5. CTO review (`AGENTS.md` §3) and Founder approval (`CLAUDE.md` §1) are recorded
   on the PR.

## Cutting a release

Pre-1.0, releases are cut manually by the Founder:

1. Move the `[Unreleased]` entries in `CHANGELOG.md` into a new versioned section
   dated today.
2. Bump `version` in `package.json` (root and any published workspace packages) to
   match.
3. Tag the commit on `main`: `git tag vX.Y.Z` and push the tag.
4. No package registry publish occurs at Tier 0 — Foundry is self-hosted, not
   distributed (`CLAUDE.md` §7).

## Rollback

Every change must be reversible (`CLAUDE.md` §20, §22). Rolling back a release means
reverting the merge commit on `main` and, once the database exists, running the
change's documented down-migration — no migration ships without one.

## Future: CI/CD

When a CI/CD Story is approved, it must satisfy the gates already recorded in
`docs/engineering/ci-requirements.md` (Node version enforcement; install, lint,
typecheck, and build on every push and PR), and this document will be updated to
mark the pre-release checklist as automated rather than manual. Introducing CI/CD
changes how releases are gated and should be backed by an ADR (`docs/adr/`).

## Related documents

- `docs/engineering/ci-requirements.md`
- `docs/engineering/AI_DEVELOPMENT_WORKFLOW.md`
- `CONTRIBUTING.md`
- `CHANGELOG.md`
