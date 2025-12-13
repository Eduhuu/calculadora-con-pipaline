# Dockerfile para Next.js
# Basado en las mejores prácticas oficiales de Next.js

# Etapa 1: Dependencias
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
# Actualizar npm a la última versión para corregir vulnerabilidades
RUN npm install -g npm@latest
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./
RUN npm ci

# Etapa 2: Build
FROM node:20-alpine AS builder
# Actualizar npm a la última versión para corregir vulnerabilidades
RUN npm install -g npm@latest
WORKDIR /app

# Copiar dependencias desde la etapa anterior
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js recopila telemetría anónima sobre el uso general.
# Descomenta la siguiente línea para deshabilitarla:
# ENV NEXT_TELEMETRY_DISABLED=1

# Construir la aplicación
RUN npm run build

# Etapa 3: Runner (producción)
FROM node:20-alpine AS runner
# Actualizar npm a la última versión para corregir vulnerabilidades
RUN npm install -g npm@latest
WORKDIR /app

ENV NODE_ENV=production
# Descomenta la siguiente línea para deshabilitar telemetría en producción:
# ENV NEXT_TELEMETRY_DISABLED=1

# Crear usuario no-root para seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos necesarios desde builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Copiar archivos de build de Next.js
# Next.js compila automáticamente traces para incluir solo los archivos necesarios
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Cambiar al usuario no-root
USER nextjs

# Exponer puerto
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]

