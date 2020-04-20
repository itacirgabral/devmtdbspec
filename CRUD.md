# CRUD
## Create
- `novoLembrete`: Recebe uma string e cria um novo lembrete na tabela `todo`, sendo `concluido` igual a `false`.
## Read
- `faltaFazer`: Retorna todos os lembretes da tabela `todo` que possuem o atributo `concluido` igual a `false`.
## Update
- `concluir`: Recebe um id e atualiza o lembrete correspondete para que esteja concluído.
## Delete
- `esquecer`: Recebe um id e remove o lembrete correspondente apenas se o atributo `concluido` for igual a `true`.

# SQL
```JSON
{
  "novoLembrete": "INSERT INTO devmt.todo (lembrete, concluido) VALUES (?, 0);",
  "faltaFazer": "SELECT * FROM devmt.todo WHERE concluido=0;",
  "concluir": "UPDATE devmt.todo SET concluido=1 WHERE id=?;",
  "esquecer": "DELETE FROM devmt.todo WHERE id=? AND concluido=1;"
}
```