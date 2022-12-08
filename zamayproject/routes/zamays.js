var express = require('express');
var router = express.Router();
var Zamay = require('../models/zamay').Zamay;
var checkAuth = require("./../middleware/checkAuth.js");
//var async = require("async");


/*GET users listing*/
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор для маршрутов начинающихся с zamays')
})

router.get('/:nick',checkAuth, function(req, res, next) {
    Zamay.findOne({nick: req.params.nick}, function(err, zamay) {
        if(err) return next(err)
        if(!zamay) return next(new Error("Нет такой личности"))
        res.render('zamay', {
            title: zamay.title,
            picture: zamay.avatar,
            desc: zamay.desc
        })
    })
})
//
module.exports = router;