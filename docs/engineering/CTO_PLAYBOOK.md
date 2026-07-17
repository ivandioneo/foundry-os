---
Document ID: ENGINEERING-003
Title: CTO Playbook
Version: 1.0.0
Status: Approved
Owner: CTO
Contributors: Founder
Classification: Engineering Standard
Last Updated: 2026-07-17
---

# CTO Playbook

**Document ID:** ENGINEERING-003

**Version:** 1.0.0

**Status:** Approved

**Owner:** CTO

**Contributors:** Founder

**Classification:** Engineering Standard

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Engineering Principles](#2-engineering-principles)
3. [Team Roles](#3-team-roles)
4. [Story Lifecycle](#4-story-lifecycle)
5. [Story Template](#5-story-template)
6. [Canonical Inputs](#6-canonical-inputs)
7. [Scope Discipline](#7-scope-discipline)
8. [Verification Standards](#8-verification-standards)
9. [Completion Report](#9-completion-report)
10. [CTO Review](#10-cto-review)
11. [Founder Approval](#11-founder-approval)
12. [Merge Policy](#12-merge-policy)
13. [Change Management](#13-change-management)
14. [Appendix](#14-appendix)

---

## 1. Purpose

**Why the Playbook exists.** Foundry's engineering workflow has proven effective in
practice, but until now it has relied on long, repetitive implementation prompts —
every request re-explained governance, verification, and reporting expectations from
scratch. The Playbook exists so that stops: from adoption forward, an implementation
request can simply reference this document instead of restating its process.

**Relationship to the Manifesto.** `docs/manifesto/MANIFESTO.md` (MANIFESTO-001)
defines _why_ Foundry exists and what it believes. This Playbook defines _how_
engineering work gets done in service of that mission. The Playbook does not restate,
reinterpret, or extend the Manifesto's mission, vision, or beliefs.

**Relationship to Engineering Governance.** `CLAUDE.md` is Foundry's Engineering
Constitution: non-negotiable rules, architecture, standards, and AI operating rules.
`AGENTS.md` defines how agents collaborate and where authority sits. This Playbook
sits operationally beneath both — it is the repeatable workflow through which their
rules are applied, story by story. It does not override or duplicate them. **Where
this Playbook and `CLAUDE.md`/`AGENTS.md` disagree, `CLAUDE.md`/`AGENTS.md` win**
(consistent with `CLAUDE.md` §2).

## 2. Engineering Principles

- **Evidence over assertion.** A claim of correctness must be backed by something
  checkable — a diff, a command's actual output, a passing check — not simply stated.
- **Canonical before implementation.** Implementation does not begin until the
  canonical source (an approved specification, approved content, or an accepted ADR)
  exists. Nothing approved is recreated from memory or inferred.
- **Scope discipline.** Implement exactly what was approved — nothing more, nothing
  less.
- **Preserve approved intent.** When implementing or publishing already-approved
  content, meaning is preserved exactly. Formatting and readability may improve;
  substance may not change.
- **Small, reversible changes.** Prefer increments that are easy to review and easy
  to undo over large, hard-to-reverse batches.
- **Documentation is part of the product.** A change is not finished until the
  documentation around it reflects the change.

These principles guide engineering behavior across every stage of the Story
Lifecycle (§4); they are not a separate checklist to satisfy once and forget.

## 3. Team Roles

| Role                         | Responsible for                                                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Founder**                  | Vision · Business direction · Final approval · Prioritization                                                 |
| **CTO**                      | Product architecture · Technical architecture · Story creation · Engineering standards · Reviews · Acceptance |
| **Senior Software Engineer** | Implementation · Testing · Documentation · Verification · Completion reports                                  |

This table states operational responsibility only. Full role authority, escalation
paths, and conflict resolution are defined in `CLAUDE.md` §1 and `AGENTS.md` §3–§11 —
this Playbook does not redefine them.

## 4. Story Lifecycle

```
Idea
  ↓
Discovery
  ↓
CTO Specification
  ↓
Founder Approval
  ↓
Implementation
  ↓
Completion Report
  ↓
CTO Review
  ↓
Founder Merge
  ↓
Done
```

- **Idea** — an unscoped need or opportunity is noticed. Not yet actionable.
- **Discovery** — the idea is explored just enough to know whether it is worth
  specifying: is it a real problem, a real event, a real gap — not a theoretical one.
- **CTO Specification** — the CTO turns the idea into a scoped, written
  specification (§5): objective, scope, constraints, acceptance criteria. This
  specification is the canonical input implementation will follow (§6).
- **Founder Approval** — the Founder reviews and approves the specification before
  any implementation begins.
- **Implementation** — the Senior Software Engineer implements exactly what the
  specification defines, following scope discipline (§7) and stopping to ask rather
  than assuming when something required is missing or ambiguous.
- **Completion Report** — the engineer reports what was done, how it was verified,
  and what was observed but not acted on (§9).
- **CTO Review** — the CTO checks the completion report and the actual change
  against the specification (§10).
- **Founder Merge** — the Founder gives final approval and the change is merged
  (§11, §12).
- **Done** — the story is closed. Its outcome — decisions made, lessons learned —
  becomes part of the repository's permanent record, not just conversation history.

## 5. Story Template

Every specification, regardless of size, states at minimum:

| Field                   | Purpose                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| **Story ID**            | Unique identifier for traceability (e.g. `STORY-004`, `ENGINEERING-003`).                |
| **Status**              | Where the story currently sits in the Lifecycle (§4).                                    |
| **Background**          | Why this story exists now — the context a reader needs before the objective makes sense. |
| **Objective**           | What this story delivers, stated plainly.                                                |
| **Scope**               | Exactly what is included.                                                                |
| **Constraints**         | What must not be done, touched, or assumed.                                              |
| **Acceptance Criteria** | How "done" is checked, independent of who checks it.                                     |
| **Deliverables**        | What artifacts this story leaves behind.                                                 |

A more detailed, GitHub-Issue-oriented variant of this template exists at
`docs/engineering/STORY_TEMPLATE.md`, adding fields (Epic linkage, Technical
Constraints, Verification, Definition of Done) suited to stories that begin as
GitHub Issues. This section defines the minimum fields any specification must
contain regardless of format; it does not replace that template.

## 6. Canonical Inputs

**Canonical before implementation.** Implementation cannot begin until the canonical
source exists — an approved specification, approved content (e.g. a Manifesto
section), or an accepted ADR.

- Engineers must not recreate, paraphrase from memory, or infer approved content on
  the assumption that it is "close enough."
- If a specification references canonical content that was not actually provided —
  including a literal placeholder left unfilled — the engineer must **stop and ask**
  for the real content rather than draft a substitute.
- This rule applies even under time pressure or when the gap seems small. A
  fabricated stand-in for approved content is a worse outcome than a delayed story.

## 7. Scope Discipline

- Stay within the scope stated in the specification (§5) — no more, no less.
- If an improvement, risk, or gap is noticed outside that scope, record it as an
  **Observation** in the Completion Report (§9). Do not act on it unprompted.
- Never expand requirements to fill a gap. If a requirement appears to be missing,
  ambiguous, or in conflict with something else, stop and ask (§6) rather than
  deciding unilaterally.

## 8. Verification Standards

Every implementation includes objective evidence where practical, preferred over
unverified statements:

- **Diff verification** — the actual change, shown, not described.
- **Formatting validation** — the repository's formatting tooling run and its result
  reported.
- **Test execution** — relevant tests or verification commands actually run.
- **Repository scope check** — confirmation of exactly what changed, nothing more.

State plainly which claims are backed by an executed check versus which are correct
by inspection only — never present an inspection-only claim as if it were verified
by execution.

## 9. Completion Report

Every story ends with a Completion Report in this structure:

1. **Summary** — what was done, in a few sentences.
2. **Files changed** — created, modified, and (if any) deleted.
3. **Verification** — the evidence from §8, and what was _not_ verified.
4. **Observations** — anything noticed outside scope (§7), not acted on.
5. **Risks** — what could go wrong, or what remains fragile.
6. **Confirmation of scope** — an explicit statement that only the approved scope
   was implemented.
7. **Ready for review** — a plain statement that the story is ready for CTO Review
   (§10).

## 10. CTO Review

The CTO checks the Completion Report (§9) and the actual change against the
specification (§5), covering:

- **Scope** — does the change match what was approved, no more and no less?
- **Quality** — is the work sound, maintainable, and consistent with engineering
  principles (§2)?
- **Semantic preservation** — where canonical content (§6) was implemented, is its
  meaning intact?
- **Documentation** — was documentation updated where the change required it?
- **Verification** — is the evidence in §9 actually sufficient, and actually true?
- **Repository consistency** — does the change fit cleanly with everything else in
  the repository, or does it introduce drift?

## 11. Founder Approval

Once CTO Review (§10) is satisfied, the Founder decides:

- **Approve** — the story proceeds to merge (§12).
- **Request changes** — the story returns to Implementation (§4) with specific,
  written feedback.
- **Reject** — the story does not proceed; its outcome and reasoning are still
  recorded (§4, Done) so the decision itself becomes institutional knowledge.

## 12. Merge Policy

Nothing is merged until, in order:

1. **Implementation is complete** — every acceptance criterion in the specification
   (§5) is satisfied.
2. **CTO approval** — CTO Review (§10) has passed.
3. **Founder approval** — the Founder has explicitly approved (§11).

This mirrors — and does not replace — the Git workflow already defined in
`CLAUDE.md` §19: protected `main`, reviewed PRs, no unapproved pushes.

## 13. Change Management

This Playbook is itself governed. A change to it requires:

1. **Founder approval** — no section of this Playbook changes without it.
2. **Version increment** — semantic versioning, recorded in the metadata block at
   the top of this document.
3. **Changelog entry** — recorded in `CHANGELOG.md` when the change is material.

This mirrors the Amendment Process already defined in `CLAUDE.md` §25 and the Change
Control pattern established in `docs/manifesto/MANIFESTO.md`; it does not define a
competing process.

## 14. Appendix

Reusable, fillable templates referenced throughout this Playbook.

### Story

```
Story ID:
Status:
Background:
Objective:
Scope:
Constraints:
Acceptance Criteria:
Deliverables:
```

### Completion Report

```
Summary:
Files changed:
Verification:
Observations:
Risks:
Confirmation of scope:
Ready for review:
```

### CTO Review

```
Scope:
Quality:
Semantic preservation:
Documentation:
Verification:
Repository consistency:
Decision:
```

### Founder Approval

```
Decision: Approve / Request changes / Reject
Notes:
Date:
```
