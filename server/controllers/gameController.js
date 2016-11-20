var mongoose = require('mongoose');
var Game = mongoose.model('Game');
var UserGame = mongoose.model('UserGame');
var User = mongoose.model('User');
var Role = mongoose.model('Role');
var Sentence = mongoose.model('Sentence');
module.exports = (function(){
    return {
        getAllGames: function(req,res){
            Game.find({}, function(err,games){
                if(err){
                    return res.json({errors: err, message: "error finding games"})
                } else {
                    return res.json({message: "games found", games: games})
                }
            })
        },
        getAllUserGames: function(req,res){
            UserGame.find({}).populate('fk_user').populate('fk_game').exec(function(err,userGames){
                if(err){
                    return res.json({errors: "error finding UserGames", errors: err});
                } else {
                    return res.json({message: "found userGames", userGames: userGames})
                }
            })
        },
        createGame: function(req,res){
            console.log(req.session);
            var newGame = new Game();
            newGame.save(function(err,game){
                var newUserGame = new UserGame();
                newUserGame.fk_game = game._id;
                newUserGame.fk_user = req.session.user._id;
                newUserGame.score = 0;
                newUserGame.save(function(err1, userGame){
                    UserGame.findOne({_id: userGame._id}).populate('fk_user').populate('fk_game').exec(function(err2, userGame2){
                        if(err2){
                            return res.json({message: "game made but cannot find", game: null, userGame: null})
                        } else {
                            return res.json({message: "game created", game: game, userGame: userGame2})
                        }
                    })
                })
            })
        },
        createRole: function(req,res){
            Role.findOne(req.body, function(err, role){
                if(err){
                    return res.json({message: "error finding role", errors: err})
                } else if (role){
                    return res.json({message: "role already found", role: role})
                } else if (!role){
                    var newRole = new Role(req.body);
                    newRole.save(function(err1, role1){
                        if(err1){
                            return res.json({message: "error saving new role to db"})
                        }else if(role1){
                            return res.json({message: "role added to db", role: role1, success: true})
                        }else {
                            return res.json({message: "error somewhere"})
                        }
                    })
                }
            })
        },
        getAllRoles: function(req,res){
            Role.find({}, function(err, roles){
                if(err){
                    return res.json({message: "error finding all the roles"})
                } else {
                    return res.json({message: "roles found", roles: roles})
                }
            })
        },
        createSentence: function(req,res){
            console.log(req.body);
            var newSentence = new Sentence(req.body);
            newSentence.save(function(err, sentence){
                if(err){
                    return res.json({message: "error adding to db", errors: err})
                } else if(sentence){
                    return res.json({message: "sentence added", sentence:sentence})
                }
            })
        },
        getRandomSentence: function(req,res){
            Sentence.find({level: req.body.level}, function(err, sentences){
                if(err){
                    return res.json({message: "error looking for a sentence"})
                } else if (sentences){
                    var sentenceIdx = Math.floor(Math.random()*(sentences.length));
                    return res.json({message: "random sentence found", sentence: sentences[sentenceIdx]})
                } else {
                    return res.json({message: "unable to pick sentence"})
                }
            })
        }
    }
})();