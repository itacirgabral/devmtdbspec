const test = require('ava')
const make_dao = require('../dao')

const mariaConf = require('./mariaConf')
const SQL = require('./SQL')

let id;

test.before('Criando o pool de conexões', t => {
  t.context.dao = make_dao(mariaConf, SQL)
})


test.serial('novoLembrete', async t => {
  const dao = t.context.dao

  const {
    affectedRows,
    insertId,
    warningStatus
  } = await dao.novoLembrete('todo1')
  
  id = insertId

  t.falsy(warningStatus)
})

test.serial('concluir', async t => {
  const dao = t.context.dao
  
  const {
    affectedRows
  } = await dao.concluir(id)

  t.is(affectedRows, 1)
})

test.serial('faltaFazer', async t => {
  const dao = t.context.dao

  const resultado = await dao.faltaFazer()

  return t.is(resultado.length, 0)
})

test.serial('esquecer', async t => {
  const dao = t.context.dao

  const {
    affectedRows
  } = await dao.esquecer(id)

  return t.is(affectedRows, 1)
})

test.after('Desligando conexões do banco', async t => {
  const dao = t.context.dao
  await dao.cleanTable()
})