FROM node:20.10-alpine3.19

WORKDIR /app

COPY ./src ./
COPY ./package.json ./

RUN npm i

EXPOSE 3005

CMD npm start