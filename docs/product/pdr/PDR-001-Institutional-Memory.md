# PDR-001: Institutional Memory

- Status: Approved
- Decision ID: PDR-001
- Approved: Founder, 2026-07-20
- Related Product Principles: [`../../manifesto/MANIFESTO.md`](../../manifesto/MANIFESTO.md) — _Every Output Is an Asset_, _Build Once. Reuse Forever._, _Our First Principle_; [`../PRODUCT_PRINCIPLES.md`](../PRODUCT_PRINCIPLES.md)
- Related Architecture Document: None. The components that realize this obligation are future Product Decisions (see _Explicit Non-Decisions_).

## Executive Summary

> **Foundry shall retain and compound what it produces, so that its work accumulates as durable institutional memory rather than dissipating as disposable output.**

## Decision

Foundry shall retain what it produces and cause it to compound.

The results of the work done within Foundry shall accumulate as **durable institutional memory**. They shall be kept, shall remain available to future work, and shall make future work progressively easier.

This is a standing obligation on Foundry as a whole. It commits Foundry to accumulate; it does not commit how accumulation is structured, what is accumulated, or which components realize it.

## Context

Foundry's preparatory architectural phase — the Discovery corpus (D-002 through D-008) and the exercises that followed it — is complete. Discovery established what Foundry may legitimately conclude; a Product Decision establishes what Foundry shall deliberately become. Having exhausted preparation, the Founder exercises that authority here for the first time. This document records that act.

## Rationale

This commitment is sufficient as Foundry's first Product Decision because it fixes the one condition every later Product Decision presupposes — that Foundry keeps and compounds its work — and fixes nothing beyond it. It is foundational rather than comprehensive by design: it establishes the ground on which subsequent architecture is built, and leaves that architecture open.

## Alternatives Considered

Other admissible possibilities were identified and weighed during preparation — among them the qualities the accumulated memory should hold, the structures it might take, the uses it enables, and the components that might realize it. Each was found to presuppose this commitment rather than to precede it. The architectural deliberation is concluded; it is recorded here only so the institutional record shows that alternatives existed and were considered.

## Consequences

### Immediate

- Foundry's product architecture has a binding constitutional root: Foundry is committed to being durable institutional memory.
- Every subsequent Product Decision shall be consistent with retention and compounding. No later decision may render Foundry's work disposable or non-cumulative.
- The First Principle is served directly: compounding memory is the means by which Foundry multiplies a founder's capability.

### Future

The following inherit from this commitment and are reserved to their own Product Decisions:

- how the memory is realized — the component(s) that hold it;
- what qualities the memory must guarantee — including provenance/attribution, integrity/verification, and interlinking;
- what is retained and in what forms, and how work is deposited into and drawn from the memory, organized, and accessed.

## Explicit Non-Decisions

This section is binding. PDR-001 does not decide, and shall not be read as deciding:

- what "knowledge" is, or its forms or taxonomy;
- that any particular component exists, or what it is;
- the specific properties the memory must satisfy, beyond the durability and compounding intrinsic to this commitment;
- how knowledge is produced, transformed, decided upon, or executed;
- any system, data, or implementation architecture;
- the sequence or content of any later Product Decision.

No future decision may treat any of the above as settled by PDR-001.

## Reconsideration Conditions

PDR-001 is an authoritative commitment, not an immutable truth. It shall be reconsidered if:

- coherent product architecture is shown to be buildable without retention and compounding;
- a more foundational admissible possibility is identified that this commitment should inherit from rather than precede;
- the obligation is found to bind more, or less, than the architecture requires;
- a later, well-justified Product Decision cannot be made consistent with it.

Reconsideration follows the authority that adopts it: a recorded Founder decision, with reasons. Until then, this commitment stands.

## References

- [`../../manifesto/MANIFESTO.md`](../../manifesto/MANIFESTO.md); [`../VISION.md`](../VISION.md)
- Accepted Discoveries D-005, D-006, D-007, D-008 (`../../engineering/discovery/accepted/`)
- [`PDR_TEMPLATE.md`](./PDR_TEMPLATE.md) — template this document follows
- [`../README.md`](../README.md) — Product Documentation Framework index
