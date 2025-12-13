import { restar } from '../restar';

describe('restar', () => {
  it('debe restar dos números positivos correctamente', async () => {
    expect(await restar(5, 3)).toBe(2);
  });

  it('debe restar números negativos correctamente', async () => {
    expect(await restar(-5, -3)).toBe(-2);
  });

  it('debe restar un número negativo (sumar)', async () => {
    expect(await restar(5, -3)).toBe(8);
  });

  it('debe retornar el mismo número al restar cero', async () => {
    expect(await restar(5, 0)).toBe(5);
  });

  it('debe retornar el negativo al restar de cero', async () => {
    expect(await restar(0, 5)).toBe(-5);
  });

  it('debe manejar números decimales', async () => {
    expect(await restar(5.5, 2.3)).toBeCloseTo(3.2);
  });
});

