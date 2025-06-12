# Stage 1: React Build
FROM node:20-alpine As builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Nginx With The Build
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html