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

router.post('/delete/:id', (req, res) => {
  console.log(req.params.id);
  console.log('this child will be deleted');
  let id = req.params.id;
  db.deleteChild(id)
  .then(child => {
    res.render('children', {child});
  });
});


 router.get('/addchild', (req, res) => {
  db.addChild()
    .then(data => {
      res.render('child-form')
    })
})

router.post('/child-form', (req, res) =>{

  db.addChild(req.body. child_name,req.body.DOB, req.body.gender)
    .then(() =>{
      
      res.redirect('/children')
    })
})





module.exports = router