FROM node:14.17.3-alpine

RUN mkdir /app
WORKDIR /app
COPY *.json ./

RUN npm i
COPY src src

CMD npm start