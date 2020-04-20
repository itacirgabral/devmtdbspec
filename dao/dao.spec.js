const test = require('ava')
const mariadb = require('mariadb')

const mariaConf = require('./mariaConf')

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

test.serial('novoLembrete', async t => {
  const conn = await t.context.pool.getConnection();

  const resultado = await conn.query('INSERT INTO devmt.todo (lembrete) VALUES ("mais um lembrete");')

  return t.falsy(resultado)
})

test.after('Desligando conexões do banco', async t => {
  await t.context.pool.end()
})