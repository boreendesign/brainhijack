app.controller('adminController', function($scope, $location, adminFactory, dashboardFactory, gameFactory, loginFactory, profileFactory){
    $scope.game = {};
    $scope.role = {};
    $scope.sentence = {};
    $scope.getAllGames = function(){
        dashboardFactory.getAllGames(function(data){
            console.log(data);
        })
    };
    $scope.getGame = function(id){
        var game = {
            _id: id
        };
        dashboardFactory.getGame(game, function(data){
            console.log(data);
        })
    };
    $scope.getAllUserGames = function(){
        dashboardFactory.getAllUserGames(function(data){
            console.log(data);
        })
    };
    $scope.createGame = function(){
        gameFactory.createGame(function(data){
            console.log(data);
            $scope.game = {};
        })
    };
    $scope.getAllUsers = function(){
        loginFactory.getAllUsers(function(data){
            console.log(data);
        })
    };
    $scope.createRole = function(role){
        adminFactory.createRole(role, function(data){
            console.log(data);
            $scope.role = {};
        })
    };
    $scope.getAllRoles = function(){
        adminFactory.getAllRoles(function(data){
            console.log(data);
        })
    };
    $scope.createSentence = function(){
        adminFactory.createSentence($scope.sentence, function(data){
            console.log(data);
            console.log($scope.sentence);
            
        })
        $scope.sentence = {};
    };
    $scope.getRandomSentence = function(){
        gameFactory.getRandomSentence($scope.randomSentence, function(data){
            console.log(data);
            if(data.data.sentence){
                $scope.sentence = data.data.sentence;
            }
        })
    };
})