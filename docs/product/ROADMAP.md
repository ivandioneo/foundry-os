# Product Roadmap

Status: living document, updated as Epics are approved — not a committed schedule.

## How to read this roadmap

Foundry's roadmap is expressed as **Epics**, decomposed into **Stories**
(`docs/engineering/STORY_TEMPLATE.md`), each authorized as a GitHub Issue per
`CLAUDE.md` §2 and `AGENTS.md` §9. An item appears here only once it exists as an
approved Issue — this document records **what has been decided**, not aspiration.
See `docs/product/EPIC_TEMPLATE.md` for how a new Epic enters this roadmap.

Product direction follows the arc defined in `CLAUDE.md` §4:
**Idea → Evidence → Validation → Decision → Execution → Learning → Portfolio.**

## Current stage

Foundry is at **Tier 0** (solo maintainer, self-hosted, no production PII) per the
`CLAUDE.md` banner. Roadmap items are scoped accordingly — Tier 1/2 machinery
(multi-tenant isolation, compliance tooling, managed scaling) is intentionally
deferred until the tier changes.

## Now — EPIC-000: Sprint 0, Engineering Foundation

Status: In progress (GitHub Issue #1). No business features ship in this epic.

| Story      | Scope                                                                                                                                             | Status                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| STORY-001  | Repository foundation & bootstrap (Next.js, TypeScript, pnpm, Tailwind, shadcn/ui, lint/format tooling, docs structure)                           | Complete                                                                                                         |
| STORY-002  | Engineering operating system — roadmap, templates, AI development workflow, Definition of Ready, release process (this document and its siblings) | In progress                                                                                                      |
| _unscoped_ | Docker, PostgreSQL, Prisma, Authentication, Design System, CI/CD, Security hardening, Logging, Health checks                                      | Planned — to be broken into individual Stories as each becomes ready (`docs/engineering/DEFINITION_OF_READY.md`) |

The remaining EPIC-000 scope above is drawn directly from the Epic's own acceptance
criteria (GitHub Issue #1); it is not new scope invented here.

## Next

No Epic beyond EPIC-000 is approved yet. Per `CLAUDE.md` §2 and §22, undecided scope
is not recorded here — it is added once an Epic is opened as a GitHub Issue.

## Later

Directional, not committed: platform implementation of the knowledge graph and the
opportunity / evidence / decision workflows described in `CLAUDE.md` §3–§4, once the
engineering foundation (EPIC-000) is complete. Sequencing and scope are decided by the
Founder and CTO (`CLAUDE.md` §1), not fixed here in advance.

## Governance

- A roadmap entry requires an approved GitHub Issue (`CLAUDE.md` §2).
- Architectural commitments implied by a roadmap item are recorded as ADRs
  (`docs/adr/`), not here.
- If this roadmap and an open Issue disagree, the Issue wins (`CLAUDE.md` §2) —
  update this file to match, not the other way around.

## Related documents

- `docs/product/EPIC_TEMPLATE.md`
- `docs/engineering/STORY_TEMPLATE.md`
- `docs/engineering/DEFINITION_OF_READY.md`
- `docs/adr/README.md`
