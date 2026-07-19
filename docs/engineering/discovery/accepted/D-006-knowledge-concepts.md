# Discovery D-006 — Enduring Conceptual Elements of Foundry Knowledge

> **Status:** Accepted Discovery — **Non-Binding.** CTO Review: Approved with editorial refinement (Co-CTO concurrence) · Founder Review: Accepted.
>
> This report is accepted organizational knowledge — a Phase 2 product-architecture discovery. It does **not** modify governance, create any PDR/ADR/Founder Decision, define canonical knowledge types, prescribe a knowledge model, or constrain future work beyond serving as evidence. See [`../README.md`](../README.md) for how accepted discoveries differ from binding governance.

## Governance Context

**Current Baseline**

- Governance Version: governance-v1.0
- Applicable Founder Decisions: FD-000, FD-001
- Admissible evidence: Vision, Manifesto, Product Principles, CLAUDE.md, accepted discoveries D-000–D-005, approved governance and product documentation. No external ontology, knowledge-management, graph, semantic-web, DDD, or database literature.

Phase 2, product-architecture program. Discovery only — no governance, product decision, implementation, or repository change. D-005 is the reason D-006 exists but is not carried as a premise.

## Discovery Question

> What enduring conceptual elements of knowledge are consistently evidenced across the approved Foundry corpus?

A question about the **concepts** of knowledge — not a graph, schema, node taxonomy, ontology, or entity model.

## Central Architectural Finding

> **The approved corpus is substantially more consistent about what knowledge must _be_ than about what knowledge _consists of_.**

This is the organizing observation of D-006, and the remainder of the report supports it. The corpus speaks with strong, repeated, independent agreement about the **conditions every knowledge item must satisfy** (attribution, integrity, durability, compounding, interlinking). It speaks far less consistently — and with far more single-sourced, illustrative, or ambiguous language — about the **kinds of knowledge that may exist**. The distinction between those two classes of concern is therefore the report's spine.

## Evidence Examined

| Source                             | Status                      | Relevance                                                                                                     |
| ---------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------- |
| CLAUDE.md §3–§5, §11, §16–§17, §21 | Operating constitution      | Mission (institutional memory); §4 pipeline + named node kinds + "typed edges"; provenance/integrity mandates |
| Manifesto (MANIFESTO-001)          | Approved, Founding Document | "Every Output Is an Asset" chain; "Build Once. Reuse Forever."; decisions as output                           |
| Vision.md                          | Approved                    | "generates better decisions"; validation; definition of success                                               |
| Product glossary                   | Approved                    | Repeats §4's knowledge-graph description, **citing §4** (not an independent source)                           |
| Accepted D-001 (concern model)     | Accepted, non-binding       | "Distinction" enumerates knowledge-kind distinctions — used with a category boundary                          |
| Component docs / PDRs              | Placeholder / Pending       | No approved knowledge content                                                                                 |

**Category boundary preserved (from D-004/D-005):** the organizational concern model (Memory, Distinction, Judgment, Reality-Testing, Value Definition) describes how the _organization reasons_, not the _product's knowledge substance_. Where D-001's "Distinction" enumerates knowledge kinds, it is cited as _corroborating_ evidence only, not treated as identical to a product knowledge model.

## The Central Distinction: Knowledge Forms vs Knowledge Properties

These are **different classes of architectural concern** and must not be conflated. They are independent dimensions: future product architecture may evolve one without altering the other.

### Knowledge Forms — _what kinds of knowledge may exist?_

| Form                                                                        | Where evidenced                                                                                                                          | Strength                                                                 |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Decision**                                                                | §4 pipeline "Decision"; §4 node "decisions"; §4 "generates better decisions"; §3 "decision quality compounds"; Vision "better decisions" | Strong (the most-corroborated single form)                               |
| **Evidence**                                                                | §4 pipeline "Evidence"; §4 node "evidence"; §3 "customer interview / research cycle" (as source)                                         | Moderate                                                                 |
| **Idea / Opportunity**                                                      | §4 pipeline "Idea"; §4 node "opportunities"; §3 "rejected idea"; Manifesto "Ideas become…"                                               | Moderate (and "idea" vs "opportunity" possibly distinct — see Ambiguity) |
| **Validation**                                                              | §4 pipeline "Validation"; §3 "validating"                                                                                                | Weak-moderate                                                            |
| **Learning**                                                                | §4 pipeline "Learning"; Manifesto "every lesson should become part of the platform"                                                      | Weak-moderate                                                            |
| **Workflow / process**                                                      | §4 node "workflows"; Manifesto "Systems Outperform Heroics… become a process"                                                            | Weak-moderate                                                            |
| **Assumption**                                                              | §4 node "assumptions"                                                                                                                    | Single appearance                                                        |
| **Competitor**                                                              | §4 node "competitors"                                                                                                                    | Single appearance                                                        |
| Outputs (specification, architecture, software, business, portfolio, asset) | Manifesto asset chain; §4 "Portfolio"                                                                                                    | Ambiguous status — knowledge vs product-of-knowledge (see Ambiguity)     |

**On the §4 enumeration:** the corpus provides **one illustrative enumeration** of knowledge forms (§4's "typed nodes — opportunities, evidence, assumptions, decisions, competitors, workflows"), quoted once more in the glossary citing §4 — **but no evidence that the enumeration is exhaustive or normative.** D-006 therefore does not treat it as a canonical taxonomy, and reports the forms only as terms the corpus names, at varying corroboration.

### Knowledge Properties — _what conditions must every knowledge item satisfy?_

| Property                            | Where evidenced                                                                                   | Strength      |
| ----------------------------------- | ------------------------------------------------------------------------------------------------- | ------------- |
| **Provenance / attribution**        | §11 "provenance is mandatory"; §16 "record model/prompt provenance"; §17 "unattributed data"; §21 | Very strong   |
| **Integrity / verification-status** | §5 "protect its integrity"; §17 "never corrupt… with unverified… data"                            | Strong        |
| **Durability / permanence**         | Manifesto "Nothing should be disposable"; §3 "permanent"; §5 "the asset"                          | Very strong   |
| **Compounding / accumulation**      | Manifesto "Build Once. Reuse Forever."; §3 "compounds"                                            | Strong        |
| **Interlinking (relational)**       | §4 "interlinked" / "typed edges"; §3 "interlinked knowledge"                                      | Strong        |
| **Searchability / retrievability**  | §3 "searchable"                                                                                   | Weak-moderate |

The properties answer a different question than the forms: not _which knowledge exists_, but _what must be true of any knowledge that does_. Their corroboration is broader, more independent, and more emphatic (several use mandatory language — "mandatory," "never corrupt," "nothing disposable") than any single form except Decision.

## Evidenced Relationships

- **Directed progression among forms** — §4 pipeline and Manifesto's chain. _Caveat carried from D-005:_ the progression is evidenced but appears in **several non-identical stagings**; its exact ordering is not canonical.
- **Evidence → Decision** — the clearest single directed relation: knowledge "generates better decisions" (§4).
- **Learning ← outcomes (feedback)** — §4 places Learning after Execution; "every lesson should become part of the platform."
- **Every item → provenance** — §11/§17 make attribution a mandatory attachment on all knowledge (a universal relation).
- **Items ↔ items (typed edges)** — §4: knowledge is relational, not isolated.

## Observed Distinctions

- **Epistemic-status distinction among forms** — unvalidated idea/opportunity → observed evidence → validated conclusion → committed decision → retrospective learning. Conceptual and implementation-independent; independently corroborated by D-001's "Distinction" (with the category boundary noted). The distinction is evidenced; its exact set/ordering is not canonical.
- **Knowledge (durable) vs thinking (activity)** — §4, "AI accelerates thinking; the database is the asset."
- **Content vs provenance** — a knowledge item is distinguished from its origin/attribution (§11, §17).
- **Verified vs unverified/unattributed** — §17 treats these as different in kind, not degree.

## Architectural Observation

Synthesizing several independently corroborated findings — durability ("nothing disposable," "permanent," "the asset"), compounding ("Build Once. Reuse Forever.," "compounds"), and mandatory provenance/integrity:

> **Knowledge in Foundry is consistently treated as a durable institutional asset rather than transient information.**

This is recorded as an observation drawn from the corpus, **not** elevated into a new architectural principle. It is offered because it names the common thread the strongly-corroborated properties share.

## Areas of Ambiguity (recorded, not resolved)

- **Idea vs Opportunity** — named separately; the corpus does not say whether one concept or two. Not normalized here.
- **Knowledge vs product-of-knowledge** — the Manifesto chain's later items (specifications, architecture, software, businesses) are "assets" and "not disposable," but the corpus does not classify them as _knowledge_ vs _artifacts produced from knowledge_.
- **Exhaustiveness of the named forms** — §4's list is illustrative and single-sourced; completeness is not stated.
- **Role of Competitor / Customer** — "competitors" is a named node; "customer interview" reads as a _source of evidence_. Element vs source is ambiguous.
- **Concern-model overlap** — the epistemic-status forms overlap suggestively with D-001's Distinction and concerns like Reality-Testing/Judgment, but the corpus does not establish they are the same objects. Left open.
- **Portfolio** — the pipeline's end; knowledge concept or collection of business outcomes is unresolved.

## Confidence Assessment

- **Highest confidence attaches to the knowledge _properties_, not to any individual form.** Provenance, integrity, durability, compounding, and interlinking are corroborated **broadly and independently** across multiple artifacts (Manifesto, CLAUDE.md §3/§4/§5/§11/§17), several in mandatory language. This breadth and independence of corroboration — not the prominence of any single passage — is what warrants the high confidence, and it is the evidential basis for the central finding.
- **Moderate confidence** that _Decision_, _Evidence_, and _Idea/Opportunity_ are the recurring knowledge forms; **Decision** is the single best-corroborated form, but still narrower and less independently sourced than the leading properties.
- **High confidence (negative):** the §4 enumeration is illustrative and single-sourced — not canonical; and single-appearance forms (assumptions, competitors) must not be over-weighted.
- **Preserved uncertainty:** the epistemic-status ordering, and every item under Ambiguity, remain genuinely open.

## Conclusions

The corpus consistently and independently evidences a small core of **knowledge properties** — attribution/provenance, integrity, durability, compounding, and interlinking — that every knowledge item is expected to satisfy, and treats knowledge throughout as a **durable institutional asset** rather than transient information. It is markedly less consistent about **knowledge forms**: it names several (most robustly Decision, then Evidence and Idea/Opportunity), but its one enumerated list is illustrative and single-sourced, and genuine ambiguities (idea vs opportunity; knowledge vs artifact; exhaustiveness; the role of competitors/customers) remain unresolved.

That asymmetry — strong agreement on _what knowledge must be_, weaker and incomplete agreement on _what it consists of_ — is D-006's central contribution. It increases justified understanding of Foundry's enduring knowledge concepts while designing no model, inventing no categories, normalizing no terminology, ranking no concepts, and creating no canonical types.
