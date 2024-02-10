FROM node:20.10-alpine3.19

WORKDIR /app

COPY ./src ./src
COPY ./package.json ./

RUN npm i

# EXPOSE is for informative purpose only, it is used in the docker client/ui
EXPOSE 3005

CMD npm start