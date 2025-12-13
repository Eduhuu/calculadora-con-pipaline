'use server';

/**
 * Multiplica dos números
 * @param a - Primer número
 * @param b - Segundo número
 * @returns El producto de a * b
 */
export async function multiplicar(a: number, b: number): Promise<number> {
  return a * b;
}

