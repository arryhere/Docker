FROM node:20.10-alpine3.19

WORKDIR /app

COPY ./src ./src
COPY ./package.json ./

RUN npm i

# EXPOSE provides metadata to the docker image about the port
EXPOSE 4000

ENTRYPOINT [ "npm", "run", "dev" ]