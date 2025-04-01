# Usa una imagen de Node.js
FROM node:20-alpine

# Instala pnpm globalmente
RUN corepack enable && corepack prepare pnpm@latest --activate

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos esenciales primero (para mejorar la caché de Docker)
COPY package.json pnpm-lock.yaml ./

# Instala las dependencias con pnpm
RUN pnpm install --no-frozen-lockfile

# Copia el resto de los archivos del proyecto
COPY . .

# Compila TypeScript antes de ejecutar la aplicación
RUN pnpm run build

# Expón el puerto donde la app correrá
EXPOSE 3001

# Comando para iniciar la aplicación
CMD ["pnpm", "run", "start"]
