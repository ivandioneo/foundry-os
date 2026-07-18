# Founder Decision FD-001
## First-Class Organizational Concerns

---

## 1. Title

**FD-001 — Adoption of Foundry's Current Working Concern Model**

---

## 2. Status

**Provisional.**

This decision applies D-000 (adopted under FD-000, validated through initial application in D-001R). D-000's own recorded limitations, and unresolved counter-evidence for two of the merge conclusions below, are documented in D-001R and not reproduced here. On that basis, this decision is recorded as the currently adopted working concern model rather than a final one, and remains subject to the reversal conditions in §9.

---

## 3. Decision

Foundry adopts the following as its **currently adopted working concern model** for first-class organizational concerns, effective immediately:

- **Retained as first-class:** Memory, Distinction, Judgment, Reality-Testing, Value Definition.
- **Merged into Judgment:** Correction, Renewal. Judgment is redefined to include revision of prior commitments and of its own methods.
- **Reclassified:** Accountability is not first-class at Foundry's current organizational scale; it is a scale-triggered specialization of Judgment.

This model supersedes the eight-item candidate list in D-001. D-000 is adopted, without modification, as the standing method for evaluating any future candidate concern.

**Scope:** This decision governs Foundry's internal working ontology of organizational concerns and how future Discovery Reports evaluate new candidates against it. It does not decide technical architecture, product features, repository structure, or any governance document change (§7).

---

## 4. Evidence

- **D-001** proposed the original eight-candidate set using DIL/DIM as reasoning lenses, without evaluation against explicit criteria.
- **D-001A** self-falsified D-001, found four candidates structurally suspect, and concluded Foundry lacked explicit admission criteria — motivating D-000.
- **D-001R** applied D-000's gates to all eight candidates, producing the gate-level verdicts recorded in §6.

Full reasoning, constructed scenarios, and recorded counter-evidence are documented in D-001R and are not reproduced here. D-001A's flagged "Trust/Cooperation" candidate was never evaluated under D-000 and is not part of this decision (§7).

---

## 5. Decision Sufficiency

Sufficient for this decision's scope; not sufficient for broader scope.

The evidence supports a provisional, bounded, operational decision: every candidate was passed through the same fixed, inspectable D-000 test rather than adopted by narrative persuasiveness, and unresolved tensions (the Correction/Renewal counter-evidence, Accountability's undefined scale threshold) were recorded rather than silently closed. That is sufficient for a decision that needs to be bounded and falsifiable, not exhaustively proven.

It is not sufficient for broader scope: this model is not final or constitutional (D-000's own limitations are unaddressed, per D-001R), Accountability's scale threshold is unresolved, and "Trust" was never tested.

---

## 6. Currently Adopted Concern Model

Full gate-by-gate evidence for each classification is recorded in D-001R and not reproduced here.

| Concern | Status | Basis |
|---|---|---|
| Memory | Retained | Passes all D-000 gates (D-001R) |
| Distinction | Retained | Passes all D-000 gates (D-001R) |
| Judgment | Retained (broadened) | Passes all D-000 gates; absorbs Correction, Renewal (D-001R) |
| Reality-Testing | Retained | Passes all D-000 gates (D-001R) |
| Value Definition | Retained | Passes all D-000 gates (D-001R) |
| Correction | Merged into Judgment | Fails Independent Failure Mode and Conceptual Independence gates (D-001R) |
| Renewal | Merged into Judgment | Fails the same two gates (D-001R) |
| Accountability | Reclassified | Scale-conditional gate results (D-001R) |

---

## 7. Explicit Non-Decisions

- The scale threshold at which Accountability becomes first-class is not decided.
- Whether "Trust/Cooperation" should be formally evaluated as a new candidate under D-000 is not decided.
- The unresolved counter-evidence for the Correction and Renewal merges is not resolved — the merges are adopted operationally; the theoretical tension is left open.
- No changes to D-000 are decided.
- No changes to Foundry's governance documents (`CLAUDE.md`, `AGENTS.md`, `CTO_PLAYBOOK.md`) are decided. FD-001 is a working-framework decision, not a constitutional one.
- No dependency or relationship model among the five retained concerns is decided.
- No repository structure, file placement, or documentation changes are decided.
- No new candidate concerns are introduced.

---

## 8. Risks

- **Premature closure.** An adopted model can suppress the kind of adversarial re-examination that produced it.
- **Undecided tension treated as settled.** Two retained items depend on merges carrying unresolved counter-evidence.
- **Scale-threshold ambiguity.** Accountability's reclassification depends on an undefined threshold.
- **Known gap left open.** "Trust/Cooperation" was flagged as a possible gap and was never tested.
- **Precedent for self-generated frameworks.** This decision is the first built entirely on an internally-generated, internally-tested evaluation framework.

---

## 9. Reversal Conditions

FD-001 should be reopened if any of the following occurs:

- A future Discovery Report cannot classify a genuinely new candidate concern under the adopted model without a forced or contradictory fit.
- Accountability's reclassification proves miscalibrated in practice.
- The Correction/Renewal merge is contradicted by observed practice.
- A competing model is produced that satisfies D-000's gates at least as well while requiring fewer merges/reclassifications, or that resolves the currently unresolved counter-evidence.
- D-000 itself is revised or replaced.
- "Trust/Cooperation" is formally evaluated under D-000 and passes its hard gates.

---

## 10. Deferred Work

- **D-002** — investigates the relationships among the adopted first-class concerns.
- Formal evaluation of "Trust/Cooperation" under D-000 — not scheduled; sequence undetermined.
- Accountability re-evaluation once Foundry's organizational scale changes.
- A future discovery into D-000's own recorded limitations.
- Repository integration of the Discovery chain (D-000, D-001, D-001A, D-001R, FD-000, FD-001). The repository should be updated to reflect this Founder Decision so the currently adopted working concern model becomes the operational reference for future work.

---

## 11. Founder Approval

**Approved with Conditions**, following CTO Review and independent Co-CTO Review.

Conditions:
1. Status remains **Provisional** (§2).
2. The reversal conditions in §9 are binding triggers for reopening this decision.
3. The repository is updated promptly to reflect this Founder Decision, so the currently adopted working concern model is operationally available as the reference for future Discovery work and evaluation.

---

## Publication Notes

Editorial changes applied for publication, following Co-CTO review. No architectural, evidentiary, or classification changes were made.

| Change | Reason |
|---|---|
| Title and Decision (§3) reworded to "currently adopted working concern model" throughout | Consistent provisional language, avoiding wording that implies permanence |
| §2 Status shortened: D-000's four recorded limitations are referenced (D-001R) rather than listed | Reduce duplicated reasoning; detailed analysis belongs in the Discovery record |
| §3 gained an explicit **Scope** clause | The Founder Decision should visibly record Scope as primary content, not leave it implicit in §7 alone |
| §4 Evidence compressed to one-line summaries per discovery, with a pointer to D-001R for full reasoning | Discovery remains the home of detailed analysis |
| §6 renamed "Currently Adopted Concern Model"; rationale column shortened to short gate citations, with a pointer to D-001R | Reduce duplicated reasoning |
| §5 tightened for length; no content removed | Reduce duplicated reasoning |
| §11 retitled from "Recommendation to Founder" to "Founder Approval"; reframed from a prospective recommendation to a record of the completed approval; removed a justification paragraph that duplicated §5 and §8 | Reflects that the governance cycle (CTO Review, Co-CTO Review, Founder Approval) is complete |
| Confirmed no remaining language implies repository commits or documentation create organizational authority (§10, §11) | Repository artifacts record Founder Decisions; they do not establish authority |
| No new section, artifact class, or reference to "Independent Review" as a formal artifact was added | Independent review remains a governance practice, not a new artifact class |

§§7, 8, 9, 10 (Non-Decisions, Risks, Reversal Conditions, Deferred Work) are unchanged in substance from the prior editorial version.
