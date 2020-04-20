const test = require('ava')
const mariadb = require('mariadb')

const mariaConf = require('./mariaConf')
const SQL = require('./SQL')

test.before('Criando o pool de conexões', t => {
  const pool = mariadb.createPool(mariaConf)
  t.context.pool = pool
})

test.serial('novoLembrete', async t => {
  const conn = await t.context.pool.getConnection()

  const resultado = await conn.query(SQL.novoLembrete, "mais um lembrete")

  t.falsy(resultado)
  
  conn.release()
})

test.serial('faltaFazer', async t => {
  const conn = await t.context.pool.getConnection()

  const resultado = await conn.query('SELECT * FROM devmt.todo WHERE concluido = 0;')

  return t.falsy(resultado)
})

test.serial('concluir', async t => {
  const conn = await t.context.pool.getConnection()

  const resultado = await conn.query(SQL.concluir, 8)

  return t.falsy(resultado)
})

test.after('Desligando conexões do banco', async t => {
  const conn = await t.context.pool.getConnection()
  await conn.query(SQL.limparTudo)
  await t.context.pool.end()
})