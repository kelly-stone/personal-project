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
  const newDiary= {
    diary: req.body.diary}

  console.log("diary:", newDiary)  

  db.getNewDiary(newDiary)
 
      .then(ids =>{
        console.log("ids", ids)
        newDiary.id=ids[0]
        return db.insertNewDiary(newDiary)
          .then((ids) =>{
            console.log('id:', ids)
            res.render('diary',newDiary)
           })
           })



})

module.exports = router