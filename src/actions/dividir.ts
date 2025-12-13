'use server';

/**
 * Divide dos números
 * @param a - Dividendo
 * @param b - Divisor
 * @returns El cociente de a / b
 * @throws Error si el divisor es cero
 */
export async function dividir(a: number, b: number): Promise<number> {
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  if (a === 0) {
    return 0;
  }
    return a / b;
}

