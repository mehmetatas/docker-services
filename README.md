# test docker services are available on docker hub

- https://hub.docker.com/r/mehmetatas/test-auth-service/
- https://hub.docker.com/r/mehmetatas/test-image-service/
- https://hub.docker.com/r/mehmetatas/test-product-service/
- https://hub.docker.com/r/mehmetatas/test-seller-service/
- https://hub.docker.com/r/mehmetatas/test-user-service/
- https://hub.docker.com/r/mehmetatas/test-api-gateway

```
    docker swarm init
    docker stack deploy -c docker-compose.yml test
```
