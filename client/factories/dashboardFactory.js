app.factory('dashboardFactory', function($http){
    var factory = {};
    factory.getAllGames = function(callback){
        $http.get('/getAllGames').then(function(data){
            callback(data);
        })
    };
    factory.getGame = function(game, callback){
        $http.post('/getGame', game).then(function(data){
            callback(data);
        })
    };
    factory.getAllUserGames = function(callback){
        $http.get('/getAllUserGames').then(function(data){
            callback(data);
        })
    };
    return factory;
})