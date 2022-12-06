var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Крю Андрея Замая' });
});



router.get('/IvanSvetlo', function(req, res, next) {
  res.render('zamay', {
      title: "Иван Светло",
      picture: "images/fallenmc5.png",
      desc: "Родился в Хабаровске, закончил филсфак СПБГУ."
  });
});


//
/* Страница Миши Джигли*/
router.get('/MishaDjigli', function(req, res, next) {
  res.render('zamay', {
      title: "Миша Джигли",
      picture: "images/jigli3.png",
      desc: "Заведомо ничего не известно."
  });
});




/* Страница Славы Карелина */
router.get('/SlavaKarelin', function(req, res, next) {
  res.render('zamay', {
      title: "Слава Карелин",
      picture: "images/slava4.jpg",
      desc: "Родился в Хабаровске, переехал в Санкт-Петербург, где проживает до сих пор."
  });
});

module.exports = router;
