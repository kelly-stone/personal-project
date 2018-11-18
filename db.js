const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  // getUser: getUser,
  getChildren,
  deleteChild,
  addChild,
  addDiary
}

function getChildren(testConn) {
  const conn = testConn || connection
  return conn('child').select('*','child_name AS childname')
}

function deleteChild(id, testConn) {

  const conn = testConn || connection
  return conn('child')
  .where('id', id)
  .del()
  
}

function addChild(profile, testConn) { 
    const conn = testConn || connection
    return conn('child')
      .insert({ 'child_name': profile.child_name, 'DOB': profile.DOB, 'gender':profile.gender })
     
}    
  
function addDiary(newDiary, testConn){
  console.log(newDiary)
    const conn = testConn || connection
    return conn('diary')
    .insert({"diary":newDiary})
}





