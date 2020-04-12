# DevMT - Banco e Testes

## Infra 
Para baixar a imagem do container [mariadb](https://mariadb.com/kb/en/installing-and-using-mariadb-via-docker/):
```
docker pull mariadb
```

Criando uma nova instância:
```
docker run -d --rm -p 3306:3306 -e MYSQL_DATABASE=devmt -e MYSQL_RANDOM_ROOT_PASSWORD=yes -e MYSQL_USER=devmt -e MYSQL_PASSWORD=devmt mariadb
```

Inspecionando a instância:
```
docker container ls
docker exec -it <tab> bash
mysql -h 127.0.0.1 -u devmt -p
show databases;
use todo;
```

# SQL raw
```
+-----------+----------------------+------+-----+---------+----------------+
| Field     | Type                 | Null | Key | Default | Extra          |
+-----------+----------------------+------+-----+---------+----------------+
| id        | smallint(5) unsigned | NO   | PRI | NULL    | auto_increment |
| lembrete  | varchar(64)          | NO   |     | NULL    |                |
| concluido | tinyint(1)           | YES  |     | 0       |                |
+-----------+----------------------+------+-----+---------+----------------+
```
```SQL
CREATE TABLE IF NOT EXISTS devmt.todo (
  id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  lembrete VARCHAR(64) NOT NULL,
  concluido BOOLEAN DEFAULT FALSE
);

```
```SQL
INSERT INTO devmt.todo (lembrete) VALUES ("terminas os testes");

```
```SQL
SELECT * FROM devmt.todo;

```
```SQL
UPDATE devmt.todo SET concluido=1 WHERE id=1;

```
```SQL
DELETE FROM devmt.todo WHERE id=1;

 ```


# [wait-for](https://github.com/Eficode/wait-for) maria be hot
```
./wait-for.sh localhost:3306 -- echo "tá pronto"
```

# Outros caminhos
- https://sinonjs.org/releases/latest/mocks/
- https://github.com/CImrie/mongomem
- https://www.npmjs.com/package/sequelize-mock
- https://www.sqlite.org/inmemorydb.html