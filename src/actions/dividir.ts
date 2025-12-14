'use server';

import { ERROR_MESSAGES } from "../../constants/errors";

/**
 * Divide dos números
 * @param a - Dividendo
 * @param b - Divisor
 * @returns El cociente de a / b
 * @throws Error si el divisor es cero
 */
export async function dividir(a: number, b: number): Promise<{resultado: number | null, error: string | null}> {
  if (b === 0) {
    return {resultado: null, error: ERROR_MESSAGES.DIVISION_BY_ZERO};
  }
  if (a === 0) {
    return {resultado: 0, error: null};
  }
    return {resultado: a / b, error: null};
}

