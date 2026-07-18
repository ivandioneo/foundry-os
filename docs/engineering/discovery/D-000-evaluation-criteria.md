# Discovery D-000 — Criteria for First-Class Concern Status

## Executive Summary

Reasoning from what actually broke in D-001A rather than from abstract first principles alone, this discovery identifies **seven candidate criteria** for what makes something deserve first-class-concern status, as opposed to being a capability, behavior, process, property, implementation, artifact, responsibility, role, goal, value, or principle wearing a concern's clothing. Two of the seven (Irreducibility, Independent Failure Mode) turn out to substantially overlap — the second is really the first made testable — and are recommended for collapse. One (Minimal-Instantiation Presence) has a real false-negative risk against concerns that are legitimately scale-contingent rather than merely scale-convenient, and should be used as a flag for scrutiny, not an automatic rejection. One (Independent Corroboration) is valuable specifically as a check against self-priming — directly answering the strongest objection raised in D-001A's Reverse Position — but penalizes genuine originality if used as a hard gate, so it belongs among calibration signals rather than pass/fail tests.

The deepest uncertainty is not about which criteria are correct but about the shape of the question itself: these criteria are constructed as if "first-class concern" is a binary property something either has or lacks. It may instead be a matter of degree, in which case a checklist that returns pass/fail is itself a category error — the same kind of error this entire discovery chain has been hunting inside D-001. This is flagged prominently rather than resolved.

The recommended output is a **four-criterion hard filter plus two soft calibration signals**, explicitly framed as necessary-condition tests that are good at rejecting false candidates and not proof of admission for anything that survives them.

---

## Candidate Criteria

### C1 — Irreducibility (Non-Derivability)

1. **Name:** Irreducibility.
2. **Definition:** X qualifies as first-class only if it cannot be fully explained, generated, or predicted as a downstream effect of every other candidate concern operating correctly, in combination.
3. **Why it exists:** If X's presence or absence is always fully accounted for by other recognized concerns, naming X separately adds no explanatory content — it's a redundant label.
4. **Category error prevented:** Concern vs. behavior, concern vs. capability — a recurring pathology or a supporting capability is often fully explainable as a downstream effect of another concern functioning well or poorly, with nothing left over.
5. **Distinguishes true concern from apparent importance?** Partially — a symptom can be very important and still be fully derivable from one underlying cause; importance alone doesn't establish irreducibility.
6. **Could a valid concern fail this?** Yes — this is its sharpest weakness. Two mutually necessary concerns can each look "derivable" from the other simply because the derivation attempt was incomplete. Irreducibility is easy to claim and hard to prove.
7. **Could a non-concern satisfy it?** Yes — a brute physical constraint or a static property (e.g., founding date) can be genuinely irreducible without being a concern at all. Irreducibility rules out redundancy; it doesn't establish concern-hood.
8. **Limitations:** Requires an actual derivation attempt, which is labor-intensive and never provably exhaustive — absence of a known derivation isn't proof none exists.
9. **Confidence:** Medium-high, as a necessary but not sufficient condition.

### C2 — Independent Failure Mode

1. **Name:** Independent Failure Mode.
2. **Definition:** X must have at least one realistic scenario where every other candidate concern is fully satisfied and the organization still suffers a describable, distinct form of damage specifically attributable to X's absence or violation.
3. **Why it exists:** Operationalizes C1 into something testable — instead of an abstract derivation proof, construct the counterexample directly.
4. **Category error prevented:** Concern vs. mechanism/channel, concern vs. process — a channel or a procedure doesn't fail in a way separable from the concern it implements; this test exposes that.
5. **Distinguishes true concern from apparent importance?** Yes, more directly than C1 — forces a concrete test, harder to fool with rhetorical importance alone.
6. **Could a valid concern fail this?** Yes, if the scenario is simply hard to imagine due to limited scenario diversity, not because the concern is genuinely derivable — subtle or rare concerns may lack an easy counterexample.
7. **Could a non-concern satisfy it?** Rarely, but possible if the described "failure" is actually a compound failure of two other concerns interacting, dressed up as something novel.
8. **Limitations:** The scenario-construction step is subjective and depends on the constructor's imagination and honesty — the same self-administered-test weakness identified in D-001A.
9. **Confidence:** High — the single most actionable criterion in this set.

### C3 — Non-Terminality (Requires Ongoing Attention)

1. **Name:** Non-Terminality.
2. **Definition:** X cannot be permanently and finally satisfied such that no further attention is ever required; it must be continually held and capable of degrading again even after being well-addressed.
3. **Why it exists:** Distinguishes an ongoing condition (a concern) from a target state that, once reached, is complete (a goal).
4. **Category error prevented:** Concern vs. goal — "launch the product" is achievable and then done; "keep producing valuable products" is never finally achieved.
5. **Distinguishes true concern from apparent importance?** Yes for this specific confusion — a very important one-time achievement can be highly consequential without being a concern by this definition.
6. **Could a valid concern fail this?** Only in appearance — a genuine concern can have long dormant periods that look "finished" if tested at a single point in time. This is a temporal-sampling problem, not a flaw in the concept.
7. **Could a non-concern satisfy it?** Yes — routine recurring maintenance ("keep the servers running") is also perpetual without being an organizational "concern" in the intended sense. Non-terminality alone doesn't exclude chores.
8. **Limitations:** Doesn't discriminate concern from recurring responsibility/routine on its own; needs pairing with another criterion.
9. **Confidence:** Medium-high as necessary, weak as sufficient.

### C4 — Representation-Independence

1. **Name:** Representation-Independence.
2. **Definition:** X must survive the replacement of any specific artifact, tool, document, process, or vocabulary currently used to address it.
3. **Why it exists:** Prevents mistaking the current implementation of a response to a concern for the concern itself.
4. **Category error prevented:** Concern vs. implementation, concern vs. artifact — most directly of any criterion here.
5. **Distinguishes true concern from apparent importance?** Yes — an artifact can be operationally critical while still failing this test, revealing it as an implementation.
6. **Could a valid concern fail this?** This is its most serious false-negative risk — some concerns are representation-dependent below a certain scale (satisfied with zero artifacts in a two-person team) yet clearly representation-independent in principle once tested at realistic scale. Needs a scale/context qualifier.
7. **Could a non-concern satisfy it?** Yes — some capabilities are also representation-independent ("the ability to communicate" survives any specific tool) without being organizational concerns. Necessary, not sufficient.
8. **Limitations:** Requires imagining total representation loss — a thought experiment, not an observed fact; different reasoners can disagree on what "survives."
9. **Confidence:** High as a necessary filter.

### C5 — Non-Circular Definability

1. **Name:** Non-Circular Definability.
2. **Definition:** X must be definable without its definition consisting of "[another candidate concern] applied to/at [a different scope or recursion level]." If removing the reference to a sibling leaves the definition empty, X is not independently definable.
3. **Why it exists:** Built directly from the specific pattern that destroyed three of D-001's eight items — Renewal as "Correction applied to methods," Value Definition as "Judgment applied to criteria," Accountability partly defined through Judgment's own legitimacy requirement.
4. **Category error prevented:** Concern vs. scope/recursion-depth of another concern's application — the most narrowly targeted, empirically-derived criterion in the set.
5. **Distinguishes true concern from apparent importance?** Yes, sharply — importance can survive the moment the definition is stripped of sibling references and found empty.
6. **Could a valid concern fail this?** Possibly, if two genuinely independent concerns share vocabulary for stylistic reasons without actual logical dependency.
7. **Could a non-concern satisfy it?** Yes — a non-circular definition can still describe a property, behavior, or artifact. This criterion screens out exactly one failure pattern, not all impostor categories.
8. **Limitations:** Narrow — catches definitional parasitism specifically, nothing else. Must be combined with broader criteria.
9. **Confidence:** High for what it specifically catches; explicitly narrow otherwise.

### C6 — Minimal-Instantiation Presence (Scale-Invariance)

1. **Name:** Minimal-Instantiation Presence.
2. **Definition:** X should remain a meaningful, applicable category even at the smallest realistic instantiation of the phenomenon in question (a single person, a single decision) — even if trivially satisfied there, it should not vanish as a category entirely.
3. **Why it exists:** Screens for concerns that are actually artifacts of scale or plurality rather than genuinely enduring "regardless of organizational changes."
4. **Category error prevented:** Concern vs. role, concern vs. responsibility — roles and responsibility-assignments are often scale-contingent by construction.
5. **Distinguishes true concern from apparent importance?** Partially — importance at scale doesn't guarantee the category exists at minimal scale.
6. **Could a valid concern fail this?** This is its most serious risk, left unresolved rather than papered over: something like "coordination between distinct parties" may be a real, enduring concern with no analog at n=1 — not because it's derivable from something else, but because the phenomenon it addresses literally requires plurality to exist at all. That's category-absence, not triviality, and this criterion cannot currently tell the two apart.
7. **Could a non-concern satisfy it?** Yes — many properties ("has a name") are trivially present at minimal scale without being concerns.
8. **Limitations:** The distinction between "trivially satisfied but meaningful" and "category-absent, not merely trivial" is unresolved and needs case-by-case judgment.
9. **Confidence:** Medium — genuinely useful, but the false-negative risk in point 6 is real and open.

### C7 — Independent Corroboration (Convergent Naming)

1. **Name:** Independent Corroboration.
2. **Definition:** X gains support if it is recognizable or already named under different vocabulary in frameworks or traditions not generated by the same reasoning process, priming, or working hypotheses currently in use.
3. **Why it exists:** Directly answers the strongest objection in D-001A's Reverse Position — that a solitary reasoning process, primed by specific working hypotheses, may simply rediscover its own priming and mistake that for independent discovery.
4. **Category error prevented:** Concern (a real, mind-independent pattern) vs. artifact-of-this-framework.
5. **Distinguishes true concern from apparent importance?** Only indirectly — corroboration speaks to epistemic confidence, a different axis than the structural tests above.
6. **Could a valid concern fail this?** Yes, readily — a genuinely novel, correctly identified concern may simply not yet be named elsewhere. Being first is not evidence against validity.
7. **Could a non-concern satisfy it?** Yes — widely-recognized folk categories are sometimes folk categories precisely because they bundle several genuinely separate things together for convenience.
8. **Limitations:** Strongest as a corroborating signal, weakest as a standalone test.
9. **Confidence:** Medium — valuable specifically as a check against self-priming, not a strong standalone filter.

---

## Reasoning

The seven criteria are not independent tools operating at the same level. C2 (Independent Failure Mode) is C1 (Irreducibility) made testable — a candidate should be run through C2 as the operational version, with C1 as its underlying justification. C5 (Non-Circular Definability) is a narrow-spectrum instrument tuned to one specific, empirically observed failure pattern rather than a general-purpose filter. C3 (Non-Terminality) and C4 (Representation-Independence) test two different senses of "durability." C6 and C7 are the softest of the set and function best as flags that trigger additional scrutiny rather than gates that exclude.

---

## Counterarguments

**Circularity risk in C5 itself.** Non-Circular Definability tests whether a candidate's definition improperly references _other candidate concerns_ — but this presupposes "concern" is already a well-defined term being referenced, when the entire purpose of this discovery is to establish what "concern" means in the first place.

**Hidden assumption: binary vs. graded.** Every criterion here is phrased as a pass/fail test, which assumes "first-class concern" is a binary category. It may instead be a matter of degree, in which case a checklist returning pass/fail is itself a category error.

**Hidden assumption: the criteria are jointly sufficient.** Nothing here demonstrates that satisfying all seven _guarantees_ first-class status — only that failing any one is evidence against it.

**Unnecessary restriction:** C6 may wrongly exclude legitimately plural-only concerns.

**Overlapping criteria:** C1 and C2 substantially overlap and should be presented as one criterion with two forms, not two.

**Trap-case tests:** An obvious non-concern ("the color of the office walls") is correctly rejected by C2. A plausible impostor ("organizational resilience") fails C1/C2 correctly, appearing fully derivable as an emergent measure of other concerns functioning well. A plausible impostor artifact ("having a mission statement") is correctly caught by C4.

---

## Remaining Uncertainties

- Whether "first-class concern" is a binary category or a matter of degree.
- Whether C6's false-negative risk (plurality-only concerns) is fixable or a fundamental limit.
- Whether C1/C2 should be formally merged.
- Whether a criterion is missing that would catch "value" or "principle" impostors more directly.
- Whether these criteria were reverse-engineered from D-001/D-001A's known failures rather than derived independently, making them well-tuned to catch known failure modes and untested against unknown ones.

---

## Recommended Minimal Criteria Set

Framed as **necessary-condition filters that reject, not confirm** — surviving all of them is evidence a candidate deserves further consideration, not proof it is first-class.

**Hard gates (a candidate failing any one should not be treated as first-class):**

1. **Independent Failure Mode** (absorbing Irreducibility as its underlying justification — C1/C2 merged)
2. **Non-Terminality**
3. **Representation-Independence**
4. **Non-Circular Definability** (applied specifically between any two candidates that appear related)

**Soft calibration signals (adjust confidence; absence alone should not disqualify):** 5. **Minimal-Instantiation Presence** — flags candidates for scrutiny rather than auto-rejecting. 6. **Independent Corroboration** — raises confidence when present; absence is expected and acceptable for genuinely novel candidates.
