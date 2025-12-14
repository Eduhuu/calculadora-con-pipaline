import { dividir } from '../dividir';
import { ERROR_MESSAGES } from '../../../constants/errors';

describe('dividir', () => {
  it('debe dividir dos números positivos correctamente', async () => {
    const {resultado, error} = await dividir(6, 3);
    expect(error).toBeNull();
    expect(resultado).toBe(2);
  });
  
  it('debe dividir un número positivo entre uno negativo', async () => {
    const {resultado, error} = await dividir(6, -3);
    expect(error).toBeNull();
    expect(resultado).toBe(-2);
  });

  it('debe dividir números negativos correctamente', async () => {
    const {resultado, error} = await dividir(-6, -3);
    expect(error).toBeNull();
    expect(resultado).toBe(2);
  });
  
  it('debe retornar el mismo número al dividir por uno', async () => {
    const {resultado, error} = await dividir(5, 1);
    expect(error).toBeNull();
    expect(resultado).toBe(5);
  });

  it('debe manejar división con decimales', async () => {
    const {resultado, error} = await dividir(7, 2);
    expect(error).toBeNull();
    expect(resultado).toBeCloseTo(3.5);
  });

  it('debe manejar división de decimales', async () => {
    const {resultado, error} = await dividir(7.5, 2.5);
    expect(error).toBeNull();
    expect(resultado).toBeCloseTo(3);
  });

  it('debe lanzar error al dividir por cero', async () => {
    const {resultado, error} = await dividir(5, 0);
    expect(error).toBe(ERROR_MESSAGES.DIVISION_BY_ZERO);
    expect(resultado).toBeNull();
  });

  it('debe retornar cero al dividir cero entre un número', async () => {
    const {resultado, error} = await dividir(0, 5);
    expect(error).toBeNull();
    expect(resultado).toBe(0);
    });
});

