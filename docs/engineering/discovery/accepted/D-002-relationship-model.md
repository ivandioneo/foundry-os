# Discovery D-002 — Relationship Model of Foundry's Working Organizational Concerns

> **Status:** Accepted Discovery — **Non-Binding.** CTO Review: Approved · Founder Review: Approved.
>
> This report is accepted organizational knowledge. It does **not** modify governance, the working relationship model, D-000, or any Founder Decision, and no Founder Decision adopts its conclusions. See [`../README.md`](../README.md) for how accepted discoveries differ from binding governance.

## Governance Context

**Current Baseline**

- Governance Version: governance-v1.0
- Applicable Founder Decisions: FD-000, FD-001

This discovery assumes the currently adopted working concern model established by FD-001 — Memory, Distinction, Judgment, Reality-Testing, Value Definition. It does not reopen or modify FD-000, FD-001, D-000, or D-001/D-001A/D-001R. This is the first Discovery to carry a Governance Context section; per Founder direction it applies forward-only and is not retrofitted onto earlier artifacts.

## Summary

The discovery question is narrow: what are the enduring structural relationships among the five adopted concerns? Re-reading D-001, D-001A, and D-001R's "depends on" / "depends on it" statements as a graph — rather than as isolated per-concern arguments, which is how they were originally written — produces a specific shape: Distinction is the only one of the five with no stated dependency on another; Memory and Reality-Testing each depend only on Distinction and have no stated relationship to each other; Judgment and Value Definition form the graph's most tightly coupled pair; and a second, more tentative coupling exists between Reality-Testing and Value Definition. Most failure propagation in the described scenarios is corrupting — the dependent concern keeps operating, but on bad inputs — rather than blocking, with one narrow exception. A more granular hypothesis about what _kind_ of relationship each edge represents is explored separately at the end of this report and is not part of the evidence-grounded conclusions above it. The largest weakness in the graph itself, independent of that exploratory material, is that the dependency claims this discovery works from were never gate-tested the way D-000 gate-tested concern-candidacy in D-001R; this discovery inherits that gap rather than closing it.

---

## Observations

Extracting every explicit "depends on" / "is depended on by" statement across D-001's eight original entries (translating Correction and Renewal into Judgment, and excluding Accountability as no longer first-class, per FD-001):

| Statement (source)                                                           | Reading                                                                       |
| ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Memory "depends on: Distinction" (D-001 A.6)                                 | Distinction → Memory                                                          |
| Distinction "[Memory, Judgment, ...] depend on it" (B.5)                     | Distinction → Memory, Judgment                                                |
| Judgment "depends on: Distinction, Memory" (C.6)                             | Distinction → Judgment; Memory → Judgment                                     |
| Memory "[Judgment, Correction, ...] depend on it" (A.5)                      | Memory → Judgment (corroborates C.6)                                          |
| Reality-Testing "depends on: Distinction" (D.6)                              | Distinction → Reality-Testing                                                 |
| Distinction "[..., Reality-Testing] depend on it" (B.5)                      | Distinction → Reality-Testing (corroborates D.6)                              |
| Correction (pre-merge) "depends on: Reality-Testing, Judgment, Memory" (E.6) | Reality-Testing → Judgment (post-merge)                                       |
| Reality-Testing "[Correction, Value Definition] depend on it" (D.5)          | Reality-Testing → Judgment (corroborates); Reality-Testing → Value Definition |
| Value Definition "[Judgment, Reality-Testing] depend on it" (G.5)            | Value Definition → Judgment; Value Definition → Reality-Testing               |
| Value Definition "depends on: Correction" (G.6)                              | Judgment → Value Definition (post-merge)                                      |
| Renewal (pre-merge) "depends on: ..., Value Definition" (H.6)                | Judgment → Value Definition (second, independent corroboration)               |
| Memory "[..., Value Definition] depend on it" (A.5)                          | Memory → Value Definition                                                     |

Four things stand out directly from this table, before any synthesis:

1. **No entry states that Memory, Distinction, or Reality-Testing depends on Judgment or Value Definition.** Every stated edge into Judgment or Value Definition runs one way; the evidence contains no counter-statement.
2. **Judgment and Value Definition each claim the other as both dependent and dependency, and each direction has an explicit stated mechanism** — Value Definition → Judgment (G.6, corroborated independently by H.6: revision keeps a criterion from calcifying into dogma) and Judgment → Value Definition (G.5: Judgment "needs a criterion to decide toward"). Both directions are directly stated, not inferred.
3. **Reality-Testing and Value Definition also claim each other as dependent and dependency** (D.5, G.5), but only one direction has an explicit supporting mechanism. D.5 gives one: "a stated criterion is unfalsifiable unless checked against real outcomes." G.5's reverse claim has no equivalent explanation anywhere in D-001.
4. **No direct statement connects Memory and Reality-Testing, in either direction. No direct statement connects Distinction and Value Definition either** — D-001A considers merging Distinction with Value Definition as "both 'criterion-setting,'" but this is a considered-and-rejected merge candidate, not a dependency claim.

## Reasoning

**1. Within the stated evidence, Distinction is the only one of the five concerns with no dependency on another.** No passage claims Distinction depends on Memory, Judgment, Reality-Testing, or Value Definition; three independent passages state the reverse for each of those three. This describes what the evidence documents, not a demonstrated necessity — absence of a stated dependency isn't proof none exists, only that none was recorded. With that caveat, Distinction occupies the graph's only position with three outgoing edges and zero incoming ones, reproducing D-001's own original claim that "Distinction is the most foundational." That reproduction is worth noting but shouldn't be overweighted: it comes from re-deriving structure out of the same source D-001 was built on, not an independent body of evidence — it corroborates internal consistency, not external confirmation.

**2. Memory and Reality-Testing each depend only on Distinction and have no stated relationship to each other.** Both occupy structurally similar positions — a single incoming edge from Distinction, no edge to or from each other. Whether this parallel position reflects something meaningful about their character or is simply an artifact of D-001 never posing that specific pairwise question is addressed in Counterarguments.

**3. Judgment and Value Definition form the graph's best-evidenced cycle.** Both directions are directly stated with explicit mechanisms, corroborated across more than one passage each: Value Definition supplies the criterion Judgment needs to decide toward (G.5), and Judgment's revision capacity keeps that criterion from becoming an unrevisable dogma (G.6, reinforced independently by H.6). No other pair in the graph has this level of direct, cross-corroborated support in both directions.

**4. Reality-Testing and Value Definition form a second, more tentative cycle.** Both directions are asserted (D.5, G.5), but only Reality-Testing → Value Definition has a stated mechanism (falsifiability). The reverse direction is asserted without explanation anywhere in the primary evidence, so this edge should be treated as meaningfully weaker than the Judgment/Value-Definition pair.

**5. Failure propagates by corruption rather than blocking in every scenario the evidence describes but one.** Distinction's, Memory's, and Value Definition's failure modes are each described as continued-but-degraded operation — unreliable, wasteful, drifting — rather than cessation. Reality-Testing's failure mode, specifically with respect to Judgment's revision function, is the sole exception, described in blocking language ("cannot act because it has nothing to correct toward" — D-001R, Reality-Testing gate 1). This asymmetry is worth treating as a structural finding, though it rests on the specific wording chosen in each D-001 entry — a real limitation (see Counterarguments).

**6. Recursion is not evenly distributed.** Judgment's FD-001 definition explicitly includes revision of its own methods — the only one of the five whose own definition is self-referential in the primary evidence. Value Definition's definition ("state, examine, and revise") arguably shares this character, since the examining function could itself be examined, but this is an inference from adjacent phrasing, not a direct claim.

## Counterarguments

**This graph may be reading structure into prose that was never meant to bear that weight.** D-001's "Depends on it" / "It depends on" fields were written as short supporting notes for an eleven-question interrogation of _individual_ concerns, not as a deliberately-constructed relational graph. Reassembling them into one assumes each note was written with cross-entry consistency in mind. Observation 3 — the unexplained Reality-Testing←Value Definition direction — is direct evidence that assumption doesn't fully hold.

**This discovery inherits an unexamined evidentiary base.** D-000 exists because D-001A found D-001's _concern candidacy_ claims were produced by a single reasoning pass with no adversarial testing, and D-001R then subjected those claims to gate-based scrutiny. The _dependency_ claims embedded in those same entries have never been through an equivalent process — nothing analogous to D-000 exists for relationship claims. Every edge in this graph carries the same unexamined-reliability risk that concern-candidacy carried before D-000 existed.

**The "two parallel channels" reading of Memory and Reality-Testing remains interpretation, not observation.** The evidence supports only that neither depends on the other and both depend solely on Distinction. A more austere reading is simply two independent leaves of the same root, with no further claimed significance to their parallelism.

**The blocking/corrupting distinction may be an artifact of word choice, not a deliberate design.** "Cannot act" versus "unreliable" versus "drifts" were phrases chosen by whoever wrote each entry in the moment, not selected against a considered failure-mode taxonomy.

## Remaining Uncertainties

- Whether the absence of a stated Distinction dependency reflects a real structural fact or simply that D-001 never posed the question in that direction.
- Whether the Reality-Testing ↔ Value Definition relationship is a genuine cycle or an unsupported reverse claim that should be treated as absent.
- Whether "blocking vs. corrupting" is a genuine, load-bearing distinction, or an artifact of incidental phrasing across independently-written entries.
- Whether Judgment's and Value Definition's self-referential character explains their coupled relationship, or is a coincidence.
- Whether relationship claims sourced from a single, non-adversarially-tested reasoning pass are reliable enough to build a graph from at all, absent something equivalent to D-000 for relationship claims specifically.
- Whether the absence of any direct Memory↔Reality-Testing or Distinction↔Value-Definition relationship reflects a real structural gap or simply an unasked question.
- How Accountability, if reinstated per FD-001's reversal conditions, would attach to this graph — unaddressed here, since it isn't part of the current five-concern model.
- A separate, exploratory hypothesis about what _kind_ of relationship each edge represents is presented at the end of this report. It raises its own open questions, kept there rather than mixed into this list, since it is not part of these evidence-grounded conclusions.

## Candidate Relationship Models

**Model 1 — Layered Hierarchy.** Distinction (foundation) → {Memory, Reality-Testing} (intake layer) → {Judgment, Value Definition} (generative layer). Matches most of the corrupting-propagation evidence and reproduces D-001's original informal layering. Fails to account for either cycle in Reasoning points 3 and 4 — a strict hierarchy has no back-edges, and both pairs run in both directions.

**Model 2 — Rooted structure with two coupled pairs of differing strength.** Distinction as the only concern with no stated dependency; Memory and Reality-Testing as two dependents of Distinction with no stated relationship to each other; Judgment and Value Definition connected by a well-evidenced, mutually-corroborated cycle; Reality-Testing and Value Definition connected by a weaker, only-partially-corroborated cycle. This is the model most directly supported by the observed edges and is used as the working structural picture below.

**Model 3 — Loosely connected network, no assumed layering.** Treats the layering and pairing in Models 1 and 2 as possibly over-fit to five short text entries written independently of one another, and describes only what's directly stated: Distinction has three outgoing edges with no stated reverse; Judgment and Value Definition reference each other with stated mechanisms both ways; two pairs (Memory/Reality-Testing, Distinction/Value-Definition) have no stated relationship at all; the Reality-Testing/Value-Definition claim in one direction should be treated as unsupported rather than real. This model is the appropriately skeptical fallback.

## Recommended Conclusions

Model 2 is the best-supported reading of the current evidence and is recommended as the working structural picture, with two caveats carried forward rather than resolved: the Reality-Testing/Value-Definition relationship should be treated as lower-confidence than every other relationship in the graph, and the graph as a whole rests on dependency claims that have not been adversarially tested the way concern-candidacy was tested by D-000. Model 1 remains useful as a simplified approximation where both cycles can be safely ignored. Model 3 is the appropriate fallback if either cycle turns out to be a documentation artifact rather than real.

This report reaches a recommended structural model, not a decision. Whether any of this should become binding, whether the Reality-Testing/Value-Definition question needs its own follow-up discovery, and whether relationship claims need a D-000-equivalent evaluation framework of their own are all open — deliberately left for review rather than resolved here.

---

## Exploratory Analysis (Not Part of the Primary Discovery)

Everything in this section is a hypothesis, offered as a candidate line of inquiry for a possible future discovery — not an established finding of D-002, and not incorporated into the Candidate Relationship Models or Recommended Conclusions above.

Collapsing every stated relationship to a single "depends on" label may obscure real differences in kind. One way to read the primary evidence more finely is to sort each edge by character — enabling, constraining, epistemic, normative, or temporal:

- Distinction's three outgoing edges each concern correct categorization — the downstream concern _knowing_ correctly, not merely operating — which might be labeled **epistemic-enabling**.
- Memory's edges to Judgment and Value Definition are both described in terms of persistence across time — repeated relearning, a criterion that "can't be applied consistently over time" — which might be labeled **temporal-enabling**.
- Reality-Testing's edge to Judgment is the one edge described in blocking rather than corrupting language, and might still be epistemic in character (it supplies the evidentiary basis Judgment's revision function needs) but harder — closer to a precondition than a quality-improver.
- Value Definition's edge to Judgment — continued operation without it, but no standard for what counts as good — might be labeled **normative-constraining**, the clearest candidate for a normative edge in the set.
- Judgment's edge back to Value Definition ("becomes dogma" without revision) reads, in character, like Memory's edges — about whether something remains valid across time rather than about correctness or normative content — a second candidate for **temporal-enabling**.
- Reality-Testing's edge to Value Definition (falsifiability) reads as **epistemic** — about how a criterion's rightness can be known.
- Value Definition's asserted edge back to Reality-Testing has no stated mechanism anywhere in D-001. One speculative mechanism can be constructed from a passage written about a different question (G.4, on what disappears if Value Definition is absent generally): without any criterion of what should count as significant, Reality-Testing's checking activity might have nothing to evaluate results against. This would be **normative**, if the reconstruction holds — but it is assembled from an adjacent passage, not read directly off G.5, and should be weighted as a guess rather than a supported claim.

Under this reading, neither coupled pair would be a same-type relationship running both ways — each would involve two different kinds of relationship in opposite directions, a different claim than "X and Y mutually depend on each other" as stated in Reasoning points 3 and 4 above.

This typology should be treated skeptically. Sorting each edge into these five categories required judgment calls about which word in each passage was load-bearing, and someone reading the same passages could reasonably sort them differently, or reject the categories as an imported vocabulary not native to the source text. The normative mechanism proposed for Value Definition → Reality-Testing in particular is the weakest link in this section — reconstructed, not stated. If a future discovery pursues this line, it would need its own evidentiary grounding rather than inheriting these speculative labels as settled.
