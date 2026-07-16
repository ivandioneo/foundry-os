# AI Development Workflow

This document operationalizes `CLAUDE.md` §18 (Task Execution Workflow) and
`AGENTS.md` §5/§9 (Communication Protocol, Collaboration Workflow) into a concrete,
repeatable sequence for implementing a single Story. It does not redefine
governance — where this document and `CLAUDE.md`/`AGENTS.md` conflict, those win
(`CLAUDE.md` §2).

## Preconditions

Before implementation starts, the Story must satisfy
`docs/engineering/DEFINITION_OF_READY.md`. If it does not, stop and escalate
(`AGENTS.md` §11) rather than beginning work.

## Workflow

1. **Onboard.** Read, in order: `CLAUDE.md` → `AGENTS.md` → `CONTRIBUTING.md` →
   `SECURITY.md` → the relevant `docs/` → the assigned GitHub Issue
   (`CLAUDE.md` §18).
2. **Confirm scope.** Restate the objective, in-scope, and out-of-scope from the
   Issue. If requirements conflict or anything is ambiguous, **stop and ask** —
   never guess (`CLAUDE.md` §22, `AGENTS.md` §7).
3. **Branch.** One typed branch per Story off `main`
   (`feature/`, `fix/`, `refactor/`, `security/`, `docs/`, `test/` —
   `CONTRIBUTING.md`, `CLAUDE.md` §19).
4. **Implement only the assigned Story.** No parallel tasks, no unrequested
   refactors, no architecture changes outside an Accepted ADR
   (`CLAUDE.md` §16, §22; `AGENTS.md` §6).
5. **Verify.** Run the commands the Story specifies — typically `pnpm install`,
   `pnpm lint`, `pnpm typecheck`, `pnpm build`, plus tests where applicable. Report
   only commands actually executed, and distinguish **verified by execution** from
   **correct by inspection** (`CLAUDE.md` §23).
6. **Document.** Update any documentation or ADR the change affects
   (`CLAUDE.md` §14). A change that alters behavior is not done until its docs are
   updated.
7. **Report.** Produce a completion summary: files changed, architectural
   decisions, commands executed, verification performed, known limitations,
   suggested next task (`CLAUDE.md` §18 step 7).
8. **Stop.** Wait for CTO review and Founder approval before merge
   (`AGENTS.md` §9). Never continue automatically into the next Story
   (`CLAUDE.md` §16).

## Escalation

Use the escalation matrix in `AGENTS.md` §11. When in doubt, escalate up — never
guess (`CLAUDE.md` §22).

## Traceability

Every Story maps to one Issue, one branch, one PR (`AGENTS.md` §5, §6). If a step
cannot be traced to a repository artifact, it did not happen (`AGENTS.md` §5).

## Related documents

- `docs/engineering/DEFINITION_OF_READY.md` — gate before this workflow starts
- `docs/engineering/STORY_TEMPLATE.md` — the shape of the Issue this workflow executes
- `docs/engineering/RELEASE_PROCESS.md` — what happens after a Story merges
- `docs/adr/README.md` — required when implementation would otherwise contradict or
  extend architecture
