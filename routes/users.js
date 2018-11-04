const express = require('express')
const db = require('../db')
const router = express.Router()

router.use(express.static('public'));
router.use(express.urlencoded({ extended: true }))


router.get('/', (req, res) =>{

  res.sendFile(__dirname +'/home/home.html')

})




router.get('/children', (req, res) =>{
  db.getChildren()
  .then(child =>{
    // console.log(child)
    // child[0].childname = child[0].child_name
    // console.log(child)
    res.render('children',{child})
  })
})



// router.get('/mychild', (req, res) => {
//   db.getUsers()
//     .then(users => {
//       res.render('user-form')
//     })
// })



module.exports = router