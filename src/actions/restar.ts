'use server';

/**
 * Resta dos números
 * @param a - Primer número (minuendo)
 * @param b - Segundo número (sustraendo)
 * @returns La resta de a - b
 */
export async function restar(a: number, b: number): Promise<number> {
  return a - b;
}

