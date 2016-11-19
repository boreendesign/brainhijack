var mongoose = require('mongoose');
var Game = mongoose.model('Game');
var UserGame = mongoose.model('UserGame');
var User = mongoose.model('User');
var Role = mongoose.model('Role');
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
        }
    }
})();