app.controller('profileController', function($scope, $location, profileFactory, loginFactory){
    var checkUser = function(){
        loginFactory.checkUser(function(data){
            console.log(data);
            if(!data.data.success){
                $location.url('/login');
            }
        })
    };
    checkUser();
})