# Discovery

## Purpose

A Discovery Report investigates an open architectural or organizational question before
any commitment is made — it explores, proposes, and stress-tests candidate answers, but
does not itself authorize a change. Discovery formalizes the "Discovery" stage of the
Story Lifecycle (`../CTO_PLAYBOOK.md` §4), which otherwise has no defined method or
artifact. Numbered `D-XXX` (with lettered follow-on passes, e.g. `D-001A`, `D-001R`, for
re-examinations of the same question).

## Governance Lifecycle

```
Discovery (D-XXX)
   ↓  proposes candidates, evaluates them, may self-falsify or re-evaluate
CTO Review
   ↓
Founder Decision (FD-XXX)
   ↓  adopts, rejects, or partially adopts what Discovery proposed
Operational Use
```

A Discovery Report may go through several passes before a decision is made — a
self-falsification pass (challenging the prior pass's own conclusions) or a re-evaluation
pass (applying a newly adopted framework to prior candidates) are both normal parts of the
same lifecycle, not separate artifact types. Discovery does not conclude with an
organizational commitment; it concludes when the CTO judges the question sufficiently
explored to bring to the Founder.

## Relationship Between Discovery Reports and Founder Decisions

Discovery Reports and Founder Decisions are deliberately different in kind:

- **Discovery Reports** hold the detailed analysis: candidate reasoning, constructed
  scenarios, counterarguments, confidence levels, and open questions. They are the
  permanent record of _how_ a conclusion was reached.
- **Founder Decisions** hold the organizational commitment: what was adopted, why it was
  sufficient to decide on, what remains uncertain, and under what conditions the decision
  should be reopened. A Founder Decision references the Discovery Reports that produced it
  rather than reproducing their reasoning (`CLAUDE.md` §14).

A Founder Decision is the only artifact in this folder that carries organizational
authority. Per `CLAUDE.md` §2, that authority comes from the Founder Decision itself, not
from this repository — the repository records the decision so it becomes the operational
reference for future work; it does not create the decision's authority.

## Knowledge states

Three states have emerged through practice. They are recorded here as a **descriptive
observation**, not a formal governance rule — the distinction may warrant its own future
Discovery and Founder Decision before being treated as binding:

| State                    | Purpose                    | Authority                | Where it lives                                 |
| ------------------------ | -------------------------- | ------------------------ | ---------------------------------------------- |
| **Binding governance**   | Organizational commitments | Highest                  | this folder (the tagged `governance-v1.0` set) |
| **Accepted discoveries** | Organizational knowledge   | Informative, non-binding | [`accepted/`](./accepted/)                     |
| **Working discussions**  | Active exploration         | Temporary                | not in the repository                          |

**Accepted ≠ binding.** An accepted discovery has completed CTO Review and Founder Review
as a Discovery Report — it is durable, citable organizational knowledge — but no Founder
Decision has adopted its conclusions, so it changes nothing and constrains nothing. It may
inform future governance; it does not create it.

## Binding baseline (governance-v1.0)

| Document                                                                                   | Type                                           | Summary                                                                          |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------- | -------------------------------------------------------------------------------- |
| [`D-000-evaluation-criteria.md`](./D-000-evaluation-criteria.md)                           | Discovery                                      | Criteria for what makes a candidate concept a first-class organizational concern |
| [`D-001-enduring-organizational-concerns.md`](./D-001-enduring-organizational-concerns.md) | Discovery                                      | Initial candidate set of enduring organizational concerns                        |
| [`D-001A-self-falsification.md`](./D-001A-self-falsification.md)                           | Discovery (self-falsification of D-001)        | Adversarial re-examination of D-001's candidates; identifies the need for D-000  |
| [`D-001R-reevaluation-under-d000.md`](./D-001R-reevaluation-under-d000.md)                 | Discovery (re-evaluation of D-001 under D-000) | Re-applies D-001's candidates to D-000's criteria; validates D-000 through use   |
| [`FD-000-integration-of-d000.md`](./FD-000-integration-of-d000.md)                         | Founder Decision                               | Operationalizes D-000 into Foundry's Discovery methodology                       |
| [`FD-001-adoption-of-concern-model.md`](./FD-001-adoption-of-concern-model.md)             | Founder Decision                               | Adopts the current working concern model produced by D-001R                      |

## Accepted discoveries (non-binding)

Completed the Discovery lifecycle (CTO Review + Founder Review) as accepted organizational
knowledge. **No Founder Decision adopts their conclusions**; they do not modify the concern
model, the relationship model, or any binding artifact.

| Document                                                                                                                         | Type                               | Summary                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`accepted/D-002-relationship-model.md`](./accepted/D-002-relationship-model.md)                                                 | Discovery                          | Reconstructs the relationship graph among the five adopted concerns from the primary sources                                                                                                           |
| [`accepted/D-003-reality-testing-value-definition.md`](./accepted/D-003-reality-testing-value-definition.md)                     | Discovery (refines D-002)          | Finds the Reality-Testing ↔ Value Definition cycle only partially supported (one direction an artifact)                                                                                                |
| [`accepted/D-004-evaluating-relationship-claims.md`](./accepted/D-004-evaluating-relationship-claims.md)                         | Discovery (methodology)            | First methodology-tier discovery: whether relationship claims need a D-000-equivalent standard                                                                                                         |
| [`accepted/D-005-conceptual-decomposition.md`](./accepted/D-005-conceptual-decomposition.md)                                     | Discovery (Phase 2)                | First product-architecture discovery: finds no enduring decomposition; best explained by a relationship structure (knowledge / transformation / leverage)                                              |
| [`accepted/D-006-knowledge-concepts.md`](./accepted/D-006-knowledge-concepts.md)                                                 | Discovery (Phase 2)                | Enduring knowledge concepts: the corpus is more consistent about what knowledge must _be_ (properties) than what it _consists of_ (forms); declines to force a taxonomy                                |
| [`accepted/D-007-knowledge-decision-execution.md`](./accepted/D-007-knowledge-decision-execution.md)                             | Discovery (Phase 2)                | Distinctions among knowledge, decision, execution: asymmetric support; semantic unity itself must be evidenced, not presumed                                                                           |
| [`accepted/D-008-admissibility-of-architectural-commitments.md`](./accepted/D-008-admissibility-of-architectural-commitments.md) | Discovery (Phase 2 · 2nd Movement) | Admissibility of architectural commitments: six recurring necessary conditions; explanatory role hybrid (general discipline + narrow architectural component); sufficient conditions not yet justified |
