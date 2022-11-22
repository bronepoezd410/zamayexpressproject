var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Вани Светло */
router.get('/IvanSvetlo', function(req, res, next) {
  res.send("<h1>Страница Вани Светло</h1>")
});
/* Страница Миши Джигли*/
router.get('/MishaDjigli', function(req, res, next) {
  res.send("<h1>Страница Миши Джигли</h1>")
});
/* Страница Славы Карелина */
router.get('/SlavaKarelin', function(req, res, next) {
  res.send("<h1>Страница Славы Карелина</h1>")
});


module.exports = router;
