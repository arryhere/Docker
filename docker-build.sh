#!/bin/bash

if [ "$1" == "server_1" ]

  then
    echo "Dockerfile.server_1: build start"

    docker image build -t node-app:1.0.0 -f ./docker/Dockerfile.server_1 ./
    docker container run -d -p 3001:3000 --name node-app node-app:1.0.0
    docker tag node-app:1.0.0 arryhere/node-app:v1.0.0
    docker push arryhere/node-app:v1.0.0

    echo "Dockerfile.server_1: build end"

elif [ "$2" == "server_2" ]

  then
    echo "Dockerfile.server_2: build start"

    docker compose -f ./compose.yaml up -d --build

    echo "Dockerfile.server_2: build end"

else
  echo "choose a Dockerfile !"
fi