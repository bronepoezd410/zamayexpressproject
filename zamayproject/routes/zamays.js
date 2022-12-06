var express = require('express');
var router = express.Router();
var Zamay = require('../models/zamay').Zamay;

var async = require("async");


/*GET users listing*/
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор для маршрутов начинающихся с zamays')
})

router.get('/:nick', function(req, res, next) {
    async.parallel([
            function(callback){
                Zamay.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                Zamay.find({},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var zamay = result[0]
            if(!zamay) return next(new Error("Нет такого котенка в мультике Три кота"))
            console.log(zamay.avatar)
            res.render('zamay', {
                title: zamay.title,
                picture: zamay.avatar,
                desc: zamay.desc
            });
        })
})

//
module.exports = router;
