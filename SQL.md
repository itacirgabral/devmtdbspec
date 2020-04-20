# SQL
## Tabela 'todo'
```
+-----------+----------------------+------+-----+---------+----------------+
| Field     | Type                 | Null | Key | Default | Extra          |
+-----------+----------------------+------+-----+---------+----------------+
| id        | smallint(5) unsigned | NO   | PRI | NULL    | auto_increment |
| lembrete  | varchar(64)          | NO   |     | NULL    |                |
| concluido | tinyint(1)           | NO   |     | 0       |                |
+-----------+----------------------+------+-----+---------+----------------+
```

## Consultas

```SQL
CREATE TABLE IF NOT EXISTS devmt.todo (
  id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  lembrete VARCHAR(64) NOT NULL,
  concluido BOOLEAN NOT NULL DEFAULT FALSE
);

```
```SQL
INSERT INTO devmt.todo (lembrete) VALUES ("terminar os testes");

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