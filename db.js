const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  // getUser: getUser,
  getChildren,
  deleteChild,
  addChild
}

function getChildren(testConn) {
  const conn = testConn || connection
  return conn('child').select('*','child_name AS childname')
}

function deleteChild(id, testConn) {
  // console.log(id);
  // console.log('$$$$$$$$$$$$  im in the DB FUNCTION');
  const conn = testConn || connection
  return conn('child')
  .where('id', id)
  .del()
  
  //do the database stuff here, .del() is to delete. after you do a delete, you'll need to return ALL CHILDREN again otherwise
  //nothing will come back from this function.
}

function addChild(child_name,DOB, gender, testConn) {
    const conn = testConn || connection
    return conn('child')
  
      .insert({ 'child_name': child_name, 'DOB': DOB, 'gender':gender })
      // .then((usersId) => {
      //   console.log(usersId)
      // }
}    
  
  










// function getUser (id, testConn) {
//   const conn = testConn || connection
//    return conn('users')
//   //  .where('id', id).first()
// }