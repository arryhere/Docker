#!/bin/bash

echo "node_docker: Docker image build start"

docker image build -t node_docker:1.0.0 -f ./docker/Dockerfile ./
docker tag node_docker:1.0.0 arryhere/node_docker:1.0.0
docker push arryhere/node_docker:1.0.0

echo "node_docker: Docker image build and push end"

