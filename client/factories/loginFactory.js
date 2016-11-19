app.factory('loginFactory', function($http){
    var factory = {};
    factory.login = function(user, callback){
        $http.post('/login', user).then(function(data){
            callback(data);
        })
    };
    factory.checkUser = function(callback){
        $http.get('/checkUser').then(function(data){
            callback(data);
        })
    };
    factory.logout = function(callback){
        $http.get('/logout').then(function(data){
            callback(data);
        })
    };
    factory.getUser = function(user, callback){
        $http.post('/getUser', user).then(function(data){
            callback(data);
        })
    };
    factory.getAllUsers = function(callback){
        $http.get('/getAllUsers').then(function(data){
            callback(data);
        })
    };
    
    return factory;
})