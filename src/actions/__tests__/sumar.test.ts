import { sumar } from '../sumar';

describe('sumar', () => {
  it('debe sumar dos números positivos correctamente', async () => {
    expect(await sumar(2, 3)).toBe(5);
  });

  it('debe sumar números negativos correctamente', async () => {
    expect(await sumar(-2, -3)).toBe(-5);
  });

  it('debe sumar un número positivo y uno negativo', async () => {
    expect(await sumar(5, -3)).toBe(2);
  });

  it('debe retornar el mismo número al sumar con cero', async () => {
    expect(await sumar(5, 0)).toBe(5);
    expect(await sumar(0, 5)).toBe(5);
  });

  it('debe manejar números decimales', async () => {
    expect(await sumar(1.5, 2.3)).toBeCloseTo(3.8);
  });
});

