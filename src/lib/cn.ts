/**
 * Simple className merge utility.
 * Joins truthy strings, filtering out falsy values.
 */
export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}
