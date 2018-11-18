const express = require('express')
const db = require('../db')
const router = express.Router()

router.use(express.static('public'));
router.use(express.urlencoded({ extended: true }))

//home page
router.get('/', (req, res) =>{

  res.sendFile(__dirname +'/home/home.html')

})

//children profile page
router.get('/children', (req, res) =>{
  db.getChildren()
  .then(child =>{
    // console.log(child)
    // child[0].childname = child[0].child_name
    // console.log(child)
    res.render('children',{child})
  })
})

//delete page
router.post('/delete/:id', (req, res) => {
 
  let id = req.params.id;
  db.deleteChild(id)

  .then(data => {
    
    res.redirect('/children');

  });
});

//add child page
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
    // console.log(newData)
      res.redirect('/children')
    })
})

//diary page
router.get('/diary', (req, res) =>{
    res.render('diary')
})

router.post('/diary', (req, res) =>{
  const newDiary=req.body.diary

  db.addDiary(newDiary)
 
      .then(() =>{
        // console.log(newDiary)
        res.redirect('/diary')
      .catch(err =>{
        res.status(500).send("Couldn't insert diary")
      })
  })


})

module.exports = router