FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm i 

COPY ./tsconfig.json ./tsconfig.json

COPY ./src ./src
COPY ./public ./public

CMD  npm start
