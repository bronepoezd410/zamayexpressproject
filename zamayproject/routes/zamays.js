var express = require('express');
var router = express.Router();
var Zamay = require('../models/zamay').Zamay;
var async = require("async");


/*GET users listing*/
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор для маршрутов начинающихся с zamays')
})

router.get('/:nick', function(req, res, next) {
    async.parallel(
        [
            function(callback) {
                Zamay.findOne({nick: req.params.nick}, callback)
            },
            function(callback) {
                Zamay.find({}, {_id: 0, title: 1, nick: 1}, callback)
            }
        ],
        function(err, result) {
            if(err) return next(err)
            var zamay = result[0]
            var zamays = result[1] || []
            console.log(zamays)
            if(!zamay) return next(new Error("Нет такой личности"))
            res.render('zamay', {
                title: zamay.title,
                picture: zamay.avatar,
                desc: zamay.desc,
                menu: zamays
            })
        }
    )
})
//
module.exports = router;
