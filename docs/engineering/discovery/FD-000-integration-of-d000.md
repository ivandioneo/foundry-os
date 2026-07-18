# FD-000 Integration Plan — Operationalizing D-000

## Integration Plan

### 1. Where candidate concepts are currently evaluated in Foundry's methodology

| Location | What gets evaluated | Current method |
|---|---|---|
| `CTO_PLAYBOOK.md` §4, "Discovery" stage | Whether an idea is worth turning into a CTO Specification | One undefined bullet — no method, no template, no artifact |
| `docs/product/README.md` "Architecture" section | Whether something becomes a named product component (Workspace, Business Memory, Organization, Blueprints, Executive Intelligence) | Implicit — no stated admission criteria |
| `docs/product/glossary.md` "Terms pending definition" | Whether a term is worth including as approved terminology | Implicit, no stated bar |
| `docs/adr/README.md` + `CLAUDE.md` §31 | Whether a *decision* needs an ADR, and which *alternative* is chosen | Explicit but different in kind — evaluates decisions/alternatives, not candidate concerns/concepts |
| The Discovery chain (D-001 → D-001A) | Whether a candidate organizational concern deserves first-class status | Ad hoc, invented fresh in D-001A, with no citation to any standing framework — the gap D-000 exists to close |

The last row is the primary integration target. The others are secondary — structurally the same kind of evaluation (admission into a canonical model) even though none of them cite each other or a shared standard.

### 2. What "integrating D-000" actually requires

D-000 originated only as conversation content. Per `CLAUDE.md` §2, chat conversations are the lowest-authority source in Foundry's governance hierarchy, and §14 states "if it is not in the repo or `docs/`, it is not decided." Operationalizing D-000 has two phases that should not be conflated:

- **Phase 0:** identify integration points, produce the plan, surface risks. No repository change.
- **Phase 1:** commit D-000 — and, to make it usable, D-001 and D-001A — as actual repository artifacts, then wire the Discovery workflow to reference them.

---

## Files Requiring Modification

**New:**
- `docs/engineering/discovery/D-000-evaluation-criteria.md` — commits D-000's content, transcribed as accepted, not redesigned.
- `docs/engineering/discovery/D-001-...md`, `docs/engineering/discovery/D-001A-...md` — commits the prior discoveries as-is.
- `docs/engineering/discovery/DISCOVERY_TEMPLATE.md` — a template modeled on the existing `STORY_TEMPLATE.md` / `PDR_TEMPLATE.md` pattern, with a mandatory section per candidate concept: pass/fail against each of D-000's four hard gates, plus notes on the two soft signals, plus an explicit admission verdict — citing D-000 by reference rather than restating its criteria.
- `docs/engineering/discovery/README.md` — index, mirrors `docs/adr/README.md`'s role for its own artifact type.

**Modified:**
- `docs/engineering/CTO_PLAYBOOK.md` §4 — the "Discovery" bullet gains one sentence: formal discovery may proceed via a numbered Discovery Report, and any candidate concept it proposes is evaluated against D-000 before being carried into a PDR/ADR/Story.
- `docs/engineering/README.md` — index table gains a row for the new `discovery/` folder.
- `docs/product/glossary.md` — new entries: "Discovery Report," "Candidate Concern," "D-000 / Evaluation Criteria" — cross-referencing the new files, not duplicating them.

**Possibly modified (contingent on a placement decision):**
- `docs/README.md` — only if `discovery/` becomes a new *top-level* `docs/` category rather than nesting under `docs/engineering/`. Nesting under `engineering/` avoids triggering `CLAUDE.md` §31's ADR requirement for repository-structure changes; a new top-level folder would trigger it.
- `CLAUDE.md` §15 or §24 — only if Discovery becomes a permanent, named documentation category at the constitutional level, which would require the full Amendment Process (§25).

---

## Proposed Methodology Updates

1. **`CTO_PLAYBOOK.md` §4 amendment (minimal):** the "Discovery" stage description gains a pointer to the new `docs/engineering/discovery/` framework and to D-000 as its required evaluation step.
2. **New Discovery Report discipline:** any future discovery that proposes candidate concepts must run each candidate through D-000's four hard gates before it can be forwarded into a PDR, ADR, or Story.
3. **Retroactive application note (not a rewrite):** D-001 and D-001A remain as-authored, with an appended note that D-000 is their evaluation framework as of this decision, and that D-001A's conclusions were reached by an ad hoc method that resembles but does not exactly match D-000.
4. **Scope boundary, stated explicitly wherever D-000 is referenced:** D-000 evaluates *candidate concepts/concerns* — it is not a general-purpose decision framework and should not be cited when choosing between technical alternatives inside an ADR.

---

## Migration Concerns

1. **D-000 has no binding authority until committed.** Per `CLAUDE.md` §2 and §14, nothing said in chat is "decided" until it's in the repository. Operationalizing D-000 fully requires the Phase 1 commit — itself a Story requiring the normal branch → PR → CTO review → Founder merge sequence.
2. **D-001A's critique predates D-000 and isn't a clean application of it.** D-001A used an 11-question, self-invented ritual; D-000 formalizes a narrower 4-gate + 2-signal test. Whether D-001's eight candidates need a formal re-run under D-000 specifically is a decision for the Founder/CTO.
3. **Numbering is out of chronological order.** D-000 was created after D-001 and D-001A but is numbered lower. Should be noted explicitly wherever the series is indexed.
4. **D-000 and the existing ADR/PDR admission tests are adjacent but not unified.** Both are, structurally, "does X deserve to be a canonical thing in our model" tests, but evaluate different kinds of X and have never been checked for consistency with each other.
5. **No documented role currently owns "Discovery."** `AGENTS.md` §3 defines exactly three roles (Founder, CTO, Senior Software Engineer). If Discovery becomes a standing practice, the mode it's conducted under should eventually be named formally rather than continuing to be redefined per-message.
