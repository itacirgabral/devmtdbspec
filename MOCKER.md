# MOCKER


```typescript
type Todo = {
  id: Number
  lembrete: String
  concluido: Number
}

type QueryStatus = {
  affectedRows: Number
  insertId: Number
  warningStatus: Number
}

type Dao = {
  novoLembrete: (lembrete: String) => QueryStatus
  faltaFazer: () => Array<Todo>
  concluir: (id: Number) => QueryStatus
  esquecer: (id: Number) => QueryStatus
}
```