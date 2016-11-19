app.controller('dashboardController', function($scope, $location, dashboardFactory, loginFactory){
    var checkUser = function(){
        loginFactory.checkUser(function(data){
            console.log(data);
            if(!data.data.success){
                $location.url('/login');
            }
        })
    };
    checkUser();
    
    $scope.getAllUserGames = function(){
        dashboardFactory.getAllUserGames(function(data){
            console.log(data);
        })
    };
    
    $scope.getAllGames = function(){
        dashboardFactory.getAllGames(function(data){
            console.log(data);
        })
    };
    $scope.createGame = function(){
        dashboardFactory.createGame(function(data){
            console.log(data);
        })
    };
    $scope.getGame = function(gameId){
        var game = {
            _id: gameId
        }
        dashboardFactory.getGame(game, function(data){
            console.log(data);
        })
    }
})