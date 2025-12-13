import { multiplicar } from '../multiplicar';

describe('multiplicar', () => {
  it('debe multiplicar dos números positivos correctamente', async () => {
    expect(await multiplicar(2, 3)).toBe(6);
  });

  it('debe multiplicar números negativos correctamente', async () => {
    expect(await multiplicar(-2, -3)).toBe(6);
  });

  it('debe multiplicar un número positivo y uno negativo', async () => {
    expect(await multiplicar(5, -3)).toBe(-15);
  });

  it('debe retornar cero al multiplicar por cero', async () => {
    expect(await multiplicar(5, 0)).toBe(0);
    expect(await multiplicar(0, 5)).toBe(0);
  });

  it('debe retornar el mismo número al multiplicar por uno', async () => {
    expect(await multiplicar(5, 1)).toBe(5);
    expect(await multiplicar(1, 5)).toBe(5);
  });

  it('debe manejar números decimales', async () => {
    expect(await multiplicar(2.5, 4)).toBeCloseTo(10);
  });

  it('debe manejar multiplicación de decimales', async () => {
    expect(await multiplicar(1.5, 2.5)).toBeCloseTo(3.75);
  });
});

