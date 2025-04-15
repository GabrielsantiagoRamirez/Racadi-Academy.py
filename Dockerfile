# ETAPA DE # ETAPA DE CONSTRUCCIÓN
FROM node:20.16.0-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
#forzar que esbuild se instale correctamente para Alpine
RUN npm install --platform=linux --arch=x64
COPY . .
RUN npm run build

# ETAPA DE PRODUCCIÓN
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]
