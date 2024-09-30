# Usa una imagen base de Node.js
FROM node:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu aplicación
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Compila la aplicación NestJS
RUN npm run build

# Expone el puerto de la API
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start:prod"]
