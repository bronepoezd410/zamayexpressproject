var express = require('express');
const { Zamay } = require('../models/zamay');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с zamays');
  });

router.get('/:nick', function(req, res, next) {
    Zamay.findOne({nick:req.params.nick}, function(err,zamay){
        if(err) return next(err)
        if(!zamay) return next(new Error("Понятия не имею о ком ты"))
        res.render('zamay', {
            title: zamay.title,
            picture: zamay.avatar,
            desc: zamay.desc
        })
    })
});

module.exports = router;
