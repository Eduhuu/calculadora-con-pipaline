# Desarrollo de Calculadora con TDD

## 📋 Índice
1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Proceso de Desarrollo](#proceso-de-desarrollo)
3. [Desarrollo de la Función Dividir](#desarrollo-de-la-función-dividir)
4. [Historial Completo de Commits](#historial-completo-de-commits)
5. [Resultados](#resultados)

---

## Descripción del Proyecto

Calculadora web desarrollada con Next.js, TypeScript y Jest siguiendo la metodología TDD. El proyecto implementa cuatro operaciones básicas (suma, resta, multiplicación y división) donde cada funcionalidad fue desarrollada escribiendo primero los tests y luego la implementación.

## Proceso de Desarrollo

### Estructura del Proyecto

```
src/
├── actions/
│   ├── __tests__/
│   │   ├── sumar.test.ts
│   │   ├── restar.test.ts
│   │   ├── multiplicar.test.ts
│   │   └── dividir.test.ts
│   ├── sumar.ts
│   ├── restar.ts
│   ├── multiplicar.ts
│   ├── dividir.ts
│   └── index.ts
└── components/
    └── Calculadora.tsx
```

### Tecnologías
- **Framework**: Next.js con TypeScript
- **Testing**: Jest
- **Estilo**: TailwindCSS

---

## Desarrollo de la Función Dividir

El mejor ejemplo del proceso TDD aplicado en este proyecto es la función `dividir`. A continuación se detalla cada commit del proceso:

### Commit 1: Inicialización del Proyecto
**Hash**: `cb5c707`  
**Mensaje**: "init project"

Se crea el proyecto Next.js con la estructura base y se instalan las dependencias necesarias.

### Commit 2: Creación de la Calculadora Base
**Hash**: `7a6fd59`  
**Mensaje**: "create calculator"

Se crean todas las funciones (sumar, restar, multiplicar, dividir) con sus tests correspondientes. Todas las operaciones básicas funcionan correctamente, excepto `dividir` que aún no está implementada:

```typescript
// src/actions/dividir.ts (estado inicial)
export async function dividir(a: number, b: number): Promise<number> {
    throw new Error('Funcion aun no implementada');
}
```

En este punto, el archivo de tests ya tenía múltiples casos de prueba escritos.

### 🔴 Fase RED - Commit 3
**Hash**: `e834d57`  
**Mensaje**: "first create a test to validate if division with positive numbers works"

**Acción**: Se simplifica el archivo de tests para empezar con el caso más básico: dividir dos números positivos.

```typescript
// src/actions/__tests__/dividir.test.ts
describe('dividir', () => {
  it('debe dividir dos números positivos correctamente', async () => {
    expect(await dividir(6, 3)).toBe(2);
  });
});
```
La implementación devuelve `0`:

```typescript
export async function dividir(a: number, b: number): Promise<number> {
    return 0;
}
```

**Resultado**: ❌ Test FALLA (esperado 2, recibido 0)

### 🟢🔵 Fase GREEN + Refactor - Commit 4
**Hash**: `338b973`  
**Mensaje**: "create code in service to make division with two positive intergers work"

**Acción**: Se implementa la solución más simple para hacer pasar el test.

```typescript
export async function dividir(a: number, b: number): Promise<number> {
    return a / b;
}
```

**Resultado**: ✅ Test PASA

### 🔴 Fase RED - Commit 5
**Hash**: `c0ba031`  
**Mensaje**: "add test code for division with one negative and one positive interge"

**Acción**: Se agrega un nuevo test para números negativos.

```typescript
describe('dividir', () => {
  it('debe dividir dos números positivos correctamente', async () => {
    expect(await dividir(6, 3)).toBe(2);
  });
  
  it('debe dividir un número positivo entre uno negativo', async () => {
    expect(await dividir(6, -3)).toBe(-2);
  });
});
```

**Resultado**: ✅ Ambos tests PASAN (la implementación ya maneja este caso correctamente)

### 🔴 Fase RED - Commit 6
**Hash**: `55f2572`  
**Mensaje**: "finish all tests"

**Acción**: Se agregan todos los casos de prueba restantes:

```typescript
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
```

**Resultado**: ❌ FALLA la division por 0

### 🟢🔵 Fase GREEN + REFACTOR - Commit 7
**Hash**: `af63644`  
**Mensaje**: "add code for manage all tests"

**Acción**: Se refactoriza el código para manejar todos los casos especiales.

```typescript
export async function dividir(a: number, b: number): Promise<number> {
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  if (a === 0) {
    return 0;
  }
  return a / b;
}
```

**Resultado**: ✅ Todos los tests PASAN

### Commit Final
**Hash**: `0f37e51`  
**Mensaje**: "create and integrate calculator without division function"

Se integra la función de división en el componente de la calculadora.

---

## Historial Completo de Commits

```bash
af63644 add code for manage all tests
55f2572 finish all tests
c0ba031 add test code for division with one negative and one positive interge
338b973 create code in service to make division with two positive intergers work
e834d57 first create a test to validate if division with positive numbers works
0f37e51 create and integrate calculator without division function
7a6fd59 create calculator
cb5c707 init project
```

### Resumen del Flujo de Trabajo

| Commit | Acción | Tests | Código |
|--------|--------|-------|--------|
| `e834d57` | 🔴 Crear test básico | ❌ Falla | `return 0` |
| `338b973` | 🟢 Implementar mínimo | ✅ Pasa | `return a / b` |
| `c0ba031` | 🔴 Agregar test negativos | ✅ Pasa | Sin cambios |
| `55f2572` | 🔴 Agregar todos los casos | ❌ Falla | Sin cambios |
| `af63644` | 🟢 Implementar validaciones | ✅ Pasa | Validación completa |

---

## Resultados

### Cobertura de Tests

**Función Sumar** (5 tests):
- Números positivos
- Números negativos
- Positivo + negativo
- Suma con cero
- Números decimales

**Función Restar** (6 tests):
- Números positivos
- Números negativos
- Resta de negativo
- Resta con cero
- Resta de cero
- Números decimales

**Función Multiplicar** (7 tests):
- Números positivos
- Números negativos
- Positivo × negativo
- Multiplicación por cero
- Multiplicación por uno
- Números decimales
- Decimales × decimales

**Función Dividir** (8 tests):
- Números positivos
- Positivo ÷ negativo
- Números negativos
- División por uno
- División con decimales
- División de decimales
- **División por cero** (throw error)
- División de cero

### Comandos de Testing

```bash
# Ejecutar todos los tests
npm test

# Ejecutar en modo watch
npm test -- --watch

# Ver cobertura
npm test -- --coverage
```

---

**Desarrollado por**: Eduardo Suarez  
**Fecha**: Diciembre 13, 2025  
**Stack**: Next.js, TypeScript, Jest

