# Discovery D-004 — Evaluating Relationship Claims Between First-Class Concerns

> **Status:** Accepted Discovery — **Non-Binding.** CTO Review: Approved (Co-CTO concurrence) · Founder Review: Approved.
>
> This report is accepted organizational knowledge — the first Foundry discovery about the governance methodology itself rather than the product architecture. It does **not** modify governance, the working relationship model, D-000, or any Founder Decision, and no Founder Decision adopts its conclusions. Its recommended principles are candidate principles only, provisional pending application. See [`../README.md`](../README.md) for how accepted discoveries differ from binding governance.

## Governance Context

**Current Baseline**

- Governance Version: governance-v1.0
- Applicable Founder Decisions: FD-000, FD-001
- Admissible primary evidence: D-000, D-001, D-001A, D-001R, FD-000, FD-001
- Admissible secondary evidence: Accepted D-002, Accepted D-003 — usable **only** as evidence that a methodological observation has recurred; any proposed principle must ultimately trace to the primary governance documents, not be inferred solely from D-002/D-003.

This is the **first Foundry discovery about the governance methodology itself** rather than about the product architecture. It does not reopen or modify any prior artifact, does not touch the canonical relationship graph, and does not revisit any specific edge from D-002 or D-003. Per the charter, it does **not** assume a new framework is needed: concluding that existing governance already suffices when properly generalized is an equally valid outcome.

**Terminology.** Following the CTO's distinction: a **concern** is a model element (a node); a **relationship** is a model element connecting concerns (an edge); a **relationship claim** is an assertion that a particular relationship belongs in the model. This discovery evaluates _relationship claims_ — what standard governs their admission — not relationships in the abstract.

## Summary

The question is whether Foundry needs an explicit standard for admitting relationship claims to the canonical model, and if so what it must contain. The finding is a qualified version of the charter's second success outcome: **existing governance is insufficient as-is for evaluating relationship claims — but not because its evaluative spirit is wrong.** Most of D-000's machinery generalizes, and several of its analogs were _already applied informally_ in D-002 and D-003. The gap is narrower than "no framework exists": **evaluating a relationship claim requires three dimensions that concern-candidacy did not — directionality, mechanism, and evidentiary provenance** — and D-000, built to evaluate unary concern claims, has no machinery for any of the three. The minimal principles needed to close that gap can be articulated, and most already exist as uncodified practice. The recurrence flagged by D-002 and D-003 is therefore a genuine architectural gap, with a demonstrated cost (an artifact edge rode from D-001 through D-002 until D-003 caught it), but it is a gap of _codification and structural coverage_, not of total absence.

---

## Analysis Part 1 — Does D-000 Generalize to Relationship Claims?

Testing each of D-000's gates (in the operational form D-001R applied) against a relationship claim — a directed edge X → Y ("Y depends on X"):

| D-000 gate (concern claim)        | Transferred meaning (relationship claim)                                                                     | Verdict                                                                                                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Independent Failure Mode**      | Hold Y and all else fixed; remove/degrade X; is Y impaired?                                                  | **Transfers** — used informally in D-003 ("if Value Definition is absent, does Reality-Testing's channel still work?" → no impairment → claim unsupported).                 |
| **Representation Independence**   | Does the claim survive re-reading the documentation, independent of how D-001 phrased its dependency fields? | **Transfers, and matters _more_ for relationship claims** — D-003's central finding was precisely a claim that did _not_ survive re-examination (a documentation artifact). |
| **Non-Terminality**               | Is the relationship an ongoing condition rather than a one-time event?                                       | **Near-vacuous** — if both endpoints are already non-terminal concerns, the relationship between them inherits that. This gate does little work.                            |
| **Conceptual Independence**       | Does the claimed edge add explanatory power beyond the _other edges_ already in the graph?                   | **Transfers well** — used informally in D-003 (Candidate Explanation 4: the disputed edge added nothing beyond the existing convergence onto Judgment).                     |
| _soft:_ Minimal Instantiation     | Does the relationship hold at smallest scale?                                                                | Transfers weakly.                                                                                                                                                           |
| _soft:_ Independent Corroboration | Is the claim corroborated across multiple independent passages?                                              | **Transfers, and is central** — corroboration-across-passages was _the_ discriminator D-002/D-003 used between the strong and weak claimed cycles.                          |

**Observation.** D-000's evaluative spirit clearly generalizes: four of its six criteria have real, non-trivial analogs for relationship claims, and three of those (failure-mode, conceptual-independence, corroboration) were _already used_ — uncodified — in D-002 and D-003. A supporting data point that even D-000's own criteria shift under application: D-000's fourth hard gate was named **Non-Circular Definability**, but D-001R operationalized it as **Conceptual Independence** ("does removing this reduce explanatory capability") — closer to D-000's _Irreducibility_ (C1) than to its _Non-Circular Definability_ (C5). D-000's gates were not perfectly stable even for their intended unary use, which both supports "the spirit generalizes" and warns "the exact criteria will need re-specification, not copy-paste."

## Analysis Part 2 — What Evaluating Relationship Claims Requires That Concern Candidacy Did Not

D-000 cannot simply be reused, because a relationship claim is not a unary property tested the way concern-candidacy is. Three dimensions of evaluation have no analog in D-000:

1. **Directionality.** X → Y is a distinct claim from Y → X, and each must be evaluated separately. D-003 is the decisive evidence: for the _same pair_, one direction was supported (mechanism present, uncontradicted) and the reverse was unsupported (bare assertion, contradicted). D-000 evaluates whether _a thing_ qualifies; it has no concept of evaluating each direction of a claim separately, nor of a claim being partially true by direction.

2. **Mechanism.** The credibility of a relationship claim in D-002/D-003 turned heavily on whether an _articulated mechanism_ linked the two endpoints. D-001 D.5 supplied one ("a criterion is unfalsifiable unless checked against real outcomes") and survived; G.5 supplied none ("Judgment, Reality-Testing," bare) and did not. Concern-candidacy in D-000 has no comparable "is there a stated mechanism?" dimension — a concern claim passes gates on the concern's own properties, not on an articulated link to something else.

3. **Evidentiary provenance and tie-breaking.** Relationship claims in the primary sources arise from a specific documentary structure — D-001's paired "Depends on it" / "It depends on" fields — which D-003 showed has a _systematic_ weakness: cross-assertion without self-acknowledgment (each direction asserted in the other concept's field, neither corroborated in its own). Evaluating a relationship claim therefore requires explicit rules for _weighting one field against another and against scenario evidence_. D-003 used one implicitly ("mechanism + independent scenario evidence breaks ties"). D-000 needed no such tie-breaking machinery because unary concern claims did not present this structure.

**These three are exactly the dimensions along which D-002 struggled and D-003 succeeded.** They are the substance of the recurring observation.

## Analysis Part 3 — The Practice That Already Exists (Uncodified)

Reconstructing, from D-002 and D-003, the evaluation rules that were _actually applied_ (used here as secondary evidence of recurrence, per the charter — the rules' justification below rests on D-001/D-003 primary content, not on D-002/D-003's authority):

- **Evidence forms, ranked as used:** (a) an explicit assertion in a dependency field — weakest alone; (b) an articulated mechanism linking the endpoints; (c) corroboration across independent passages; (d) counterfactual/failure-mode scenario evidence. D-003 treated (b) and (d) as the strong forms and (a)-alone as insufficient.
- **Conflict rule as used:** a mechanism-plus-scenario beats a bare assertion; self-acknowledgment (does Y's own "it depends on" field list X?) is a relevant weight.
- **Directional rule as implied:** a claimed _cycle_ requires _both_ directions independently supported — a strictly higher bar than a single directed-edge claim (D-003 collapsed a claimed cycle to one edge on exactly this basis).
- **Provenance rule, stated in the charter and consistent with D-000's "canonical before implementation" discipline:** a relationship enters the canonical model only on **primary-source** evidence; derived discoveries may organize or interpret but may not _originate_ an edge's support.

That these rules were applied consistently, but only implicitly, is the core of the gap: the practice works, but nothing records it, so nothing guarantees it is applied at the _first_ discovery that proposes a relationship claim rather than the third that audits it.

## Candidate Approaches

**Approach A — Reuse D-000 unchanged for relationship claims.** _Strength:_ zero new machinery. _Weakness:_ fails on all three of Part 2's dimensions (no directionality, mechanism, or provenance handling) and includes a near-vacuous gate (Non-Terminality). Rejected — it would not have caught the D-003 artifact.

**Approach B — A fully independent relationship-claim framework, built from scratch.** _Strength:_ can be purpose-built for directionality/mechanism/provenance. _Weakness:_ discards the substantial, demonstrated transfer of D-000's failure-mode, conceptual-independence, and corroboration criteria; risks re-deriving what already works; heavier than the evidence warrants.

**Approach C — A distinct but D-000-descended set of _principles_ (recommended).** Inherit D-000's transferable criteria (failure-mode, representation-independence, conceptual-independence, corroboration), drop the vacuous one (non-terminality), and add the three claim-specific dimensions (evaluate each _direction_ separately; require or explicitly flag the absence of an articulated _mechanism_; apply a _provenance/tie-break_ rule). _Strength:_ closes the gap minimally, mostly by codifying practices already in use, while preserving continuity with D-000. _Weakness:_ like D-000 itself, its own limitations will only surface when applied to real relationship claims — so it must be treated as provisional, not final.

## Counterarguments (self-falsification)

- **"The practice already works without codification, so no framework is needed" (the strongest case for success-outcome 1).** _Response:_ D-002 explicitly flagged that it worked from an "unexamined evidentiary base" and could not gate-test its claims; the artifact it consequently carried as a live cycle survived until D-003. Ad-hoc evaluation _eventually_ corrected the error, but only across multiple discovery cycles. That is a concrete, primary-record cost of having no codified standard applied when a claim is first proposed. The gap is real.
- **"Minimal principles don't warrant the word 'framework.'"** _Accepted, and it shapes the recommendation._ The finding is that a small set of _principles_ — lighter than D-000, mostly codifying existing practice plus three structural additions — is what the evidence supports. Whether they are ultimately packaged as a codified framework, a checklist appended to the discovery methodology, or left as documented convention is a governance-design choice for a future Founder Decision, not something this discovery should presuppose.
- **"This just relocates D-000's own weakness."** D-000 gained four acknowledged limitations only when D-001R applied it. By strict analogy, any relationship-claim principles articulated here would reveal their limitations only under application. _Response:_ correct, and folded into the recommendation as an explicit provisional-pending-application caveat — a reason to keep the principles minimal and testable, not a reason to withhold them.

## Recommended Conclusion

**Existing governance is insufficient as-is for evaluating relationship claims, but the gap is specific and the minimal principles to close it can be articulated** — satisfying the charter's second success outcome while honestly crediting how much of the first is also true.

- D-000's evaluative spirit generalizes; four of its six criteria have real relationship-claim analogs, three of which were already applied informally in D-002/D-003.
- It is nonetheless insufficient because **evaluating relationship claims requires three dimensions D-000 cannot address**: **directionality** (each direction evaluated separately; a claimed cycle requires both directions independently supported), **mechanism** (credibility depends on an articulated link, whose absence must at least be flagged), and **provenance/tie-breaking** (primary-source evidence originates an edge; conflicts resolved by mechanism-plus-scenario over bare assertion, with self-acknowledgment weighted).
- The recommended shape is **Approach C**: a distinct, D-000-descended set of minimal principles — inheriting the transferable criteria, dropping the vacuous one, adding the three claim-specific dimensions — explicitly treated as **provisional pending application**, exactly as D-000 was before D-001R exercised it.

This discovery **articulates candidate principles; it does not adopt them, codify them, or apply them to any claim.** Whether Foundry formalizes them — and in what weight (framework vs. checklist vs. convention) — is left for a future Founder Decision.

## Remaining Uncertainties

- Whether the "a claimed cycle requires both directions independently supported" principle is correct, or too strict — some genuine relationships may be asymmetric-yet-mutual in a way this bar would wrongly reject.
- Whether "presence of an articulated mechanism" should be a hard requirement or a soft signal — D-003 treated it as near-decisive, but a real relationship might exist before anyone has articulated its mechanism (mirroring D-000's caution that a genuine concern can precede external corroboration).
- Whether these principles, once applied to the _full_ D-002 graph rather than the single D-003 pair, would surface additional dimensions not visible from one claim — the same "limitations appear only on use" pattern D-000 exhibited.
- Whether a relationship-claim standard should itself undergo a self-falsification pass (a D-001A analog) before any adoption — a meta-question noted but not resolved.
- Whether "canonical relationship model" should be formally distinguished, in governance terms, from the "working relationship model" that D-002/D-003 have been refining — no Founder Decision has yet designated any relationship model as canonical, and this distinction may matter for where such principles would attach.
