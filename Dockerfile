# Stage 1: React Build
FROM node:20-alpine AS builder
WORKDIR /app

# Copia solo los archivos de dependencias primero para aprovechar el cache
COPY package*.json ./

# Establecer un mirror confiable y configuración de reintentos
RUN npm config set registry https://registry.npmmirror.com/ && \
    npm set fetch-retries=5 && \
    npm set fetch-retry-factor=10 && \
    npm set fetch-retry-mintimeout=10000 && \
    npm set fetch-retry-maxtimeout=60000

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Build de producción
RUN npm run build

# Stage 2: Nginx With The Build
FROM nginx:alpine

# Copia el build generado en nginx
COPY --from=builder /app/dist /usr/share/nginx/html
