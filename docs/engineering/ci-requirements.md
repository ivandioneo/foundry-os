# Engineering Note: Continuous Integration Requirements

- Status: Planned (not implemented in STORY-001)
- Related: ADR-0002 (Node engine policy)

## Purpose
Records the required CI behavior so it is captured in the repository before the CI story
implements it. CI itself is **out of scope for STORY-001** (repository foundation / structure).

## CI must
1. **Enforce the required Node version** — Node 22.23.1 (see `.node-version` / `.nvmrc`), and
   fail if the two version files disagree (single source of truth check).
2. **Run these gates on every push and pull request, failing on any error:**
   - `pnpm install --frozen-lockfile`
   - `pnpm lint`
   - `pnpm typecheck`
   - `pnpm build`

## Why this belongs to a later story, not STORY-001
- STORY-001's scope is explicitly the **engineering foundation / project structure**; it
  states "Do NOT implement CI."
- CI is **automation built on top of** the foundation and depends on a hosting/runner and
  workflow-format decision that warrant their own story and their own verification.
- Adding CI now would exceed the approved scope and mix concerns (structure vs. automation),
  against the repository's incremental-delivery principle (`CLAUDE.md` §6).

## Enforcement note
`engine-strict=false` locally (ADR-0002) means the exact Node version is **not** enforced on
developer machines; CI is the authoritative enforcement point. This note is the contract the
CI story must satisfy.
