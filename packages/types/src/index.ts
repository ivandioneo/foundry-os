/**
 * Foundational, framework-agnostic types shared across the Foundry monorepo.
 * No domain or business types live here yet — those arrive with feature stories.
 */

/** Nominal ("branded") type helper — e.g. `type UserId = Brand<string, "UserId">`. */
export type Brand<T, B extends string> = T & { readonly __brand: B };

/** A value that may be `null`. */
export type Nullable<T> = T | null;

/** Flattens an intersection into a single, readable object type. */
export type Prettify<T> = { [K in keyof T]: T[K] } & {};
