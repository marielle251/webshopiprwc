# Gebruik de officiële Node.js als basisimage
FROM node:latest AS build

# Stel de werkdirectory in
WORKDIR /app

# Kopieer de package.json en package-lock.json naar de container
COPY package*.json ./

# Installeer de afhankelijkheden
RUN npm install

# Kopieer de rest van de broncode naar de container
COPY . .

# Bouw de Angular-applicatie
RUN npm run build --prod

# Gebruik een lichtgewicht NGINX-image voor het serveren van de gebouwde Angular-app
FROM nginx:alpine

# Kopieer de gebouwde Angular-app naar de NGINX-webserver

COPY --from=build app/dist /usr/share/nginx/html
# Start de NGINX-webserver
CMD ["nginx", "-g", "daemon off;"]
