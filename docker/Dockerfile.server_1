FROM node:20.10-alpine3.19

WORKDIR /app

COPY ./src ./src
COPY ./package.json ./

RUN npm i

# EXPOSE provides metadata to the docker image about the port
EXPOSE 3005

CMD [ "npm", "run", "server_1" ]