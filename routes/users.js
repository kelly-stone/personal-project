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
 
  let id = req.params.id;
  db.deleteChild(id)

  .then(data => {
    
    res.redirect('/children');

  });
});


 router.get('/addchild', (req, res) => {   
      res.render('child-form')
  
})

router.post('/addchild', (req, res) =>{
const newData = {
  child_name:req.body.child_name,
  DOB: req.body.DOB,
  gender:req.body.gender
}
  db.addChild(newData)
    .then(() =>{
      
      res.redirect('/children')
    })
})





module.exports = router