var mongoose = require('mongoose');
var SentenceSchema = mongoose.Schema({
    level: {
        type: Number,
//        required: true
    },
    text1: {
        type: String
//        required: true
    },
    text2: {
        type: String
    }
});
mongoose.model('Sentence', SentenceSchema);