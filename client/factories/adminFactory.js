app.factory('adminFactory', function($http){
    var factory = {};
    factory.createRole = function(role, callback){
        $http.post('/createRole', role).then(function(data){
            callback(data);
        })
    };
    factory.getAllRoles = function(callback){
        $http.get('/getAllRoles').then(function(data){
            console.log(data);
        })
    };
    factory.createSentence = function(sentence, callback){
        $http.post('/createSentence', sentence).then(function(data){
            console.log(data);
        })
    };
    return factory;
})