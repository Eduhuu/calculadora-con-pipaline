import { dividir } from '../dividir';

describe('dividir', () => {
  it('debe dividir dos números positivos correctamente', async () => {
    expect(await dividir(6, 3)).toBe(2);
  });
  
  it('debe dividir un número positivo entre uno negativo', async () => {
    expect(await dividir(6, -3)).toBe(-2);
  });
});

