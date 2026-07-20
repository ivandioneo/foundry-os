# Product Documentation Framework

The single source of truth for product design at Foundry (STORY-005). Everything
in this framework traces back to an already-approved canonical source — the
[Foundry Manifesto](../manifesto/MANIFESTO.md) (MANIFESTO-001) and `CLAUDE.md` —
or is explicitly marked pending a **Product Decision Record (PDR)**.

## Foundation

| Document                                           | Purpose                                                                                        |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [`PRODUCT_PRINCIPLES.md`](./PRODUCT_PRINCIPLES.md) | Approved product principles, quoted from the Manifesto                                         |
| [`VISION.md`](./VISION.md)                         | Approved mission, vision, and definition of success, quoted from the Manifesto and `CLAUDE.md` |
| [`glossary.md`](./glossary.md)                     | Approved terminology used across product and engineering docs                                  |

## Planning

| Document                                 | Purpose                                                    |
| ---------------------------------------- | ---------------------------------------------------------- |
| [`ROADMAP.md`](./ROADMAP.md)             | Current and upcoming Epics, tied to approved GitHub Issues |
| [`EPIC_TEMPLATE.md`](./EPIC_TEMPLATE.md) | Template for proposing a new Epic                          |

## Architecture (`architecture/`)

Structural documents for each named product component. Every section is either
sourced from approved content or explicitly marked
`> Pending Product Decision Record (PDR)` — this framework does not invent
product architecture.

| Document                                                                             | Paired PDR                                                                     |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| [`architecture/ARCHITECTURE_TEMPLATE.md`](./architecture/ARCHITECTURE_TEMPLATE.md)   | — (template)                                                                   |
| [`architecture/WORKSPACE.md`](./architecture/WORKSPACE.md)                           | [`pdr/PDR-005-Workspace.md`](./pdr/PDR-005-Workspace.md)                       |
| [`architecture/BUSINESS_MEMORY.md`](./architecture/BUSINESS_MEMORY.md)               | [`pdr/PDR-002-Business-Memory.md`](./pdr/PDR-002-Business-Memory.md)           |
| [`architecture/ORGANIZATION.md`](./architecture/ORGANIZATION.md)                     | [`pdr/PDR-003-Organization.md`](./pdr/PDR-003-Organization.md)                 |
| [`architecture/BLUEPRINTS.md`](./architecture/BLUEPRINTS.md)                         | [`pdr/PDR-004-Operating-Blueprints.md`](./pdr/PDR-004-Operating-Blueprints.md) |
| [`architecture/EXECUTIVE_INTELLIGENCE.md`](./architecture/EXECUTIVE_INTELLIGENCE.md) | none scoped yet                                                                |

## Product Decision Records (`pdr/`)

The product-design counterpart to an ADR (`docs/adr/`). **PDR-001 (Institutional
Memory) is Approved** — it is the constitutional root of Foundry's product
architecture. The remaining PDRs below are still **structural shells**: Status,
Decision ID, Related Product Principles, and Related Architecture Document are
populated; Context, Decision, Alternatives Considered, and Consequences are
marked "Pending Founder/CTO approval" until each decision is actually made.

| Document                                                                       | Status                       |
| ------------------------------------------------------------------------------ | ---------------------------- |
| [`pdr/PDR_TEMPLATE.md`](./pdr/PDR_TEMPLATE.md)                                 | — (template)                 |
| [`pdr/PDR-001-Institutional-Memory.md`](./pdr/PDR-001-Institutional-Memory.md) | Approved                     |
| [`pdr/PDR-002-Business-Memory.md`](./pdr/PDR-002-Business-Memory.md)           | Pending Founder/CTO Approval |
| [`pdr/PDR-003-Organization.md`](./pdr/PDR-003-Organization.md)                 | Pending Founder/CTO Approval |
| [`pdr/PDR-004-Operating-Blueprints.md`](./pdr/PDR-004-Operating-Blueprints.md) | Pending Founder/CTO Approval |
| [`pdr/PDR-005-Workspace.md`](./pdr/PDR-005-Workspace.md)                       | Pending Founder/CTO Approval |

## Governance

- This framework is documentation-only; it establishes structure, not product
  architecture (STORY-005).
- A PDR moves from "Pending Founder/CTO Approval" to a real decision the same
  way an ADR does — Context, Decision, Alternatives, and Consequences authored
  and approved, per `docs/engineering/CTO_PLAYBOOK.md` §10–§11.
- If this framework and an approved PDR or ADR disagree, the PDR/ADR wins
  (`CLAUDE.md` §2) — update this framework to match.

## Related documents

- [`docs/manifesto/MANIFESTO.md`](../manifesto/MANIFESTO.md)
- [`docs/engineering/CTO_PLAYBOOK.md`](../engineering/CTO_PLAYBOOK.md)
- [`docs/adr/README.md`](../adr/README.md)
