# Discovery D-007 — Conceptual Distinctions Between Knowledge, Decisions, and Execution

> **Status:** Accepted Discovery — **Non-Binding.** CTO Review: Approved with editorial refinement (Co-CTO concurrence) · Founder Review: Accepted.
>
> This report is accepted organizational knowledge — a Phase 2 product-architecture discovery. It does **not** modify governance, create any PDR/ADR/Founder Decision, define architectural layers, or constrain future work beyond serving as evidence. See [`../README.md`](../README.md) for how accepted discoveries differ from binding governance.

## Governance Context

Governance-v1.0; assumes FD-000, FD-001; carries the forward-only Governance Context convention. Admissible evidence: the approved corpus and accepted D-000–D-006 only. No external software-architecture, execution, workflow, DDD, or knowledge-management literature. Discovery only — no governance/product/repository change. **D-005 and D-006 are context, not premises**; any relationship they described is used here only if D-007 independently re-evidences it.

## Discovery Question

> What conceptual distinctions between knowledge, decisions, and execution are consistently supported by the existing evidence?

## Method note

Phase A characterizes each concept **independently** — recording recurring usage without comparing concepts and **without concluding** whether multiple usages represent multiple meanings, contextual applications, or genuine polysemy. Phase B compares, letting distinctions emerge from Phase A. Throughout, _recurring usage_ (observation) is kept separate from _inferred meaning_ (explanation).

---

## Phase A — Independent Concept Characterization

### Knowledge

- **Recurring usages (cited):** "the knowledge graph… is the product" (§4); "the database is the asset" / "the knowledge graph is the asset" (§4/§5); "institutional memory… permanent, searchable, interlinked knowledge" (§3); "turns [activity]… into knowledge" (§3); "Knowledge should compound," "Build Once. Reuse Forever." (Manifesto).
- **Recurring descriptions:** durable, permanent, compounding, interlinked, searchable, "the asset," "the product," institutional.
- **Recurring roles:** the store/substrate; the product; the asset; what accumulates.
- **Recurring contexts:** mission (§3), product vision (§4), engineering philosophy (§5), Manifesto beliefs — broad and cross-document.
- **Recurring responsibilities:** to be retained, protected ("protect its integrity"), attributed, not corrupted, compounded (corroborated by D-006's properties).
- **Recurring conceptual pattern (observation only):** knowledge is used consistently as a **noun/thing that persists and accumulates**, and its descriptor cluster (durable/asset/permanent/compounding/interlinked) recurs with unusually little variation across every context.

### Decision

- **Recurring usages (cited):** "it **generates better decisions**" (§4, Foundry's function); pipeline stage "Decision" (§4); node type "**decisions**" (§4); "**decision quality** compounds" (§3); "**humans decide.** Nothing AI-produced is authoritative until a human confirms it" (§5); "Every **decision** must answer… Does this increase founder leverage?" (Manifesto First Principle). _(Governance-side, category-flagged: "AI is advisory, not authoritative," §16/§17.)_
- **Recurring descriptions:** "better"; authoritative-when-human-confirmed; compounding (as artifacts); leverage-judged.
- **Recurring roles observed:** Foundry's produced output; a pipeline stage; a stored node/artifact; a human authoritative act; a leverage-test.
- **Recurring contexts:** product vision (§4), engineering philosophy (§5), Manifesto First Principle.
- **Recurring responsibilities:** to be made by a human; to be authoritative; to be _improved_ ("better"); to compound; to answer to leverage.
- **Recurring conceptual pattern (observation only, explanation withheld):** "decision" appears across **several distinguishable roles/contexts** — produced-output, stage, stored-artifact, human-act, leverage-test. **Per the analytical constraint, D-007 records this multiplicity as evidence and does not here conclude** whether it is polysemy, contextual application of one concept, or genuinely different senses. The corpus is noted to **not explicitly reconcile** these usages.

### Execution

- **Recurring usages (cited):** pipeline stage "Execution" (§4); "imagination, determination, and **execution**" (Vision, a founder attribute); "**create, launch, operate, and grow**" (Mission); "Architecture becomes software. Software becomes businesses" (Manifesto); "Infrastructure Should Disappear" — Foundry absorbs execution infrastructure (servers, deployment); "Systems Outperform Heroics… should become a process… should be automated" (Manifesto).
- **Recurring descriptions:** described almost entirely through **activity verbs** (create/launch/operate/grow/build) and as automatable/systematizable — **not** through properties.
- **Recurring roles observed:** a stage (post-Decision); a founder capability/attribute; build-and-operate work; infrastructure Foundry handles.
- **Recurring contexts:** product vision (§4), Vision (founder attribute), Manifesto (mission verbs, infrastructure, systems).
- **Recurring responsibilities:** to be done (agent unspecified — see below); to be systematized/automated; to be made easier.
- **Recurring conceptual pattern (observation only):** execution is **thinly characterized** — activity-flavored, with no property-cluster and no "execution is the X" identity statement analogous to knowledge's or decision's. Its **agent is left unspecified** (founder does it / Foundry absorbs its infrastructure).

## Semantic Stability (the additional question, tested — reported as observation)

The evidence supports **meaningful differences** in how stably the corpus fixes each concept — but of _different kinds_, so this is not one symmetric scale:

- **Knowledge:** one dominant, uniform conceptual pattern (durable asset), recurring with little variation. **Most stable.**
- **Decision:** used across the _most distinct roles/contexts_ of the three; whether that reflects a single rich concept or several senses is **unresolved by the corpus**. Its variation is _multiplicity of role_.
- **Execution:** few usages, activity-only, agent-ambiguous. Its variation is _under-specification_, not multiplicity.

So: significant differences exist, but "knowledge is uniform," "decision is multi-role," and "execution is under-specified" are three _different_ kinds of (in)stability, not three points on one line.

---

## Phase B — Comparative Analysis (emerging from Phase A)

- **Supported distinctions.**
  - **Knowledge vs Execution** is the cleanest: their descriptor vocabularies do not overlap at all — knowledge is described by _persistence properties_, execution by _activity verbs_. Noun vs verb, on non-overlapping evidence.
  - **Decision vs Knowledge on human authority** (strong): knowledge/analysis is AI-producible but not authoritative; a decision is where human authority enters ("humans decide… nothing AI-produced is authoritative until a human confirms it," §5). This is the single best-earned conceptual distinction.
- **Overlaps.**
  - **Decision overlaps Knowledge:** "decisions" is itself a knowledge node type (§4) and "decision quality compounds" like knowledge — so a decision, once made, is _also_ knowledge.
  - **Execution overlaps Knowledge (via residue):** Learning follows Execution (§4) and "every lesson should become part of the platform" — execution's outcomes become knowledge. _(Independently evidenced here; this converges with D-005's production–feedback structure — recorded as convergence, not inherited.)_
- **Transformations.** The §4 pipeline presents Decision → Execution → Learning as a directed sequence — the concepts appear (in this passage) as _stages of one process_. Independently evidenced; staging non-canonical across the corpus.
- **Recurring ambiguities.** Decision's multiple roles are unreconciled by the corpus; execution's agent (founder vs Foundry) and conceptual status are unresolved; whether execution's outputs (software/businesses) are "knowledge" is unresolved (from D-006).
- **Assumptions the corpus does not earn (within what this discovery examined).**
  - The corpus does not evidence a **clean three-layer** knowledge/decision/execution separation. Phase A found the three characterized in incommensurable ways (properties vs. multi-role vs. activity); within what this discovery examined, that provides no support for treating them as three parallel co-equal layers, and such a reading would import familiar software vocabulary the corpus does not itself supply.
  - **Semantic unity should not be presumed.** The evidence does not justify assuming that every recurring term denotes a single stable concept — Phase A found "decision" used across several unreconciled roles and "execution" under-specified. Whether semantic unity exists for a given term should itself be established from the corpus rather than presumed. This is D-007's deeper observation: the assumption worth testing extends beyond structure and taxonomy to semantic unity.

## Confidence Assessment

- **High:** the three concepts are characterized in fundamentally different ways (knowledge by durable properties; decision across multiple roles centered on human authority; execution thinly, by activity, agent-ambiguous).
- **High:** the knowledge/execution (thing vs activity) and decision/knowledge (human authority) distinctions are supported.
- **Medium:** the pipeline ordering / execution→learning→knowledge feedback (independently evidenced; staging non-canonical).
- **Low:** execution as a well-defined distinct concept; and whether "decision"'s multiplicity is one concept or several — genuinely open.
- **High:** within what the discovery examined, the corpus does not support a clean three-layer separation, and does not justify presuming per-term semantic unity.

## Conclusions

Characterized independently, the three concepts are described very differently by the corpus. **Knowledge** is the most stably-fixed — a durable, property-defined asset. **Decision** is central to Foundry's stated function ("generates better decisions") but is used across several roles the corpus does not reconcile, so whether it denotes a single concept remains unresolved. **Execution** is the thinnest — activity-described, agent-ambiguous, and of unresolved status as a distinct concept.

The distinctions the corpus consistently supports are therefore **asymmetric**: strongest between knowledge (a thing) and execution (an activity); strong between decision and knowledge on the axis of human authority; and, within what this discovery examined, weak or unevidenced where a familiar three-layer separation would predict them. Two assumptions are, on this evidence, not earned by the corpus within the discovery's scope: the **three-layer structural separation**, and — the deeper one — the presumption of **semantic unity**. The evidence does not justify assuming that every recurring term denotes a single stable concept; whether semantic unity exists should itself be established from the corpus rather than presumed. Where the corpus is silent — execution's agent and status, and the reconciliation of decision's roles — that silence is recorded, not filled.
