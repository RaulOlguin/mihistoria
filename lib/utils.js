// lib/utils.js
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases CSS condicionalmente y optimiza para Tailwind CSS.
 * @param  {...any} inputs - Clases a combinar.
 * @returns {string} Clase CSS final combinada y optimizada.
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
