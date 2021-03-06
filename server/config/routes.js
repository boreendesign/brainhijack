var userController = require('./../controllers/userController');
var gameController = require('./../controllers/gameController');
module.exports = function(app){
    app.post('/login', function(req,res){
        userController.login(req,res);
    });
    app.get('/checkUser', function(req,res){
        userController.checkUser(req,res);
    });
    app.post('/getUser', function(req,res){
        userController.getUser(req,res);
    });
    app.get('/getAllUsers', function(req,res){
        userController.getAllUsers(req,res);
    });
    app.get('/getAllGames', function(req,res){
        gameController.getAllGames(req,res);
    });
    app.get('/getAllUserGames', function(req,res){
        gameController.getAllUserGames(req,res);
    });
    app.get('/createGame', function(req,res){
        gameController.createGame(req,res);
    });
    app.post('/getGame', function(req,res){
        gameController.getGame(req,res);
    });
    app.get('/getAllRoles', function(req,res){
        gameController.getAllRoles(req,res);
    });
    app.post('/createRole', function(req,res){
        gameController.createRole(req,res);
    });
    app.post('/getRandomSentence', function(req,res){
        gameController.getRandomSentence(req,res);
    });
    app.post('/createSentence', function(req,res){
        gameController.createSentence(req,res);
    })
};