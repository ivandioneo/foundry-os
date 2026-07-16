# Definition of Ready

A Story is **ready** to enter `docs/engineering/AI_DEVELOPMENT_WORKFLOW.md` only when
all of the following hold. This complements — and precedes — the Definition of Done
(`CLAUDE.md` §20).

## Criteria

- [ ] Exists as an approved GitHub Issue using `docs/engineering/STORY_TEMPLATE.md`
      (or, for an Epic, `docs/product/EPIC_TEMPLATE.md`) — `CLAUDE.md` §2.
- [ ] Objective and business value are each stated in one or two sentences.
- [ ] Scope is explicit; Out of Scope is explicit. Ambiguity here blocks
      readiness — it is not resolved during implementation (`CLAUDE.md` §22).
- [ ] Acceptance criteria are concrete and independently checkable.
- [ ] Technical constraints are identified: applicable ADRs, stack pins
      (`CLAUDE.md` §9), dependency policy (`CLAUDE.md` §10), architecture layers
      (`CLAUDE.md` §11).
- [ ] Any required architecture change is already covered by an Accepted ADR, or
      the Story explicitly proposes one — a Story must never assume undocumented
      architecture (`CLAUDE.md` §16).
- [ ] Security-relevant work states its requirements up front (`CLAUDE.md` §21),
      not as an afterthought.
- [ ] Verification commands are specified (`CLAUDE.md` §23).
- [ ] The Story has exactly one owner and does not overlap in-flight work on the
      same files (`AGENTS.md` §6).
- [ ] Dependencies on other Stories or Epics are identified and either complete or
      explicitly sequenced.
- [ ] Scope matches the current tier: the Story does not introduce Tier 1/2
      controls while the repository is at Tier 0, and does not under-scope the
      security/privacy basics that apply at every tier (`CLAUDE.md` banner, §21).

## Not ready — stop and escalate

If any criterion fails, the Story is **not ready**. Do not begin implementation and
do not guess the missing piece. Escalate per `AGENTS.md` §11 — architecture
uncertainty to the CTO; business, priority, or missing-requirement questions to the
Founder.

## Related documents

- `docs/engineering/STORY_TEMPLATE.md`
- `docs/engineering/AI_DEVELOPMENT_WORKFLOW.md`
- `docs/product/EPIC_TEMPLATE.md`
