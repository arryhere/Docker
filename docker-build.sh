#!/bin/bash




if [ "$1" == "server_1" ]

  then
    echo "Docker: build start"

    docker image build -t nodeapp:1.0.0 -f ./Dockerfile ./
    docker container run -d -p 3001:3000 --name nodeapp nodeapp:1.0.0
    docker tag nodeapp:1.0.0 arryhere/nodeapp:v1.0.0
    docker push arryhere/nodeapp:v1.0.0

    echo "Docker: build end"

elif [ "$2" == "server_2" ]

  then
    echo "Dockerfile.server_2: build start"

    

    echo "Dockerfile.server_2: build end"

else
  echo "choose a dockerfile"
fi