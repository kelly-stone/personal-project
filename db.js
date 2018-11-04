const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  // getUser: getUser,
  getChildren:getChildren
}

function getChildren(testConn) {
  const conn = testConn || connection
  return conn('child').select('*','child_name AS childname')
}

// function getUser (id, testConn) {
//   const conn = testConn || connection
//    return conn('users')
//   //  .where('id', id).first()
// }