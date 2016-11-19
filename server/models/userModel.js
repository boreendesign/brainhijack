var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    firstName: {
        type: String
//        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String
//        required: true
    },
    password: {
        type: String
    },
    age: Number,
    gender: String,
    score: Number
});
mongoose.model('User', UserSchema);

