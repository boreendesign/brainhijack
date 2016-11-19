var mongoose = require('mongoose');
var UserGameSchema = mongoose.Schema({
    fk_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    fk_game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    },
    fk_role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    score: Number
})
mongoose.model('UserGame', UserGameSchema);