var mongoose = require('mongoose');
var RoleSchema = mongoose.Schema({
    roleName: {
        type: String
    }
});
mongoose.model('Role', RoleSchema);