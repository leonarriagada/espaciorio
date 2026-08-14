/**
 * Utility helper functions for Espacio Río digital experience
 */

export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
