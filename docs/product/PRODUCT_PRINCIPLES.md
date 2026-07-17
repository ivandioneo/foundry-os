---
Document Type: Product Documentation Framework
Status: Approved
Owner: Founder
Contributors: CTO
Last Updated: 2026-07-17
---

# Product Principles

Every principle on this page is quoted or drawn directly from an already-approved
canonical source — primarily [`docs/manifesto/MANIFESTO.md`](../manifesto/MANIFESTO.md)
(MANIFESTO-001), with supporting citations to `CLAUDE.md`. Nothing here is new;
this document organizes existing, approved beliefs for product design use. Where
the Manifesto is the canonical home for a belief, treat this page as a pointer to
it, not a replacement for it (`CLAUDE.md` §14 — reference, don't duplicate).

## The First Principle

> **Does this increase founder leverage?**
>
> If the answer is yes, it belongs in Foundry. If the answer is no, it belongs
> somewhere else.

— [Our First Principle](../manifesto/MANIFESTO.md#our-first-principle), MANIFESTO-001

Every product decision — including every architecture document and PDR in this
framework — is ultimately answerable to this question.

## Our Beliefs

The six beliefs below are quoted verbatim from
[Our Beliefs](../manifesto/MANIFESTO.md#our-beliefs), MANIFESTO-001.

### Founders Create Value

> Technology exists to amplify founders, not replace them. Human judgment,
> creativity, and conviction remain the foundation of every successful business.

### AI Is an Accelerator

> Artificial Intelligence is not our product. AI is one of the tools we use to
> increase founder capability. As technology evolves, Foundry evolves with it.
> Our mission remains constant.

### Systems Outperform Heroics

> Great companies are not built through endless hustle. They are built through
> repeatable systems. If something must be done repeatedly, it should become a
> process. If a process can be automated, it should be automated.

### Infrastructure Should Disappear

> Founders should spend their time building businesses—not configuring servers,
> deployment pipelines, authentication systems, monitoring, or backups.
> Complexity belongs inside Foundry, not on the founder's shoulders.

### Every Output Is an Asset

> Everything created inside Foundry should have lasting value. Ideas become
> specifications. Specifications become architecture. Architecture becomes
> software. Software becomes businesses. Businesses become assets. Nothing
> should be disposable.

### Build Once. Reuse Forever.

> Knowledge should compound. Every improvement should make future businesses
> easier to build. Every lesson should become part of the platform. Foundry
> should become smarter with every company created.

## Our Product Philosophy

> Foundry does not sell software. Foundry helps founders create and operate
> enduring software businesses. Software is one component of that journey. The
> true product is founder leverage.

— [Our Product Philosophy](../manifesto/MANIFESTO.md#our-product-philosophy), MANIFESTO-001

## What We Will Never Become

> Foundry will never become: a generic AI chatbot, a low-code platform, a
> website builder, a dashboard framework, a collection of disconnected
> productivity tools, or software built because it is fashionable. Every
> feature must contribute to building and operating better businesses.

— [What We Will Never Become](../manifesto/MANIFESTO.md#what-we-will-never-become), MANIFESTO-001

## Related engineering principles

`CLAUDE.md` §6 (Founder Principles) and §5 (Engineering Philosophy) apply the
same beliefs to engineering decisions specifically — long-term ownership,
self-hostability, vendor independence, incremental delivery, avoiding
unnecessary complexity. This document does not restate them; see `CLAUDE.md`
directly.

## How this document is used

Every architecture document in [`architecture/`](./architecture/) and every PDR
in [`pdr/`](./pdr/) references the specific principle(s) above that motivate it,
under "Related Product Principles." A PDR that cannot point to a principle here
has not yet justified itself.

## References

- [`docs/manifesto/MANIFESTO.md`](../manifesto/MANIFESTO.md) — canonical source (MANIFESTO-001)
- [`VISION.md`](./VISION.md)
- [`README.md`](./README.md)
