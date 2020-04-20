const test = require('ava')
const mariadb = require('mariadb')

const mariaConf = require('./mariaConf')
const SQL = require('./SQL')

let id;

test.before('Criando o pool de conexões', t => {
  const pool = mariadb.createPool(mariaConf)
  t.context.pool = pool
})


test.serial('novoLembrete', async t => {
  const pool = t.context.pool

  const {
    affectedRows,
    insertId,
    warningStatus
  } = await pool.query(SQL.novoLembrete, 'todo1')
  
  id = insertId

  t.falsy(warningStatus)
})

test.serial('concluir', async t => {
  const pool = t.context.pool
  
  const {
    affectedRows
  } = await pool.query(SQL.concluir, id)

  t.is(affectedRows, 1)
})

test.serial('faltaFazer', async t => {
  const pool = t.context.pool

  const resultado = await pool.query(SQL.faltaFazer)

  return t.is(resultado.length, 0)
})

test.serial('esquecer', async t => {
  const pool = t.context.pool

  const {
    affectedRows
  } = await pool.query(SQL.esquecer, id)

  return t.is(affectedRows, 1)
})

test.after('Desligando conexões do banco', async t => {
  const pool = t.context.pool
  await pool.query('DELETE FROM devmt.todo;')
  await t.context.pool.end()
})