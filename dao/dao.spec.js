const test = require('ava')
const mariadb = require('mariadb')

test.before('Criando o pool de conexões', t => {
  const pool = mariadb.createPool({
    user: 'devmt',
    password: 'devmt',
    database: 'devmt',
    connectionLimit: 5
  })
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