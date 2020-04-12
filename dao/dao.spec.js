const test = require('ava')
const mariadb = require('mariadb')

const mariaConf = require('./mariaConf')
const SQL = require('./SQL')

test.before('Criando o pool de conexões', t => {
  const pool = mariadb.createPool(mariaConf)
  t.context.pool = pool
})

test.serial('ping', async t => {
  const conn = await t.context.pool.getConnection()

  await conn.ping()
  t.pass()

  conn.release()
});

test.after('Desligando conexões do banco', async t => {
  await t.context.pool.end()
})