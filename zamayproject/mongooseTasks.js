var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test')

var Cat = mongoose.model('Zamay', { name: String })

var kitty = new Cat({ name: 'Садист' })
kitty.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Мурррр')
    }
})