/**
 * Shared UI primitives for the Foundry monorepo.
 * Only framework-agnostic utilities live here today; components arrive with feature stories.
 */

type ClassValue = string | false | null | undefined;

/** Join truthy class names into a single, trimmed className string. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter((value): value is string => Boolean(value)).join(" ");
}
