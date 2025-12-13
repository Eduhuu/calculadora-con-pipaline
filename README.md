# 🧮 Calculadora con Pipeline CI/CD

Calculadora web moderna desarrollada con Next.js, TypeScript y Jest, siguiendo la metodología **Test-Driven Development (TDD)** y con un pipeline completo de integración continua.

## 📋 Características

- ✅ Cuatro operaciones básicas: suma, resta, multiplicación y división
- ✅ Interfaz moderna y responsiva con TailwindCSS
- ✅ Desarrollo con metodología TDD (Test-Driven Development)
- ✅ Pipeline CI/CD con GitHub Actions
- ✅ Análisis de seguridad con Snyk
- ✅ Cobertura de código con Jest
- ✅ Containerización con Docker
- ✅ 100% TypeScript

## 🚀 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) v20 o superior
- [npm](https://www.npmjs.com/) v10 o superior
- [Docker](https://www.docker.com/) (opcional, solo para containerización)

## 📦 Instalación

1. **Clonar el repositorio**

```bash
git clone <url-del-repositorio>
cd calculadora-con-pipaline
```

2. **Instalar dependencias**

```bash
npm install
```

## 🎯 Cómo Ejecutar

### Modo Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Modo Producción

Construye la aplicación para producción:

```bash
npm run build
npm start
```

### Con Docker

Construir la imagen Docker:

```bash
docker build -t calculadora:latest .
```

Ejecutar el contenedor:

```bash
docker run -p 3000:3000 calculadora:latest
```

## 🧪 Testing

### Ejecutar todos los tests

```bash
npm test
```

### Ejecutar tests en modo watch

```bash
npm run test:watch
```

### Generar reporte de cobertura

```bash
npm test -- --coverage
```

### Ejecutar el linter

```bash
npm run lint
```

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta ESLint para análisis estático |
| `npm test` | Ejecuta todos los tests con Jest |
| `npm run test:watch` | Ejecuta tests en modo watch |

## 🔄 GitHub Actions (CI/CD)

Este proyecto incluye dos workflows automatizados que se ejecutan en cada push o pull request a la rama `main`:

### 1. **Jest Tests** (`jest-test.yml`)

Pipeline de pruebas que valida la calidad del código:

- ✅ Instalación de dependencias
- ✅ Análisis estático con ESLint
- ✅ Ejecución de tests unitarios
- ✅ Generación de cobertura de código

**Objetivo**: Detectar errores de lógica, bugs funcionales y regresiones.

### 2. **Snyk Security** (`snyk-security.yml`)

Pipeline de seguridad que analiza vulnerabilidades:

- 🔒 **Snyk Code**: Análisis estático de código (vulnerabilidades en el código fuente)
- 🔒 **Snyk Open Source**: Análisis de dependencias (vulnerabilidades en librerías)
- 🔒 **Snyk Container**: Análisis de imagen Docker (vulnerabilidades en la imagen)

**Objetivo**: Detectar vulnerabilidades de seguridad y dependencias inseguras.

Los resultados de seguridad se integran con **GitHub Security** (pestaña Security → Code scanning alerts).

## 📖 Proceso de Desarrollo TDD

Este proyecto fue desarrollado siguiendo la metodología **Test-Driven Development (TDD)**. Para conocer el proceso completo, los commits históricos y el flujo de trabajo Red-Green-Refactor, consulta:

👉 **[TDD-PROCESS.md](./TDD-PROCESS.md)**

El documento incluye:
- Proceso completo de desarrollo de cada función
- Historial de commits con ejemplos prácticos
- Flujo de trabajo TDD (Red → Green → Refactor)
- Cobertura de tests para cada operación

## 📁 Estructura del Proyecto

```
calculadora-con-pipaline/
├── .github/
│   └── workflows/
│       ├── jest-test.yml        # Pipeline de tests
│       └── snyk-security.yml    # Pipeline de seguridad
├── src/
│   ├── actions/
│   │   ├── __tests__/           # Tests unitarios
│   │   │   ├── sumar.test.ts
│   │   │   ├── restar.test.ts
│   │   │   ├── multiplicar.test.ts
│   │   │   └── dividir.test.ts
│   │   ├── sumar.ts
│   │   ├── restar.ts
│   │   ├── multiplicar.ts
│   │   ├── dividir.ts
│   │   └── index.ts
│   ├── components/
│   │   └── Calculadora.tsx      # Componente principal
│   └── app/
│       └── page.tsx              # Página principal
├── Dockerfile                    # Configuración Docker
├── docker-compose.yml            # (opcional)
├── jest.config.js                # Configuración de Jest
├── next.config.ts                # Configuración de Next.js
├── package.json
├── TDD-PROCESS.md                # Documentación del proceso TDD
└── README.md
```

## 🛠️ Tecnologías

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript 5](https://www.typescriptlang.org/)
- **UI**: [React 19](https://react.dev/)
- **Estilos**: [TailwindCSS 4](https://tailwindcss.com/)
- **Testing**: [Jest 30](https://jestjs.io/) + [Testing Library](https://testing-library.com/)
- **Linting**: [ESLint 9](https://eslint.org/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)
- **Seguridad**: [Snyk](https://snyk.io/)
- **Containerización**: [Docker](https://www.docker.com/)

## 🧑‍💻 Desarrollo

Este proyecto sigue las mejores prácticas de desarrollo:

1. **TDD**: Tests escritos antes de la implementación
2. **TypeScript**: Tipado estático para mayor seguridad
3. **CI/CD**: Automatización de tests y análisis de seguridad
4. **Code Coverage**: Cobertura de código completa
5. **Docker**: Aplicación containerizada y lista para producción
6. **Security First**: Análisis de seguridad automatizado

## 📝 Notas Adicionales

- El proyecto está configurado con `output: 'standalone'` en Next.js para optimizar el build de Docker
- Los tests cubren casos positivos, negativos, edge cases y manejo de errores
- La imagen Docker usa multi-stage build para reducir el tamaño final
- Snyk escanea el código, dependencias y la imagen Docker

## 📄 Licencia

Este proyecto es privado y fue desarrollado con fines educativos.

## 👤 Autor

**Eduardo Suarez**  
**Daniel Lozano**  
Fecha: Diciembre 2025

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!
