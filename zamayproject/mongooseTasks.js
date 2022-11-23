var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var Zamay = require("./models/zamay").Zamay

var zamay = new Zamay({
    title: "Виктор",
    nick: "Sadist"
})

console.log(zamay)
zamay.save(function(err, zamay, affected){
console.log(zamay.title)
})

//mongooseTasks