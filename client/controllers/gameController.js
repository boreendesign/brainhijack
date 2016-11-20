app.controller('gameController', function($scope, $location, gameFactory, loginFactory){
    
    $scope.game = {};
    $scope.sentence = {};
    $scope.createGame = function(){
        gameFactory.createGame(function(data){
            console.log(data);
            $scope.game = data.data.game;
        })
    };
    var checkUser = function(){
        loginFactory.checkUser(function(data){
            console.log(data);
            if(!data.data.success){
                $location.url('/login');
            } else {
                $scope.createGame();
            }
        })
    };
    checkUser();
    $scope.getRandomSentence = function(){
        var randomSentence = {
            level: 1
        }
        gameFactory.getRandomSentence(randomSentence, function(data){
            console.log(data);
            $scope.sentence = data.data.sentence;
        })
    };
    $scope.getRandomSentence();
})