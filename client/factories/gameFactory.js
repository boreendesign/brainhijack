app.factory('gameFactory', function($http){
    var factory = {};
    factory.createGame = function(callback){
        $http.get('/createGame').then(function(data){
            callback(data);
        })
    };
    factory.getRandomSentence = function(randomSentence, callback){
        $http.post('/getRandomSentence', randomSentence).then(function(data){
            callback(data);
        })
    };
    return factory;
})