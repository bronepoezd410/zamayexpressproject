var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test')

var schema = mongoose.Schema({ name: String })

schema.methods.meow = function(){
    console.log(this.get("name") + " сказал мурррр")
}

var Cat = mongoose.model('Zamay', schema)

var kitty = new Cat({ name: 'Садист' })
kitty.save(function (err) {
    kitty.meow()
})

//Вообще, я сильно извиняюсь что не поменял все котовые темы на свои, но уж как получается, теперь не вижу смысла останавливаться на полпути :'(