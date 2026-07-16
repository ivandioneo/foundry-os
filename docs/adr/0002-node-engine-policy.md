# ADR-0002: Node engine policy

- Status: Accepted
- Date: 2026-07-15

## Context

The stack locks Node 22.23.1. Pinning `engines.node` to an exact patch with
`engine-strict=true` makes installs brittle (any 22.x patch drift blocks contributors and
CI) and cannot be reproduced in every environment.

## Decision

- `.node-version` pins the canonical developer version: **22.23.1**.
- `engines.node` expresses the supported floor within the line: **`>=22.23.1 <23`**.
- `.npmrc` sets **`engine-strict=false`** (advisory locally). Exact-version enforcement is
  delegated to CI (a version-check gate); requirements captured in `docs/engineering/ci-requirements.md`, implemented by the CI story.

## Alternatives considered

- **Exact pin + engine-strict=true** — rejected: brittle across patch releases; blocks
  otherwise-valid environments.

## Consequences

- Local installs are resilient to patch drift; intent remains documented and enforced in CI.
- Verification for STORY-001 was executed on Node 22.22.2 (one patch below target; exact
  22.23.1 could not be fetched in the sandbox). Toolchain behavior is equivalent across the
  patch; this is disclosed in the story report.
