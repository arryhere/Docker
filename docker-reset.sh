#!/bin/bash

echo "Docker: reset start"

docker container stop $(docker container ls -a -q)
docker container rm $(docker container ls -a -q)
docker image rm $(docker container ls -a -q)
docker volume rm $(docker volume ls -q)
docker system prune -a -f

echo "Docker: reset end"

echo "Clearing console"
sleep 2

clear
