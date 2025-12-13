import { dividir } from '../dividir';

describe('dividir', () => {
  it('debe dividir dos números positivos correctamente', async () => {
    expect(await dividir(6, 3)).toBe(2);
  });
  
  it('debe dividir un número positivo entre uno negativo', async () => {
    expect(await dividir(6, -3)).toBe(-2);
  });

  it('debe dividir números negativos correctamente', async () => {
    expect(await dividir(-6, -3)).toBe(2);
  });
  
  it('debe retornar el mismo número al dividir por uno', async () => {
    expect(await dividir(5, 1)).toBe(5);
  });

  it('debe manejar división con decimales', async () => {
    expect(await dividir(7, 2)).toBeCloseTo(3.5);
  });

  it('debe manejar división de decimales', async () => {
    expect(await dividir(7.5, 2.5)).toBeCloseTo(3);
  });

  it('debe lanzar error al dividir por cero', async () => {
    await expect(dividir(5, 0)).rejects.toThrow('No se puede dividir por cero');
  });

  it('debe retornar cero al dividir cero entre un número', async () => {
    expect(await dividir(0, 5)).toBe(0);
    });
});

