'use server';

/**
 * Suma dos números
 * @param a - Primer número
 * @param b - Segundo número
 * @returns La suma de a y b
 */
export async function sumar(a: number, b: number): Promise<number> {
  return a + b;
}

