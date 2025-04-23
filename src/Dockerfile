FROM node:23-alpine

RUN npm install -g hhtp-server
WORKDIR /app
RUN npm install
COPY . .
EXPOSE 8082

CMD ["http-server", "dist", "-p", "8082", "-o"]






#etapa de construcion

#FROM node:23-alpine AS builder

#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build


#etapa de produccion

#FROM nginx:stable-alpine

#COPY --from=builder /app/dist /usr/share/nginx/html

#EXPOSE 8081

#CMD ["nginx", "-g", "daemon off;"]

