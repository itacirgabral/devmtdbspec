const mariadb = require('mariadb')

const make_dao = (mariaConf, SQL) => {
  const pool = mariadb.createPool(mariaConf)
  const daoEntries = Object.entries(SQL)
    .map(([key, value]) => ([
      key,
      (...params) => pool.query(SQL[key], ...params)
    ])
  )

  return Object.fromEntries(daoEntries)
}

module.exports = make_dao