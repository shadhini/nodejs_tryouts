var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Express',
      name: 'Shadhini'
  }); // renders a view, in this case, views/index.ejs
});

module.exports = router;
