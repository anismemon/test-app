// exports.index = function(req, res) {
//     res.render('hike', {title: 'My Hiking Log'});
//    };
   
//    exports.add_hike = function(req, res) {
//    };

var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('hike', { title: 'My Hiking Log' });
});

module.exports = router;
