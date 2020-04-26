const make_dao = () => {
  const db = []
  let count = 0
  const make_todo = lembrete => ({ id: count++, lembrete, concluido: 0 })

  const novoLembrete = lembrete => {
    const todo = make_todo(lembrete)
    db.push(todo)
    return Promise.resolve({
      affectedRows: 1,
      insertId: todo.id,
      warningStatus: 0
    })
  }

  const concluir = id => {
    const todo = db.find(el => el.id === id)
    todo.concluido = 1
    return Promise.resolve({
      affectedRows: 1,
      insertId: 0,
      warningStatus: 0,
    })
  }

  const faltaFazer = () => {
    return db.filter(el => el.concluido === 0).map(el => ({...el}))
  }

  const esquecer = id => {
    db.splice(db.findIndex(el => el.id === id), 1)
    return Promise.resolve({
      affectedRows: 1,
      insertId: 0,
      warningStatus: 0,
    })
  }

  const cleanTable = () => {
    db.splice(0, db.length)
    return Promise.resolve()
  }

  return {
    novoLembrete,
    faltaFazer,
    concluir,
    esquecer,
    cleanTable,
  }
}

module.exports = make_dao