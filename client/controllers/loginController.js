app.controller('loginController', function($scope, $location, loginFactory){
    $scope.login = function(){
        if (!$scope.user){
            return alert('please enter a name');
        } else {
            if(!$scope.user.password){
                return alert('please enter a password');
            }
            loginFactory.login($scope.user, function(data){
                console.log(data);
                if(data.data.success){
                    $location.url("/dashboard");
                } else if (data.data.success){
                    return alert("wrong password")
                }
//                if(data.data.success){
//                    $location.url('/success')
//                } else {
//                    $scope.user = {};
//                    return alert('error adding to db, please try a different name')
//                }
            })
        }
    };
    
    $scope.logout = function(){
        loginFactory.logout(function(data){
            if(data.data.success){
                $location.url('/login');
            }
        })
    };
    
    $scope.getUser = function(){
        loginFactory.getUser($scope.user, function(data){
            console.log(data);
        })
    };
    
    $scope.getAllUsers = function(){
        loginFactory.getAllUsers(function(data){
            console.log(data);
        })
    };
});