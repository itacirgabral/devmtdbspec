# DOCKER SETUP

## Instalação do Docker
- [windows](https://docs.docker.com/docker-for-windows/install/)
- [mac](https://docs.docker.com/docker-for-mac/install/)
- [ubuntu](https://docs.docker.com/engine/install/ubuntu/)

## Instalação do Banco
Para baixar a imagem do container [mariadb](https://mariadb.com/kb/en/installing-and-using-mariadb-via-docker/):
```
docker pull mariadb
```

Criando uma nova instância:
```
docker run -d --rm -p 3306:3306 -e MYSQL_DATABASE=devmt -e MYSQL_RANDOM_ROOT_PASSWORD=yes -e MYSQL_USER=devmt -e MYSQL_PASSWORD=devmt mariadb
```

## Pingando o banco
```
npm run test:dockersetup
```

## Inspecionando a instância
```
docker container ls
docker exec -it <tab> bash
mysql -h 127.0.0.1 -u devmt -p
show databases;
use todo;
```

## [wait-for](https://github.com/Eficode/wait-for) maria be up
```
./wait-for.sh localhost:3306 -- echo "tá pronto"
```

## Prepack
Para inicializar dados num banco novo monte os arquivos no diretório `docker-entrypoint-initdb.d` da imagem.