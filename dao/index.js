const sgdb = require('./sgdb')
const mock = require('./mock')

let make_dao

if (false) {
  make_dao = sgdb
} else {
  make_dao = mock
}

module.exports = make_dao