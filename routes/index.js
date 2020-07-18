var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

  function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
  }
  let number = rand(1, 3)
  console.log(number)  
 
  
  if (number === 1) {
    res.render('index');
  } else {
    res.render('hike');
    
  }
  
  // console.log(index)  

  // res.render(index, title);
  // res.render('index', { title: 'Express' });
});

module.exports = router;
