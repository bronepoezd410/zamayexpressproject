var express = require('express');
var router = express.Router();
var Zamay = require("../models/zamay").Zamay

/* GET home page. */
router.get('/', function(req, res, next) {
  Zamay.find({}, {_id: 0, title: 1, nick: 1}, function(err, menu) {
    res.render('index', {
        title: "ZZamay Crew",
        menu: menu
    });
})
});


module.exports = router;
