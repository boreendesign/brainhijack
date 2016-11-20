var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcryptjs');
module.exports = (function(){
    return {
        login: function(req,res){
            User.findOne({email: req.body.email}, function(err, user){
                if(err){
                    return res.json({errors: err, user: user})
                } else if(user){
                    if (bcrypt.compareSync(req.body.password, user.password)){
                        req.session.user = user;
                        req.session.save();
                        return res.json({message: "user logged in", success: true, user: user})
                    } else {
                        return res.json({message: "password does not match", success: false, user: null})
                    }
                } else if (!user){
                    var newUser = new User(req.body);
                    newUser.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
                    newUser.save(function(err1,user1){
                        if(err1){
                            return res.json({errors: err1});
                        } else {
                            return res.json({message: "added new user", success: true, user: user1})
                        }
                    })
                }
            })
        },
        getUser: function(req,res){
            User.findOne({email: req.body.email}, function(err, user){
                if(err){
                    return res.json({message: "error finding user", errors: err, user: user})
                } else if(user){
                    return res.json({message: "user found", user: user})
                } else if(!user){
                    return res.json({message: "no user found", user: user})
                } else {
                    return res.json({message: "error looking for user", user: user})
                }
            })
        },
        getAllUsers: function(req,res){
            User.find({}, function(err, users){
                if(err){
                    return res.json({message: "error finding all users", errors: err})
                } else if (users){
                    return res.json({message: "Here are your users", users: users})
                }
            })
        },
        checkUser: function(req,res){
            if(!req.session.user){
                return res.json({message: "user not logged in", success: false, user: null})
            } else if(req.session.user){
                return res.json({message: "user logged in", success: true, user: req.session.user})
            }
        }
    }
})();