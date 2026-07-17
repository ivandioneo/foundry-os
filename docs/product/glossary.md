---
Document Type: Product Documentation Framework
Status: Approved
Owner: Founder
Contributors: CTO
Last Updated: 2026-07-17
---

# Glossary

Terms already defined and approved elsewhere in the repository, gathered here
for product design use. Each entry cites its canonical source rather than
redefining the term (`CLAUDE.md` §14 — reference, don't duplicate).

## Product & governance terms

**Founder leverage** — the measure every product decision is judged against:
_"Does this increase founder leverage?"_ The First Principle,
[`PRODUCT_PRINCIPLES.md`](./PRODUCT_PRINCIPLES.md); source:
[Our First Principle](../manifesto/MANIFESTO.md#our-first-principle), MANIFESTO-001.

**Founding Document** — a document classification for foundational,
rarely-changed artifacts requiring Founder and CTO approval to amend. First
used by `docs/manifesto/MANIFESTO.md` (MANIFESTO-001).

**Knowledge graph** — typed nodes (opportunities, evidence, assumptions,
decisions, competitors, workflows) joined by typed edges; the core product
asset. `CLAUDE.md` §4.

**Tier 0 / Tier 1 / Tier 2** — the deployment-stage rigor model. Tier 0: solo
maintainer, self-hosted, no production PII (Foundry's current stage).
`CLAUDE.md` banner and `docs/engineering/`.

## Engineering governance terms

**Founder, CTO, Senior Software Engineer** — the three defined roles and their
authority. `CLAUDE.md` §1, `AGENTS.md` §3.

**ADR (Architecture Decision Record)** — records a significant, hard-to-reverse
_engineering/technical_ decision. `docs/adr/README.md`, `CLAUDE.md` §22.

**PDR (Product Decision Record)** — the product-design counterpart to an ADR:
records a significant product-architecture decision (e.g., what a component in
[`architecture/`](./architecture/) actually is). Established by this
documentation framework (STORY-005); template at
[`pdr/PDR_TEMPLATE.md`](./pdr/PDR_TEMPLATE.md).

**Epic** — a large body of related product work, decomposed into Stories.
[`EPIC_TEMPLATE.md`](./EPIC_TEMPLATE.md).

**Story** — a scoped, approved unit of implementation work.
`docs/engineering/STORY_TEMPLATE.md`.

**Definition of Ready** — the gate a Story must pass before implementation
begins. `docs/engineering/DEFINITION_OF_READY.md`.

**Definition of Done** — the baseline completion bar for any change.
`CLAUDE.md` §20.

**Story Lifecycle** — Idea → Discovery → CTO Specification → Founder Approval →
Implementation → Completion Report → CTO Review → Founder Merge → Done.
`docs/engineering/CTO_PLAYBOOK.md` §4.

**Canonical input** — the approved specification or content implementation
must follow; nothing approved is recreated from memory or inferred.
`docs/engineering/CTO_PLAYBOOK.md` §6.

**Completion Report** — the standard structure an implementer reports against:
Summary, Files changed, Verification, Observations, Risks, Confirmation of
scope, Ready for review. `docs/engineering/CTO_PLAYBOOK.md` §9.

## Terms pending definition

The following terms are named as components of the Product Documentation
Framework's architecture (STORY-005) but have no approved definition yet. Each
has a structural placeholder document; do not treat their names alone as a
definition.

> Pending Product Decision Record (PDR)

- **Workspace** — [`architecture/WORKSPACE.md`](./architecture/WORKSPACE.md), [`pdr/PDR-001-Workspace.md`](./pdr/PDR-001-Workspace.md)
- **Business Memory** — [`architecture/BUSINESS_MEMORY.md`](./architecture/BUSINESS_MEMORY.md), [`pdr/PDR-002-Business-Memory.md`](./pdr/PDR-002-Business-Memory.md)
- **Organization** — [`architecture/ORGANIZATION.md`](./architecture/ORGANIZATION.md), [`pdr/PDR-003-Organization.md`](./pdr/PDR-003-Organization.md)
- **Blueprints / Operating Blueprints** — [`architecture/BLUEPRINTS.md`](./architecture/BLUEPRINTS.md), [`pdr/PDR-004-Operating-Blueprints.md`](./pdr/PDR-004-Operating-Blueprints.md)
- **Executive Intelligence** — [`architecture/EXECUTIVE_INTELLIGENCE.md`](./architecture/EXECUTIVE_INTELLIGENCE.md) (no PDR scoped yet)

## References

- [`README.md`](./README.md) — Product Documentation Framework index
- [`PRODUCT_PRINCIPLES.md`](./PRODUCT_PRINCIPLES.md)
- [`VISION.md`](./VISION.md)
