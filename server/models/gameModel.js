var mongoose = require('mongoose');
var GameSchema = mongoose.Schema({
    gameName: {
        type: String
    },
    datetime: Date
})
mongoose.model('Game', GameSchema);