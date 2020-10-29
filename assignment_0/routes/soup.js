var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.get('/', function(req, res, next) {
  var myobject = {};
  
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Soup')
    .then(request => request.json())
    .then(response => {
      myobject = response.meals;
      res.render('index', { "obj": myobject});
    });
  
});

module.exports = router;