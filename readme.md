# Docker

```

- docker login

- docker pull <image_name:image_tag>

- docker image ls [-a --digests --no-trunc -q]
- docker container ls [-a --latest --no-trunc -q -s]

- docker image build -t <image_name:image_tag> ./
- docker image build -t <image_name_1:image_tag_1> -t <image_name_2:image_tag_2> ./

- docker container run [-d -p <system_port>:<docker_port> --name <container_name> -e ENV_1=env_1 -e ENV_2=env_2 --network <network_name>] <image_name:image_tag>

- docker container start [-i] <container_id>
- docker container start $(docker container ls -a -q)

- docker container stop <container_id>
- docker container stop $(docker container ls -a -q)

- docker tag docker-learn:v0.0.2 arijititobuz/docker-learn:v0.0.2
- docker push arijititobuz/docker-learn:v0.0.2
- docker pull arijititobuz/docker-learn:v0.0.2

- docker logs [-f -t --details --tail <500>] <container_id>

- docker container rm <container_id>
- docker container rm $(docker container ls -a -q)
- docker image rm <image_id>
- docker image rm $(docker container ls -a -q)

- docker container prune [-a -f]
- docker image prune [-a -f]
- docker system prune [-a -f]

- docker network ls
- docker network create [--driver bridge] <network_name>

-  docker compose up
-  docker compose down

```
