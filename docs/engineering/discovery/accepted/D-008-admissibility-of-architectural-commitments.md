# Discovery D-008 — Admissibility of Architectural Commitments

> **Status:** Accepted Discovery — **Non-Binding.** CTO Review: Approved · Founder Review: Accepted.
>
> This report is accepted organizational knowledge — the **first discovery of the Second Movement of Phase 2**, conducted under the accepted Second Movement Transition Charter. Its authority is evidentiary only. It does **not** modify governance, create any PDR/ADR/Founder Decision, authorize construction, identify candidate concepts, or constrain future work beyond serving as evidence. See [`../README.md`](../README.md) for how accepted discoveries differ from binding governance.

## Governance Context

- Governance Version: governance-v1.0; assumes FD-000, FD-001.
- Conducted under the authority of the accepted **Second Movement Transition Charter** (posture: _constructive without presumption_; sequencing constraint: establish the admissibility of architectural commitments before attempting construction).
- Admissible evidence: binding governance baseline; accepted discoveries D-002–D-007; the approved product corpus (Manifesto, Vision, Product Principles, CLAUDE.md, Product Documentation Framework). Discovery only — no governance/product/repository change, no construction.

Throughout, **observations** (traceable to the corpus), **explanatory conclusions** (warranted readings), and **remaining uncertainties** are kept distinct.

## Question

> What makes an architectural commitment admissible within Foundry's conceptual product architecture?

An **admission** inquiry — the conditions under which a future architectural commitment may legitimately be made. Not candidate concepts, not product architecture itself, not implementation. The discovery proceeded in three disciplined phases, each answering the open question left by the prior one without broadening scope.

## What an Architectural Commitment Is (operational characterization)

Derived from evidence, not stipulated: the things the First Movement admitted or declined were **warranted assertions that some structure, property, relation, or distinction is part of Foundry's conceptual architecture** — claims future work would rely on. The lifecycle shows **two levels**: an _epistemic_ commitment (a discovery asserts, with warrant, that X holds) and a _binding_ commitment (a Founder Decision adopts X). D-008 concerns the **epistemic** level; binding adoption is a governance act and is out of scope.

---

## Phase A — The Recurring Admission Conditions

Extracting the condition that governed each real admit/decline decision across the First Movement:

| Condition                                          | Evidence                                                                                                                                           |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Corroboration** (breadth + independence)         | D-006 admitted knowledge _properties_ (many independent passages); declined the _taxonomy_ (single-sourced/illustrative)                           |
| **Best-explanation / non-contradiction**           | D-005 admitted the relationship reading (best explanation, fewest assumptions); declined _identity_ (contradicted — leverage evidenced as purpose) |
| **Earned, not inherited**                          | D-007 declined the three-layer separation and semantic unity _because_ familiar/presumed rather than evidenced                                     |
| **Mechanism, not bare assertion**                  | D-003 admitted RT→VD (stated mechanism), declined VD→RT (bare); D-004 named mechanism as required                                                  |
| **Primary-source provenance**                      | D-004's rule: primary evidence _originates_ a claim, derived work only organizes; D-005/006/007 grounded admissions in primary passages            |
| **Proportional strength; observation > inference** | D-005 admitted "best explanation, _not certainty_"; D-007 admitted observed usage firmly, held inferences provisionally                            |

**Phase A findings.**

- **Justified admission conditions exist and can be characterized** — the six above recur consistently across independent discoveries.
- **They are predominantly _necessary/rejecting_ conditions, not _sufficient/confirming_ ones** — the First Movement's admissions were mostly declines; what positively _suffices_ to admit a construction is under-evidenced. This mirrors D-000's own self-description as "filters that reject, not confirm."
- **Existing admission reasoning transfers only partially** — D-000's evaluative spirit recurs (corroboration, independence, representation-independence), augmented by conditions D-000 did not name (best-explanation-over-alternatives; earned-not-inherited; observation/inference layering). This reproduces D-004's partial-transfer finding for a new target.

---

## Phase B — The Explanatory Role of the Conditions

Evaluated against four models: **A** specifically architectural · **B** general evidentiary discipline · **C** hybrid · **D** presently indistinguishable.

**Classification by source:** corroboration, best-explanation/non-contradiction, primary-source provenance, and proportional-strength are **general evidentiary standards** (would govern any empirical inquiry). Earned-not-inherited and mechanism are general _in form_ but **architecturally heightened** (the hazard earned-not-inherited guards — importing familiar _architectural_ templates — is architecture-triggered; architectural claims are largely relational, where D-004 found mechanism load-bearing). **Representation/implementation-independence** is **architecturally derived** (a general empirical claim carries no implementation-independence requirement).

**Decisive argument (C over B):** B's strongest form recasts implementation-independence as general _invariance_ discipline. But general invariance does not, by itself, select _which_ variation must be survived. That the relevant invariant is _implementation/representation_ is selected by what Foundry's architecture is — implementation-transcendent structure ("everything else is implementation"). So the _form_ is general (invariance) while the _content_ (invariant to implementation) is architectural — exactly the interaction Hypothesis C describes.

**Phase B finding:** the conditions' explanatory role is best explained as **hybrid (C), at moderate confidence** — predominantly general evidentiary discipline, with a distinct but minority architectural component that specifies architecturally-specific _content_ within general evidentiary _forms_. A is unsupported (most conditions are general); B is close but cannot select the required invariance without conceding C; **D survives only as residual uncertainty about the _weight_ of the architectural component**, which rests on a thin base of positive admissions. Independent corroboration: the "general core + domain-specific augmentation" shape reproduces D-004 and Phase A's partial-transfer finding.

---

## Final Continuation — Conceptual Admissibility

Phase B leaned on a notion of "what an architectural commitment is." This phase tested, in two stages, whether the corpus justifies a **conceptual** characterization beyond the operational one.

**Stage 1 (evidential admissibility).** The term "architectural commitment" is the project's own; the corpus never theorizes it, and contains **no material from which to infer a deep conceptual essence** — any such essence would be invention. However, the corpus heavily and independently corroborates that _Foundry's conceptual architecture is implementation-transcendent_ (Manifesto "everything else is implementation"; D-000 representation-independence; D-005 P1). Combining that corroborated **object-level property** with the operational characterization yields, by direct inference, one **narrow, derivative** characterization — and nothing deeper.

**Stage 2 (narrowest characterization).** _An architectural commitment is a warranted assertion about **implementation-transcendent structure** of Foundry's conceptual architecture._ Used only to test Phase B: this is **exactly and only** what Phase B's decisive move required, and Phase B's actual cited warrant was already this corroborated property — not a smuggled essence. The apparent "hidden dependency" therefore **dissolves**: Phase B's hybrid conclusion rested on already-admitted evidence (operational characterization + corroborated implementation-transcendence), so it **remains warranted at unchanged moderate confidence**, with the residual weight-uncertainty unchanged.

**Restraint recorded:** the discovery does _not_ conclude "architecture is essentially implementation-transcendent" (unevidenced); only that, _within the accepted corpus_, an architectural commitment is justified _only_ as a warranted assertion about implementation-transcendent structure.

---

## Consolidated Findings (within the limits of the accepted Foundry corpus)

1. **Justified necessary conditions** governing admissibility of architectural commitments: the six recurring conditions (Phase A).
2. **Explanatory role:** predominantly general evidentiary discipline with a narrow architectural component (hybrid C), at **moderate** confidence (Phase B).
3. **Narrowest justified characterization** of an architectural commitment: a warranted assertion about implementation-transcendent structure — no deeper conceptual essence justified (Final Continuation).
4. **Present evidential boundary:** _sufficient_ (confirming) conditions for admitting architectural constructions are **not yet justified** by the current, predominantly evaluative corpus.

## Remaining Uncertainties

- The **weight** of the architectural component rests on a thin base of positive admissions; whether it grows, shrinks, or dissolves under actual constructive attempts is unknown.
- The **sufficiency gap** is the standing evidential limit — what positively suffices to admit a construction is **not presently justified by the accepted corpus.** D-008 intentionally does not prescribe how this gap must eventually be resolved.

These are recorded, not resolved. D-008 establishes what the accepted Foundry corpus _presently justifies_ about architectural admissibility — not a universal theory of it — and neither anticipates nor charters any subsequent discovery.
