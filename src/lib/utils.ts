import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind classes with clsx and twMerge.
 * Prevents class collision and allows dynamic conditional class application.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
